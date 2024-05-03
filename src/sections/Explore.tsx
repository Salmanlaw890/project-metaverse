import styles from "../styles/index"
import {motion } from "framer-motion"
import {staggerContainer } from "../utils/motion";
import { TypingText ,TitleText , ExploreCard } from "../components/CostumText";
import { useState } from "react";
import {exploreWorlds} from "../../constants/index";

function Explore() {
  const [active, setActive] = useState('world-2')
  return (
    <>
    <section className={`${styles.paddings}`} id="explore" >
     {/* @ts-ignore comment  */}
      <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount:0.25}} 
      className={`${styles.innerWidth} mx-auto flex flex-col`}>

        <TypingText title="| The World" textStyle="text-center"/>
        <TitleText title="Choose The World You Want"
        textStyle="text-center" />

      <div className="mt-[50px] flex min-h-[70vh] gap-5">
        {exploreWorlds.map((world , index)=>(
          // @ts-ignore comment
          <ExploreCard key={world.id}
           {...world}
           index={index}
           active={active}
           handleClick={setActive} />
        ))}
      </div>
      </motion.div>
    </section>
    </>
  )
}

export default Explore