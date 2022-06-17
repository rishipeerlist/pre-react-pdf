import Image from "next/image";
import React from "react";
import { getCurrentCompany } from "../utils";

const Resume = ({ profile }) => {
  const { displayName, profilePicture, headline, skills, experience } = profile;

  return (
    <main className="flex justify-center items-center mt-4">
      <div>
        <div>
          <h1 className="font-semibold lg:text-2rem text-xl leading-120">
            {displayName}
          </h1>

          <h2 className="text-sm lg:text-xl leading-145 text-left">
            {headline}
          </h2>
          <h3>{getCurrentCompany(experience)}</h3>
          <div>
            <div className="flex mt-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-white flex text-primary py-0.5 px-3 items-center justify-between text-xs mb-2 mr-2 capitalize border border-primaryBorder rounded-full hover:bg-gray-gray1"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-48 w-48 relative overflow-hidden">
        <Image
          alt={displayName}
          src={profilePicture}
          className="w-48 h-48 rounded-full bg-center bg-no-repeat bg-cover bg-white border flex justify-center items-center object-cover"
          layout="fill"
        />
      </div>
    </main>
  );
};

export default Resume;
