import { SKILLS_IMAGE_URL_PREFIX } from "./constants/constants";
import { getUnixTime, fromUnixTime } from "date-fns";

export const getSkillImage = (skillName) => {
  let name = skillName.split(" ").join("_").toLowerCase();

  if (name.includes("c#") || name.includes("csharp")) {
    name = "csharp";
  }
  switch (name) {
    case "c++":
      name = "cpp";
      break;
    case ".net":
      name = "net";
      break;
  }

  return `${SKILLS_IMAGE_URL_PREFIX}${name}.svg`;
};

export function getYearString(monthsCount) {
  const years = Math.floor(monthsCount / 12);
  let yearString = "";
  if (years > 0) {
    // Note - comma is important
    yearString = years > 1 ? `${years} years` : `${years} year`;
  }
  return yearString;
}

export function getMonthString(monthsCount) {
  const months = monthsCount % 12;
  let monthString = "";
  if (months > 0) {
    monthString = months > 1 ? `${months} months` : `${months} month`;
  }
  return monthString;
}

export function sortByDate(a, b) {
  if (a.start < b.start) {
    return 1;
  }
  if (a.start > b.start) {
    return -1;
  }
  return 0;
}

export const calculateExperience = (experience) => {
  const formattedExperience = experience.map((exp) => {
    let startMonth;
    let startYear;
    let endMonth;
    let endYear;
    let start;
    let end;

    if (exp.current) {
      const date = new Date();
      endYear = date.getFullYear();
      endMonth = date.getMonth() + 1;
      end = getUnixTime(date);
    } else {
      const date = new Date(exp.endDate);
      endYear = date.getFullYear();
      endMonth = date.getMonth() + 1;
      end = getUnixTime(date);
    }
    const date = new Date(exp.startDate);
    startMonth = date.getMonth() + 1;
    startYear = date.getFullYear();
    start = getUnixTime(new Date(exp.startDate));

    let months;
    months = (endYear - startYear) * 12;
    months -= startMonth;
    months += endMonth;

    const totalYears = getYearString(months);
    const totalMonths = getMonthString(months);
    const duration =
      totalMonths && totalYears
        ? `${totalYears}, ${totalMonths}`
        : `${totalYears} ${totalMonths}`;
    return { ...exp, duration, start, end };
  });

  formattedExperience.sort(sortByDate).reverse();

  const dateRange = [];
  const indexIgnored = [];
  let start;
  let end;

  for (let i = 0; i < formattedExperience.length; i++) {
    if (indexIgnored.indexOf(i) === -1) {
      start = formattedExperience[i].start;
      end = formattedExperience[i].end;

      for (let j = 0; j < formattedExperience.length; j++) {
        if (i !== j && indexIgnored.indexOf(j) === -1) {
          if (formattedExperience[j].start > end) {
            indexIgnored.push(i);
            break;
          }

          if (formattedExperience[j].start < end) {
            if (formattedExperience[j].end > end) {
              end = formattedExperience[j].end;
            }
            indexIgnored.push(j);
          }
        }
      }

      dateRange.push({
        start,
        end,
      });
    }
  }

  const dates = dateRange.map((range) => ({
    start: fromUnixTime(range.start),
    end: fromUnixTime(range.end),
  }));

  const monthArr = dates.map((dt) => {
    const d1 = new Date(dt.start);
    const d2 = new Date(dt.end);

    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth() + 1;

    return months;
  });

  const allMonths = monthArr.reduce((a, b) => a + b, 0);

  const totalYears = getYearString(allMonths);
  const totalMonths = getMonthString(allMonths);

  const total =
    totalMonths && totalYears
      ? `${totalYears}, ${totalMonths}`
      : `${totalYears} ${totalMonths}`;

  return {
    totalExperience: total,
    experiences: formattedExperience.reverse(),
  };
};

export const getCurrentCompany = (experiences) => {
  let currentCompany = "";
  experiences.forEach((exp) => {
    if (exp.current) {
      currentCompany = exp.company;
    }
  });
  return currentCompany;
};
