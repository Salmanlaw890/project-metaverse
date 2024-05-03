import styles from "../styles/index";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components/CostumText";

function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      {/*  @ts-ignore comment */}
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto gap-8`}
      >
        <TypingText title="| People On The World" textStyle="text-center" />
        <TitleText
          title="Track friends around you and invite them to play together in the same world"
          textStyle="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="\people-01.png"
              alt="people-01"
              className="w-full h-full"
            />
          </div>

          <div className="absolute left-20 top-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="\people-02.png"
              alt="people-02"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img
              src="\people-03.png"
              alt="people-03"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-16 right-[20%] w-[120px] h-[120px] bg-[#5d6680] rounded-2xl">
            <img
              src="\planet-01.png"
              alt="people-04"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="relative">
              <div className="absolute bottom-7 left-2 w-[40px] h-[40px] rounded-full bg-[#5d6680] flex">
                <img
                  src="\people-03.png"
                  alt="people-01"
                  className="w-full h-full"
                />
                <div className="absolute left-11 top-3 w-20">
                  <p className="text-xs">Johny Depp</p>
                </div>
              </div>
              <h1 className="absolute bottom-2 text-sm left-2">Hogwarts</h1>
            </div>
          </div>

          <div className="absolute top-1/2 left-[25%] w-[120px] h-[120px] rounded-2xl bg-[#5d6680]">
            <img
              src="\planet-02.png"
              alt="people-04"
              className="w-full h-full object-fill rounded-2xl "
            />
            <div className="relative">
              <div className="absolute bottom-7 left-2 w-[40px] h-[40px] rounded-full bg-[#5d6680] flex">
                <img
                  src="\people-01.png"
                  alt="people-01"
                  className="w-full h-full"
                />
                <div className="absolute left-11 top-3 w-20">
                  <p className="text-xs">John Cena</p>
                </div>
              </div>
              <h1 className="absolute bottom-2 text-sm left-2">Upside Down</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
