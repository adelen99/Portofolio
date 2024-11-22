import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

type ServiceCardProps = {
  index: number;
  icon: string;
  title: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, icon, title }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] shadow-card rounded-lg"
      >
        <div className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = (): React.ReactNode => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("right", "", 0.5, 1)}
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate web developer with experience in JavaScript and
        TypeScript, specializing in frameworks like React, Next.js, and Node.js.
        I focus on building modern, scalable, and high-performance web
        applications. Committed to continuous learning, I strive to stay updated
        with the latest trends in web development to create impactful solutions
        and exceptional user experiences.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
