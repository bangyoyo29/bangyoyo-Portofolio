import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="T-Shirt Design"
            category="Merchandise"
            image={workImgThree}
          />
          <ProjectsCard
            title="Ricklink Logo"
            category="Design"
            image={workImgOne}
          />
          <ProjectsCard
            title="Masker Design"
            category="Design"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgFour}
          />
          <ProjectsCard
            title="Grapic Design"
            category="Design"
            image={workImgSix}
          />
          <ProjectsCard
            title="Feed Design"
            category="Social Media Design"
            image={workImgEight}
          />
          <ProjectsCard
            title="Packaging Design"
            category="Design"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
