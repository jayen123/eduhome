"use client"
import { useState } from "react"
import Image from "next/image"
import Plus from "../../public/plus.png"
import Student from "../../public/student.jpg"
import Student2 from "../../public/student2.jpg"
import Circle from "../../public/half-circle.png"
import { motion } from "framer-motion"
export default function Home() {
  return (
      <>
        <section>
            <div className='container'>
                <div className="grid grid-cols-2 items-center">
                    <div className="grid gap-5">
                        <motion.h1
                        initial={{y: -20, opacity: 0, scale: .9}}
                        animate={{y: 0, opacity: 1, scale: 1}}
                        transition={{duration: 1}}
                         className="text-7xl font-bold">Empowering <br/>  Young Minds For <br/> A Digital future</motion.h1>
                        <p>
                        Welcome to Eduvbhai, where we empower <br/> junior students eith cutting-edge skills to <br/>
                        thrive in the digital age.
                        </p>
                        <button className="w-1/5 px-5 py-2 text-white bg-teal-500 rounded text-lg">Get Started</button>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex justify-around items-center">
                            <Image src={Plus} alt="plus"/>
                            <Image src={Student} alt="student"/>
                        </div>
                        <div className="flex relative">
                            <Image className="rounded-full" src={Student2} alt="student"/>
                            <Image className="absolute left-40 top-[-9%]" src={Circle} alt="circle"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}
