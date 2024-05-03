import styles from "../styles/index"
import {motion } from "framer-motion"
import {staggerContainer, fadeIn , planetVariants } from "../utils/motion";
import { TypingText ,TitleText , StartSteps } from "../components/CostumText";
import {startingFeatures} from "../../constants/index";

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/*  @ts-ignore comment */}
      <motion.div variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount:0.25}} 
      className={`${styles.innerWidth} mx-auto flex gap-8`}>
        <motion.div variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}>
          <img src="public\get-started.png" alt="start" 
          className="w-[70%] h-[70%] object-contain" />
        </motion.div>
        <motion.div variants={fadeIn('left' , 'tween' , 0.2 , 1)} 
        className="flex-[0.75] flex-col justify-center" >
          <TypingText title="How Metaverse Works" textStyle=""/>
          <TitleText title="Get Started With Just Few Clicks" textStyle=""/>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature , index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted