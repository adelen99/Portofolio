import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
const Tech = (): React.ReactNode => {
  return (
    <>
      <p className={styles.sectionSubText}>Technologies I work with</p>
      <h2 className={styles.sectionHeadText}>Tech Stack.</h2>

      <div className="flex flex-row flex-wrap justify-center mt-10 gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
