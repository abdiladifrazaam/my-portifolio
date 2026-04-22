import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className='w-full max-w-[360px]'>
      {/* Removed Tilt – it was breaking on mobile */}
      <div className='bg-tertiary p-5 rounded-2xl w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
            onError={(e) => console.error(`Failed to load image: ${image}`, e)}
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!projects || projects.length === 0) {
      console.error("Works: projects array is empty or undefined");
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <div className="text-white text-center p-10">
        ⚠️ Could not load projects. Check console for details.
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return <div className="text-white text-center p-10">Loading projects...</div>;
  }

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects show how I turn ideas into clean, functional web and mobile apps.
          Each one reflects practical problem-solving, responsive design, and real development experience.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 justify-items-center gap-7 md:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");