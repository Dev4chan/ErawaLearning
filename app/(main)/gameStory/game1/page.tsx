"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

const PathwayGame1: React.FC = () => {
  const [stage, setStage] = useState<number>(0);

  const questions = [
    {
      title: "Arav, a small boy going to school with his parents happily...",
      photo: "/abuse_story_1/a1.jpg",
      options: [
        {
          text: "Back",
          tostage: 0,
        },
        {
          text: "Next",
          tostage: 2,
        },
      ],
    },
    {
      title:
        "Arav enjoyed in school. His teacher taught him about good touch and bad touch. Some places in the body are our private parts that should not been touched by others. Only guardians can have that right.",
      photo: "/abuse_story_1/a2.jpg",
      options: [
        {
          text: "Back",
          tostage: 1,
        },
        {
          text: "Next",
          tostage: 3,
        },
      ],
    },

    {
      title:
        "After school is finished   ARAV:I don't know about you uncle have you came here to receive me",

      photo: "/abuse_story_1/a3.jpg",
      options: [
        {
          text: "Back",
          tostage: 2,
        },
        {
          text: "Next",
          tostage: 4,
        },
      ],
    },

    {
      title:
        "Uncle: Yes beta come we I have come to recieve you. I am your family friend. Come with me.",

      photo: "/abuse_story_1/a4.jpg",
      options: [
        {
          text: "Back",
          tostage: 3,
        },
        {
          text: "Next",
          tostage: 5,
        },
      ],
    },

    {
      title: "Uncle:1",

      photo: "/abuse_story_1/a5.jpg",
      options: [
        {
          text: "Go With Bus",
          tostage: 6,
        },
        {
          text: "Go With Him",
          tostage: 0,
        },
      ],
    },

    {
      title: "Uncle:2",

      photo: "/abuse_story_1/a5.jpg",
      options: [
        {
          text: "Go With Bus",
          tostage: 100,
        },
        {
          text: "Go With Him",
          tostage: 0,
        },
      ],
    },
  ];

  const handleOptionClick = (tostage: number) => {
    setStage(tostage);
    // setStage((stage)=>stage+1);
  };

  console.log(stage);
  return (
    <div className="text-center  flex flex-col justify-center items-center mx-auto h-[100vh] pt-4 *:  bg-white">
      {stage === 0 && (
        <>
          <div className="mb-6 h- mt-3 font-bold border-slate-200 border-4 p-5 py-7 pt-6 w-[650px] rounded-lg text-slate-500 text-6xl">
            <p> Play mindfully !</p>
          </div>
          <div className="flex justify-center items-center ml-[80px] gap-5 rounded-lg px-26">
            <Image
              src="/startss.gif"
              alt="download Life"
              width={300}
              height={150}
              className="text-black z-30 mr-14 w-[640px] h-[360px]  "
            />
          </div>

          <button
            className="bg-blue-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white text-4xl p-2 px-4 rounded-lg hover:bg-blue-500 hover:border-sky-500  min-w-[200px] h-[75px] m-8 tracking-wide"
            onClick={() => setStage(1)}
          >
            Start
          </button>
        </>
      )}

      {stage !== 0 && stage !== 100 && (
        <>
          <div className="relative mx-auto flex justify-center">
            <Image
              src={questions[stage - 1].photo}
              alt="Successful Life"
              width={640}
              height={450}
              className="h-[720px] w-[1280px] mb-12 mr-4"
            />
          </div>

          <p className="mb-6  text-3xl font-bold border-slate-200 border-4 p-5 py-7 rounded-md text-slate-500 w-[1100px]">
            {questions[stage - 1].title}
          </p>

          <div className="flex gap-4">
            {questions[stage - 1].options.map((option) => {
              return (
                <button
                  className="z-10 bg-sky-400 -mt-46 mr-[100px] border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide"
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
              <button className="bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide">
                Back
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PathwayGame1;
