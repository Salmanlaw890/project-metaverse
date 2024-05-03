import { motion } from "framer-motion";
import styles from "../styles";
import { socials } from "../../constants/index";
import { footerVariants } from "../utils/motion";

function Footer() {
  return (
    <>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.paddings} py-8 relative`}
      >
        <div className="footer-gradient"></div>
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
          <div className="flex items-center justify-between gap-5 flex-wrap">
            <h4 className="font-bold text-[70px] text-white">
              Enter the Metaverse
            </h4>
            <button className="flex items-center h-fit py-6 px-6 rounded-[32px] gap-[12px] bg-[#25618b]">
              <img
                src="public\headset.svg"
                alt="head"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="text-[16px] text-white">ENTER METAVERSE</span>
            </button>
          </div>

          <div className="flex flex-col">
            <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <h4 className="font-extrabold text-white text-[24px]">Metaverse</h4>
              <p className=" text-white text-[14px] opacity-50">Copyright © 2012-2021 Metaverse. All Rights reserved</p>
              <div className="flex gap-4">
                {socials.map((social)=>(
                  <img src={social.url} alt={social.name} key={social.name} 
                  className="w-[24px] h-[24px] object-contain cursor-pointer"/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
