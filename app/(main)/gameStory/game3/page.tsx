"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

const PathwayGame3: React.FC = () => {
  const [stage, setStage] = useState<number>(0);

   const  questions= [
      {
        title: "What Was The Name Of Enemy",
        photo1: "/EDUCA.gif",
        photo2:"/labour.png",
        options: [
          {
            text: "Education",
            tostage: 2,
          },
          {
            text: "Home Maker",
            tostage: 0,
          },
        ],
      },
      {
        title:
          "Sneha has started a family. What's next?hat Was The Name Of Enemy",
        photo1: "",
        photo2:"",
        options: [
          {
            text: "Focus on career",
            tostage: 100,
          },
          {
            text: "House Wife",
            tostage: 2,
          },
        ],
      },
    ]

  const handleOptionClick = (tostage: number) => {
    setStage(tostage);
  };


  return (
    <div className="text-center  flex flex-col justify-center items-center mx-auto h-[100vh]   bg-white">
      {stage === 0 && (
        <>
          <h1 className="text-5xl mb-4  text-blue-950 px-10 py-2 font-bold border-b-4 border-blue-300  transform transition-transform duration-100 ">
            <Typewriter
              options={{
                strings: ["PathWay Game"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="mb-6 h- mt-3 text-xl font-bold border-slate-200 border-1 p-5 py-7 w-[650px] rounded-md hover:bg-sky-500 bg-sky-400 text-slate-100">
            <p> Welcome !</p>
          </div>
          <div className="flex justify-center items-center ml-[80px] gap-5 rounded-lg px-26">
            <Image
              src="/startss.gif"
              alt="download Life"
              width={300}
              height={150}
              className="text-black z-30 mr-14 w-[400px]  "
            />
          </div>

          <button
            className="bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide"
            onClick={() => setStage(1)}
          >
            Work hard
          </button>
        </>
      )}

      {stage !== 0 && stage !== 100 && (
        <>
          <h1 className="text-5xl mb-4 text-blue-950 px-10 py-1 font-bold border-b-4 border-blue-300 inline transform translate-x-16 transition-transform duration-100">
            <Typewriter
              options={{
                strings: ["PathWay Game"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mb-6  text-xl font-bold border-slate-200 border-1 p-5 py-7 rounded-md bg-sky-400 hover:bg-sky-500 text-slate-100 w-[650px]">
            {questions[stage - 1].title}
          </p>
          <div className="mx-auto flex justify-center">
            <Image
              src={questions[stage-1].photo1}
              alt="Successful Life"
              width={350}
              height={100}
              className="mb-12 h-64 mr-4"
            />
            <Image
              src={questions[stage-1].photo2}
              alt="Successful Life"
              width={350}
              height={100}
              className="mb-12 h-64"
            />
          </div>

          <div className="flex gap-4">
            {questions[stage - 1].options.map((option) => {
              return (
                <button
                  className="bg-sky-400  mr-[100px] border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide"
                  onClick={() => handleOptionClick(option.tostage)}
                >
                  {option.text}
                </button>
              );
            })}
          </div>
        </>
      )}



      {stage === 100 && (
        <>
          <h1 className="text-5xl mb-4 text-blue-950 px-10 py-2 font-bold border-b-4 border-blue-300 inline transform transition-transform duration-100 ">
            <Typewriter
              options={{
                strings: ["PathWay Game"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <div className="mx-auto flex justify-center ">
            <Image
              src="/award2.gif"
              alt="Career Life"
              width={500}
              height={400}
              className="mb-6"
            />
          </div>
          <div className="flex gap-4">
            <button
              className="bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide"
              onClick={() => handleOptionClick(1)}
            >
              Restart Game
            </button>
            <Link href={"/gameStory"}>
            <button
              className="bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide"
            >
              Back
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PathwayGame3;
