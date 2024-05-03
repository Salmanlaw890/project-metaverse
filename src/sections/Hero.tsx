
import styles from "../styles/index"
import {motion } from "framer-motion"
import {slideIn ,staggerContainer ,textVariant} from "../utils/motion";

function Hero() {
  return (
    <>
    <section className={` pl-6`}>
      <motion.div
      // @ts-ignore comment
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount:0.25}} 
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading}`}>
            Metaverse
          </motion.h1>  
          <motion.div variants={textVariant(1.3)} className="flex justify-start items-center">
            <h1 className={`${styles.heroHeading} z-10  `}>Ma</h1>
            <div className={`${styles.heroDText} z-10`}></div>
            <h1 className={`${styles.heroHeading} z-10`}>Ness</h1>
          </motion.div>
          <motion.div variants={slideIn("right" , "tween" , 0.2 , 1)} className="relative w-full -mt[12px]">
            <div className={`relative w-[75em] h-[160px] hero-gradient rounded-tl-[140px] z-0 -top-[30px] mb-10`}>
              <img src="public\cover.png" alt="cover" className="w-full h-[300px] object-cover rounded-tl-[140px] z-0 -top-[150px] relative"/>
              <a href="#explore">
                <div className="w-full justify-end flex -mt-[190px] pr-[40px] relative z-10">
                  <img src="public\stamp.png" alt="images" className="w-[100px] h-[100px] object-contain" />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </>
  )
}

export default Hero