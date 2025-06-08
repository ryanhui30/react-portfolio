import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[160px] w-full'>
    <motion.div
      variants={fadeIn("up", "tween", index * 0.2, 1)} // Changed to match motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className='w-full green-pink-gradient p-[1px] rounded-[14px] shadow-card'
    >
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='block cursor-pointer hover:scale-105 transition-transform duration-300'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[14px] py-3 px-6 min-h-[160px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={title}
            className='w-10 h-10 object-contain'
          />
          <h3 className='text-white text-[14px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Recently graduated from UC Santa Cruz with a Bachelor’s in Computer Science,
        I’m excited to start my career in software development and engineering.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-6'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
