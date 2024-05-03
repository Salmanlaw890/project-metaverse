import styles from "../styles/index"
import {motion } from "framer-motion"
import {fadeIn ,staggerContainer } from "../utils/motion";
import { TypingText } from "../components/CostumText";



function About() {
  return (
    <>
    <section className={`${styles.xPaddings} z-20 relative`}>
      <div className="gradient-02 z-0"/>
      {/* @ts-ignore comment */}
      <motion.div variants={staggerContainer}
      initial="hidden" 
      whileInView="show"
      viewport={{once:false , amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex-col${styles.flexCenter}  `}> 
      <TypingText title="| About Metaverse" textStyle = "text-center"/>
      <motion.p 
      variants={fadeIn('up' , "tween" , 0.2 , 1)} 
      className="mt-8px font-normal text-[20px] text-white text-center">
        <span className="font-extrabold">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the
        
         <span className="font-extrabold"> madness of the metaverse</span>
        
        of today, using only
        <span className="font-extrabold"> VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's
        <span className="font-extrabold"> explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img 
       src="public\arrow-down.svg" alt="arrow" 
       variants={fadeIn('up' , 'tween' , 0.3 , 1)} 
       className="w-[18px] h-[18px] object-contain mt-[28px] ml-[35rem]"/>
      </motion.div>
      
    </section>
    </>
  )
}

export default About