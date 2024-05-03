import styles from "../styles/index";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TypingText, TitleText, NewFeatures } from "../components/CostumText";
import { newFeatures } from "../../constants/index";

function WhatsNew() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/*  @ts-ignore comment */}
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex gap-8`}
      >
       
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] flex-col justify-center"
          >
          <TypingText title="| Whats New " textStyle="" />
          <TitleText title="Whats New About Metaverse" textStyle="" />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[48px]">
          {newFeatures.map((feature ) => (
            // instead of sending 3 times image,title,subtitle we just send {...features} and all sent
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${styles.flexCenter}`}
          >
          <img
            src="public\whats-new.png"
            alt="start"
            className="w-[70%] h-[70%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default WhatsNew;
