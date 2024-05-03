import { useRef, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {  motion } from "framer-motion";



const signin = () => {

  const inputRef =   useRef<HTMLInputElement>(null);

  const [showing, setShowing] = useState(true);
  const [Image, setImage] = useState("")

//functions
  function changeVisibility() {
    setShowing(!showing);
  }

  const handleImageClick = ()=>{
    inputRef.current?.click()
  }

  const handleImageChange = (event:any)=>{
    const file = event.target.files[0]
    setImage(file)
  }


  return (
    <div className="all-div relative">
      <div
        className={`container mt-[5rem] ml-[15rem] w-[65%] h-[80vh] rounded-2xl flex justify-center align-middle absolute ${
          showing ? "visible" : "invisible"
        } `}
       
      >
        {/* box 1 */}
        <motion.div className="white-box h-[100%] w-[50%] rounded-2xl flex justify-center items-center flex-col"
         // @ts-ignore comment
        animate={{
            x: showing ? 0 : 500,
            opacity: showing ? 1: 0
        }}
        transition={{
            duration:1,
            type:"tween"
        }}
        >
          <h1 className="font-bold text-3xl">Create Account</h1>
        {/* image upload */}
         <div onClick={()=>{handleImageClick()}}>
          <input type="file" className="hidden" ref={inputRef} onChange={handleImageChange}/>
        {/*  @ts-ignore comment */}
         {Image ? <img src={URL.createObjectURL(Image)} alt="upload" className="w-20 h-20 m-2 rounded-full" />
         :
         <img src="\public\profileicon.jpg" alt="upload" style={{width:100 , height:100}}  />}
         </div>

        {/* form upload */}
          <div className="gap-3 flex flex-col items-center">
            <form>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[20rem] bg-slate-100 px-2 py-1 rounded-lg outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[20rem] bg-slate-100 px-2 py-1 rounded-lg outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[20rem] bg-slate-100 px-2 py-1 rounded-lg outline-none"
                />
              </div>
            </form>
        
            <button
              onClick={() => {
                changeVisibility();
              }}
              className="btn btn-primary btn-sm px-8"
            >
              Sign Up
            </button>

            <p className="tracking-tighter mt-2">
              or use your email for registration
            </p>
            <div className="icon-box flex flex-row gap-4">
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaGooglePlusG />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaFacebookF />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaLinkedinIn />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaGithub />
            </div>
          </div>
          </div>
        </motion.div>
        {/* box 2 */}
        <motion.div className="blue-box-2 h-[100%] w-[50%] border border-green-700 rounded-2xl flex justify-center items-center flex-col gap-4 bg-[#5A67C3] text-white"
          animate={{
            x: showing ? 0 : -500,
            opacity: showing ? 1 : 0
        }}
        transition={{
            duration:1,
            type:"tween"
        }}
        >
          <h1 className="font-bold text-3xl">WellCome Back</h1>
          <p className="tracking-tighter">
            Already Have an Account
          </p>
          <button
            onClick={() => {
              changeVisibility();
            }}
            className="btn btn-outline btn-sm px-8 text-white"
          >
            Login
          </button>
        </motion.div>
      </div>
















      {/* another Page */}
      <div
        className={`container mt-[5rem] ml-[15rem] w-[65%] h-[70vh]  rounded-2xl flex justify-center align-middle absolute ${
          !showing ? "visible" : "invisible"
        }`}
      >
        {/* box 2 */}
        <motion.div className="blue-box h-[100%] w-[50%] border border-green-700 rounded-2xl flex justify-center items-center flex-col gap-4 bg-[#5A67C3] text-white"
          animate={{
            x: !showing ? 0 : 500,
            opacity: showing ? 0 : 1
        }}
        transition={{
            duration:1,
            type:"tween"
        }}
        >
          <h1 className="font-bold text-3xl">WellCome Back</h1>
          <p className="tracking-tighter">
            Don't Have an Account
          </p>
          <button
            onClick={() => {
              changeVisibility();
            }}
            className="btn btn-outline btn-sm px-8 text-white"
          >
            Sign Up
          </button>
        </motion.div>
        {/* box 1 */}
        <motion.div className="white-box h-[100%] w-[50%] rounded-2xl flex justify-center items-center flex-col"
         // @ts-ignore comment
          animate={{
            x: !showing ? 0 : -500,
           opacity: !showing && [1 ,0 , 0, 0, 1]
        }}
        transition={{
            duration:1,
            type:"tween"
        }}
        >
          <h1 className="font-bold text-3xl m-4">Sign Up</h1>
          <div className="icon-box flex flex-row gap-4">
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaGooglePlusG />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaFacebookF />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaLinkedinIn />
            </div>
            <div className="icon border border-slate-400 p-1 rounded-lg">
              <FaGithub />
            </div>
          </div>
          <div className="gap-3 flex flex-col items-center">
            <p className="tracking-tighter mt-2">or use your email password</p>
            <form>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[20rem] bg-slate-100 px-2 py-1 rounded-lg outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[20rem] bg-slate-100 px-2 py-1 rounded-lg outline-none"
                />
              </div>
            </form>
            <button
              onClick={() => {
                changeVisibility();
              }}
              className="btn btn-primary btn-sm px-8"
            >
              Log In
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default signin;
