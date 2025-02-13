import React from "react";
import SkillText from "../sub/SkillText";
import SkillDataProvider from "../sub/SkillDataProviders";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full  overflow-hidden pb-80  py-20"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center" >
        {SkillLogo.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-7 items-center">
        {SkillLogo2.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>


      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

const SkillLogo = [
  {
    name: "Html 5",
    Image: "/skillLogo/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/skillLogo/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java Script",
    Image: "/skillLogo/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/skillLogo/tailwind.png",
    width: 80,
    height: 80,
  },

  {
    name: "React",
    Image: "/skillLogo/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/skillLogo/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "Type Script",
    Image: "/skillLogo/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/skillLogo/next.png",
    width: 80,
    height: 80,
  },
];

const SkillLogo2 = [
  {
    name: "Node js",
    Image: "/skillLogo/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Express js",
    Image: "/skillLogo/express.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/skillLogo/mongodb.png",
    width: 40,
    height: 40,
  },

  {
    name: "Postger SQL",
    Image: "/skillLogo/postger.png",
    width: 70,
    height: 70,
  },
  {
    name: "My SQL",
    Image: "/skillLogo/mysql.png",
    width: 70,
    height: 70,
  },
  {
    name: "Prisma",
    Image: "/skillLogo/prisma.webp",
    width: 70,
    height: 70,
  },
];
