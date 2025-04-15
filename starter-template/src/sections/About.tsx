"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import Book from "@/assets/images/book-cover.png";
import Javascripticon from "@/assets/icons/javascript-logo-svgrepo-com.svg";
import HTMLIcon from "@/assets/icons/html-5-svgrepo-com.svg";
import Cssicon from "@/assets/icons/css3-svgrepo-com.svg";
import Tailwind from "@/assets/icons/tailwind-svgrepo-com.svg";
import ReactIcon from "@/assets/icons/react-svgrepo-com.svg";
import NextIcon from "@/assets/icons/nextjs-svgrepo-com.svg";
import NodeIcon from "@/assets/icons/node-svgrepo-com.svg";
import Express from "@/assets/icons/express-svgrepo-com.svg";
import Mongo from "@/assets/icons/mongodb-svgrepo-com.svg";
import Sql from '@/assets/icons/sql-database-generic-svgrepo-com.svg';
import Git from '@/assets/icons/git-icon-logo-svgrepo-com.svg';
import Firebase from "@/assets/icons/firebase-svgrepo-com.svg";
import Figma from "@/assets/icons/figma-svgrepo-com.svg";
import { motion } from "motion/react"
import { ToolboxItems } from "@/components/ToolboxItems";
import { useRef } from "react";

const toolboxItems = [
  { title: "HTML", iconType: HTMLIcon },
  { title: "CSS3", iconType: Cssicon },
  { title: "Tailwind", iconType: Tailwind },
  { title: "JavaScript", iconType: Javascripticon },
  { title: "React.Js", iconType: ReactIcon },
  { title: "Next.Js", iconType: NextIcon},
  { title: "Node.Js", iconType: NodeIcon },
  { title: "Express.Js", iconType: Express },
  { title: "Mongo DB", iconType: Mongo },
  { title: "SQL", iconType: Sql },
  { title: "GitHub", iconType: Git },
  { title: "FireBase", iconType: Firebase },
  { title: "Figma", iconType: Figma },
  
];

const hobbies = [
  {
    title: "Football",
    emoji: "⚽",
    left: "8%",
    top: "5%",
  },
  {
    title: "Drawing",
    emoji: "🖌️",
    left: "35%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "70%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "12%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋🏽",
    left: "55%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 " id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          description="Get to know me — what I do, who I am, and what fuels my passion."
        />

        <div className="mt-20 flex flex-col gap-8">

          {/* Book Card 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the book shaping my perspective." className="mx-auto"
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={Book} alt="Book image" />
            </div>
          </Card>

          {/*Toolbox Card 2 */}
          <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Toolbox"
              description="Discover the tech that powers my creations!"
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassname="animate-move-left [animation-duration:40s]"/>
            <ToolboxItems
              items={toolboxItems}
              className="mt-6 "
              itemsWrapperClassname="animate-move-right [animation-duration:30s]"
            />
          </Card>
          </div>

          {/*Hobbies Card 3 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the code"
              description="There’s more to me than just coding — it’s about exploring, learning, and enjoying the journey along the way."
              className="px-4 pt-4"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
            </Card>
          

          {/*Location Card 4*/}

          <Card className="h-[320px] p-0 lg:h-full lg:w-full relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112604.63930927748!2d77.3269796!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffb3c2511b5%3A0x664f9b04312c2c8b!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1619776996789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
          </Card>

          </div>
        </div>
      </div>
    </div>
  );
};
