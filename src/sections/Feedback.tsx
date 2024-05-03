import styles from "../styles/index";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

function Feedback() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/*  @ts-ignore comment */}
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto gap-6 flex`}
      >
        <motion.div variants={fadeIn('right', "tween" ,0.2 ,1)}
         className="flex-[0.5] flex justify-end flex-col w-full gradient-05 rounded-[32px] border-[1px] relative border-[#6a6a6a] p-6"> 
         <div className="feedback-gradient"></div>
          <div>
            <h4 className="text-white text-[26px] font-bold leading-[36px]">Samantha</h4>
            <p className="mt-[8px] leading-[16px] text-[12px] text-white">Founder | Metaverse</p>
          </div>
          <p className="mt-[24px] leading-[39px] text-[24px] text-white">
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum culpa non repellat molestiae aliquid ea dolore vero omnis earum odio pariatur, modi dolores deserunt, perferendis accusantium."
          </p>
        </motion.div>


        <motion.div variants={fadeIn('left', "tween" ,0.2 ,1)}
         className="flex flex-1 justify-center items-center relative" >
          <img src="public\planet-09.png" alt="planet-09"
          className="w-full h-[610px] min-h-[210px] rounded-[40px] object-cover" />

        </motion.div>
        <motion.div variants={zoomIn(0.4 , 1)}
          className="block absolute top-[15%] left-[33%]">
            <img src="public\stamp.png" alt="stamp" 
            className="w-[155px] h-[155px] object-contain" />

          </motion.div>
      </motion.div>
    </section>
  );
}

export default Feedback;
