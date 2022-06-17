import React from "react";
import {
  Text,
  Link,
  View,
  StyleSheet,
  Page,
  Document,
  Image,
  Font,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import { calculateExperience, getCurrentCompany } from "../utils";

Font.registerEmojiSource({
  format: "png",
  url: "https://twemoji.maxcdn.com/2/72x72/",
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "http://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
    },
    {
      src: "http://fonts.gstatic.com/s/inter/v11/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: "600",
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100%",
    marginLeft: 20,
  },
  left: {
    flex: 80,
    paddingTop: 12,
  },
  right: {
    flex: 20,
    paddingTop: 12,
    backgroundColor: "#FAFBFC",
    marginLeft: 20,
    paddingLeft: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  heading: {
    fontSize: 15,
    color: "#212121",
    fontWeight: "600",
    paddingBottom: 5,
  },
  headline: {
    fontSize: 10,
    color: "#212121",
    width: "70%",
    lineHeight: 1.2,
  },
  skillsContainer: {
    marginTop: 24,
  },
  skillsHeading: {
    fontSize: 8,
    fontWeight: "600",
    letterSpacing: 1.1,
  },
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 12,
  },
  skillTag: {
    backgroundColor: "#F6F8FA",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    margin: 2,
    marginLeft: 0,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  experiences: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  experiencesTimeline: {
    marginTop: 12,
    borderTop: "1px solid #E1E4E8",
  },
  experienceContainer: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid #E1E4E8",
  },
  experienceLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 22,
    borderRight: "1px solid #E1E4E8",
    paddingVertical: 10,
    paddingRight: 8,
    position: "relative",
  },
  experienceRight: {
    flex: 78,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  date: {
    fontSize: 8,
    fontWeight: "600",
    color: "#24292E",
  },
  tag: {
    fontSize: 8,
    color: "#6A737D",
    backgroundColor: "#F6F8FA",
    marginLeft: 12,
    marginVertical: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  dot: {
    position: "absolute",
    top: "70%",
    right: -3.5,
    height: 6,
    width: 6,
    borderRadius: "50%",
    backgroundColor: "#0E1723",
  },
  hollowDot: {
    position: "absolute",
    top: "65%",
    right: -4.5,
    height: 8,
    width: 8,
    borderRadius: "50%",
    backgroundColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#0E1723",
  },
  companyName: {
    fontSize: 10,
    color: "#219653",
    paddingTop: 2,
    paddingBottom: 4,
  },
  companyCity: {
    color: "#24292E",
  },
  snapshotHeading: {
    fontSize: 8,
    color: "#24292E",
    fontWeight: "600",
    letterSpacing: 1.1,
  },
  infoContainer: {
    paddingLeft: 5,
  },
  info: {
    marginVertical: 10,
  },
  infoHeading: {
    color: "#6A737D",
    fontSize: 8,
    paddingBottom: 2,
  },
  linksContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginRight: 1,
  },
  infoSubHeading: {
    fontSize: 8,
    fontWeight: "600",
    lineHeight: 1.2,
    color: "#24292E",
    paddingRight: 1,
  },
});

const PdfDocument = ({ profile }) => {
  console.log(profile);
  const {
    displayName,
    headline,
    skills,
    experience,
    education,
    profilePicture,
    preferredPronoun,
    address,
    website,
    socialLinks,
  } = profile;

  const getSocialLinks = (links) =>
    Object.entries(links).map(([key, value], index) => (
      <>
        <Link src={value} style={styles.infoSubHeading}>
          {key}
        </Link>
        {Object.keys(links).length - 1 !== index && <Text>&middot;</Text>}
      </>
    ));
  const { totalExperience, experiences } = calculateExperience(experience);

  return (
    <Document className="bg-green">
      <Page size="A4" style={styles.page}>
        <View style={styles.grid}>
          <View style={styles.left}>
            <View style={styles.header}>
              <View style={styles.profile}>
                <Image
                  style={styles.profile}
                  src="../images/profile.png"
                  alt={displayName}
                />
              </View>
              <View>
                <Text style={styles.heading}>{displayName}</Text>
                <Text style={styles.headline}>
                  {headline.replace(
                    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
                    ""
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.skillsContainer}>
              <Text style={styles.skillsHeading}>TOOLS & TECHNOLOGIES</Text>
              <View style={styles.tagsContainer}>
                {skills.map((skill) => (
                  <Text style={styles.skillTag} key={skill.name}>
                    {skill.name}
                  </Text>
                ))}
              </View>
            </View>
            {/* Experiences Section Start */}
            <View style={styles.skillsContainer}>
              <View style={styles.experiences}>
                <Text style={styles.skillsHeading}>💼 EXPERIENCE</Text>
                <Text style={styles.tag}>{`Total ${totalExperience}`}</Text>
              </View>
              <View style={styles.experiencesTimeline}>
                {experiences.map((exp, index) => {
                  const startDt = new Date(exp.startDate);
                  const endDt = new Date(exp.endDate);
                  return (
                    <View key={exp.uuid} style={styles.experienceContainer}>
                      <View style={styles.experienceLeft}>
                        <Text style={styles.date}>
                          {format(startDt, "MMM")}, {startDt.getFullYear()}
                        </Text>
                        {exp?.duration.trim() !== "" && (
                          <Text style={styles.tag}>{exp?.duration}</Text>
                        )}
                        <Text style={styles.date}>
                          {exp?.current
                            ? "present"
                            : `${format(endDt, "MMM")}, ${endDt.getFullYear()}`}
                        </Text>
                        <View
                          style={index === 0 ? styles.hollowDot : styles.dot}
                        ></View>
                      </View>
                      <View style={styles.experienceRight}>
                        <Text
                          style={{
                            ...styles.infoSubHeading,
                            fontSize: 10,
                          }}
                        >
                          {exp.position}
                        </Text>
                        <Text style={styles.companyName}>
                          {exp.company}{" "}
                          {exp?.location?.country && (
                            <Text style={styles.companyCity}>
                              {`| ${exp?.location?.country}`}
                            </Text>
                          )}
                        </Text>
                        <Text
                          style={{
                            ...styles.infoSubHeading,
                            fontWeight: "400",
                          }}
                        >
                          {exp?.description?.replace(/<\/?[^>]+(>|$)/g, "")}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            {/* Experiences Section End */}
            {/* Education Section Start */}
            <View style={styles.skillsContainer}>
              <View style={styles.experiences}>
                <Text style={styles.skillsHeading}>🎓 EDUCATION</Text>
              </View>
              <View style={styles.experiencesTimeline}>
                {education.map((edu) => {
                  const startDt = new Date(edu.startDate);
                  const endDt = new Date(edu.endDate);
                  return (
                    <View key={edu.uuid} style={styles.experienceContainer}>
                      <View style={styles.experienceLeft}>
                        <Text
                          style={{ ...styles.date }}
                        >{`${startDt.getFullYear()} -`}</Text>
                        <Text style={styles.date}>{endDt.getFullYear()}</Text>
                        <View style={styles.dot}></View>
                      </View>
                      <View style={styles.experienceRight}>
                        <Text
                          style={{
                            ...styles.infoSubHeading,
                            fontSize: 10,
                            paddingBottom: 4,
                          }}
                        >
                          {edu?.institution}
                        </Text>
                        <Text
                          style={{
                            ...styles.infoSubHeading,
                            fontWeight: "400",
                          }}
                        >
                          {`${edu?.degree}, ${edu?.major}`}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            {/* Education Section End */}
          </View>
          <View style={styles.right}>
            <Text style={styles.snapshotHeading}>SNAPSHOT</Text>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>👋 Preferred Pronouns</Text>
                <Text style={styles.infoSubHeading}>
                  {preferredPronoun ? preferredPronoun : "-"}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>🏢 Current company</Text>
                <Text style={styles.infoSubHeading}>
                  {experience.length ? getCurrentCompany(experience) : "-"}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>📍 Current location</Text>
                <Text
                  style={styles.infoSubHeading}
                >{`${address.city}, ${address.country}`}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>💼 Total work experience</Text>
                <Text style={styles.infoSubHeading}>
                  {experience.length ? totalExperience : "-"}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>🌐 Website</Text>
                <Link src={website} style={styles.infoSubHeading}>
                  {website ? website : "-"}
                </Link>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>📧 Email</Text>
                <Link src={profile.email} style={styles.infoSubHeading}>
                  {profile.email ? profile.email : "-"}
                </Link>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>📞 Mobile</Text>
                <Text style={styles.infoSubHeading}>
                  {profile.mobile ? profile.mobile : "-"}
                </Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoHeading}>🙌 Social</Text>
                <View style={styles.linksContainer}>
                  {Object.keys(socialLinks).length !== 0
                    ? getSocialLinks(socialLinks)
                    : "-"}
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;
