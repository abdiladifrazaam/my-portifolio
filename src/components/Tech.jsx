import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">
          Technologies
        </h2>
        <p className="text-lg text-center text-secondary max-w-2xl">
          Core tools I use to build modern web, mobile, and UI/UX experiences.
        </p>
      </div>

      {/* Tech Balls */}
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "");
