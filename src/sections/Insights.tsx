import styles from "../styles/index";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components/CostumText";
import { insights } from "../../constants/index";

function Insights() {
  return (
    <>
      <section className={`${styles.paddings} relative z-10`}>
        {/*  @ts-ignore comment */}
        <motion.div variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto gap-8`}
        >
        <TypingText title="| Insights" textStyle="text-center" />
        <TitleText
          title="Insights about metaverse"
          textStyle="text-center"
          />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((insight , index) =>(
            //  insight${index}, it ensures that each key is unique and stable even if the order of the items changes.
            <InsightCard key={`insight${index}`} {...insight} index={index + 1} />
          ))}
        </div>

        </motion.div>
      </section>
    </>
  );
}

export default Insights;
