"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import textData from "../data/data.json";
import { useRouter } from 'next/router';
import AchievementsSection from "../components/AchievementsSection";
import dynamic from "next/dynamic";  

export default function DetailProject() {
  const router = useRouter();
  const { id } = router.query; // This 'id' corresponds to the [id] in the file name
  const numericId = parseInt(id, 10);
  const detailData = textData.find(item => item.id === numericId);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  if (!detailData) {
    return <p>User not found</p>;
  }

    
    return (
      <div className="w-full flex flex-col items-center text-white dark:text-black lg:pb-24 pb-12">
        <div className="w-full lg:px-12">
          <h1 className="lg:text-5xl text-3xl pb-12">Hishigdalai</h1>
          <p className="lg:text-3xl text-2xl pb-8">developed by ######</p>
          <Image
            src={detailData.mainImage}
            width={1090}
            height={571}
            alt="Picture of the author"
          />
          <p className="text-lg pt-4">
            {detailData.title1}
          </p>
          <div className="flex justify-start w-full">
            <p className="text-xl lg:my-12 my-6 font-bold">My Role</p>
          </div>
          <p className="text-lg ">
           {detailData.title2}
          </p>
          <div className="flex justify-start w-full">
            <p className="text-xl lg:my-12 my-6 font-bold">
              Project Difficulties
            </p>
          </div>
          <p>
{detailData.title3}
          </p>
          <div className="flex flex-col items-start w-full text-lg">
            <p className="text-xl lg:py-12 py-6">Notable Features</p>
         
            {detailData.features.map((data, index) => (
        
        <p key={index} className="lg:pb-4 pb-2">
              {data}
            </p>
           
            ))}
            <p className="underline lg:pt-8 pt-4  lg:pb-12 pb-6"> {detailData.underlined}</p>
          </div>
        </div>
        <div className="w-full">
        <AchievementsSection /></div>
        <div className="w-full">
          <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {detailData.portfolios.map((data, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <Image
                  src={data}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    );
  }