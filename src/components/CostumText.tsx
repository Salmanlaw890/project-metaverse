
import {motion } from "framer-motion"
import {fadeIn, textContainer } from "../utils/motion";
import styles from "../styles";

interface TypingTextProps {
    title: string;
    textStyle: string;
  }
interface ExploreCard{
    id:number
    imgUrl:string
    title:string
    index:number 
    active:number | string
    handleClick: any;
}
interface TypingStartSteps {
    key: string;
    number: number;
    text:string
  }

interface TypingSubTitle {
    title:string,
    imgUrl:string,
    subtitle:string
  }

interface TypingCard {
    title:string,
    imgUrl:string,
    subtitle:string
    index:number
  }

export const TypingText = ({title , textStyle }:TypingTextProps):any=>
    ( 
    <motion.p 
    variants={textContainer}
    className={`${textStyle} font-normal text-[14px] text-white`}
    >
        {Array.from(title).map((letter  , index)=>(
            <motion.span variants={textContainer} key={index}>
                {letter === " " ?  '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
    )


export const TitleText = ({title , textStyle }:TypingTextProps):any=>
    (
        <motion.h2 variants={textContainer}
        initial="hidden" 
        whileInView="show"
        className={`mt-[8px] font-bold text-[40px] text-white ${textStyle}`} >
            {title}
        </motion.h2>
    )


export const ExploreCard = ({id, imgUrl, title, index, active, handleClick}:ExploreCard):any=>
        (
            <motion.div variants={fadeIn('right','spring', index*0.5, 0.75)}
            className={`${active === id ? "flex-[10]" : "flex-[2]"} relative flex items-center justify-normal min-w-[170px] h-[700px] transition-flex duration-[0.7s] ease-out-flex cursor-pointer`} 
               onClick={()=>{handleClick(id)}} >
                <img src={imgUrl} alt={title} className="absolute w-full h-full object-cover rounded-[24px]" />
                {
                    active !== id ? (
                    <h3 className="font-semibold text-white text-[18px] absolute z-0 bottom-20 rotate-[-90deg] origin-[0,0]">
                        {title}
                    </h3> ) : 
                    (<div className="absolute p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] bottom-0">
                        <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px]   backdrop-blur-lg`}>
                            <img src="public\headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain"/>
                            </div>
                            <p className="text-[16px] text-white leading-[20px] uppercase">
                            Enter The MetaVerse
                            </p>
                            <h2 className="mt-[24px] text-[24px] text-white font-semibold">{title}</h2>

                    </div>)
                }

            </motion.div>
        )


export const StartSteps = ({ number , text}:TypingStartSteps)=>(
    <div className={`${styles.flexCenter} flex`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <p className="font-bold text-[20px] text-white">0{number}</p>
        </div>
        <p className="flex-1 ml-[30px] text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p>
    </div>
)




export const NewFeatures = ({title , imgUrl , subtitle}:TypingSubTitle)=>(
   <div className="flex-1 flex-col min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <img src={imgUrl} alt="pic" className="w-1/2 h-1/2 object-contain"/>
    </div>
    <h1 className="mt-[26px] text-[24px] font-bold leading-[30px] text-white">{title}</h1>
    <p className="mt-[16px] flex-1 text-[18px] leading-[32px]  text-[#b0b0b0]">{subtitle}</p>
   </div>
)




export const InsightCard = ({index, title , imgUrl , subtitle }:TypingCard)=>(
   <motion.div variants={fadeIn("up", "spring" , index * 0.5 , 1)}
   className="flex gap-8" >
    <img src={imgUrl} alt="planet" className="w-[270px] h-[250px] rounded-[32px] object-cover" />
    <div className="w-full flex justify-between items-center">
        <div className="flex-1 flex-col max-w-[650px]">
            <h4 className="text-[26px] text-white">{title}</h4>
            <p className="text-[14px] mt-[16px] text-white">{subtitle}</p>
        </div>

        <div className="flex items-center justify-center w-[80px] h-[80px] bg-transparent border-[1px] border-white rounded-full hover:bg-slate-500 cursor-pointer">
            <img src="public\arrow.svg" alt="arrow" 
            className="w-[48px] h-[48px] object-contain" />
        </div>
    </div>

   </motion.div>
 )
