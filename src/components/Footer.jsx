import mylogo from "../assets/mylogo.png"
import {SOCIAL_MEDIA_LINKS} from "../constants"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className='flex items-center justify-center '>
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5}} src={mylogo} width={200} className='my-20'></motion.img>
      </div>
      <div className='flex items-center justify-center gap-8'>
        {SOCIAL_MEDIA_LINKS.map((link,index)=>{
            return (<motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.2,delay:0.5*index}} key={index} href={link.href} target="_blank" rel="noopener noreferrer">{link.icon}</motion.a>)
        })}
      </div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;Simran Dhiman .All rights reserved.

      </p>
    </div>
  )
}

export default Footer
