
import styles from "../styles/index"
import {motion} from "framer-motion"
import {navVariants} from "../utils/motion";


function Navbar() {
  return (
    <div>
      <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView={"show"}
      className={`${styles.xPaddings} py-8 relative`}>
        <div className="absolute w-[90%] inset-0 gradient-01"/>
          <div className={`${styles.innerWidth} flex justify-between mx-auto gap-8`}>
            <img src="public\search.svg" alt="search" className="w-[24px] h-[24px] object-contain"/>
            <h2 className="font-extrabold text-[24px] text-white leading-[30px]">METAVERSUS</h2>
            <img src="public\menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain"/>
          </div>
        
      </motion.nav>
    </div>
  )
}

export default Navbar