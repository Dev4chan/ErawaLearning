"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const PathwayGame1: React.FC = () => {
  const [stage, setStage] = useState<number>(0);


  const questions = [
    {
      title: "Arav, a small boy going to school with his parents happily...",
      photo: "/a1.jpg",
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
      photo: "/a2.jpg",
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
        "After school is finished ... ARAV:I don't know about you uncle have you came here to receive me",

      photo: "/a3.jpg",
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
        "Uncle: Yes beta come we I have come to recieve you. I am your family friend. Come with me.",

      photo: "/a4.jpg",
      options: [

        {
          text: "Go With Uncle",
          tostage: 17, 
        },
        {
          text: "Go With Bus",
          tostage: 5,
        },

      ],
    },

   

    {

      title: "You did a great job , going with the stranger is not good",
      photo: "/bus.jpg",
      options: [
        
        {
          text: "next",
          tostage: 6,
        },

       
      ],
    },


    {
      title: "Dad: 'Meet your uncle he is my new friend ... meet him and uncle would take care of you, we are going to Market'",

      photo: "/a5.jpg",
      options: [
        {
          text: "Back",
          tostage: 5,
        },
        {
          text: "Next",
          tostage: 7,
        },
      ],
    },

    {
      title: "Uncle: Hi Beta, I will take care of you, come near to me ",

      photo: "/a6.jpg",
      options: [
        
        {
          text: "Next",
          tostage: 8,
        },
      ],
    },

    {
      title: "Uncle: wow your skin is so soft, don't tell this to your parents...... child thinking what uncle is doing is considered as BAD TOUCH",
     

      photo: "/a9.jpg",
      options: [
        {
          text: "Dont't Resist",
          tostage: 7,
        },
        {
          text: "Resist",
          tostage: 9,
        },
      ],
    },

    {
      title: "You did a great job, resisting was the best option",

      photo: "/a10.jpg",
      options: [
        {
          text: "Back",
          tostage: 8,
        },
        {
          text: "Next",
          tostage: 11,
        },
      ],

    },

    {
      title: "Arav is sad now, he did't resist uncle..... uncle has abused him",

      photo: "/a12.jpg",
      options: [
        {
          text: "Back ",
          tostage: 8,
        },
        { 
          text: "Next",
          tostage: 11,
        },
      ],
    },



    {
      title: "Uncle: Beta don't tell this to anyone, please take chocolate",

      photo: "/a11.jpg",
      options: [
        {
          text: "Back",
          tostage: 8,
        },
        {
          text: "Next",
          tostage: 12,
        },
      ],
    },

    {
      title: "Child is crying now",

      photo: "/15.jpg",
      options: [
        
        {
          text: " Next",
          tostage: 13,
        },
      ],
    },
 
     {
    title: "Parents has arriver now",

    photo: "/14.jpg",
    options: [
      {
        text: "Back",
        tostage: 8,
      },
      {
        text: " Next",
        tostage: 14,
      },
    ],
  },

  {
    title: "Arav is sad, uncle has touched him unappropritely",

    photo: "/a16.jpg",
    options: [
      {
        text: "Back",
        tostage: 8,
      },
      {
        text: " Next",
        tostage: 15,
      },
    ],
  },

  {
    title: " Parent are shocked, they are going to see uncle",

    photo: "/17.jpg",
    options: [
      {
        text: "Back",
        tostage: 8,
      },
      {
        text: " Next",
        tostage: 16,
      },
    ],
  },


  {
    title: " Uncle is  going to jail",

    photo: "/a20.jpg",
    options: [
     
      {
        text: "Next",
        tostage: 100,
      },
    ],
  },

  {
    title: "hell",

    photo: "/kidnap.jpg",
    options: [
     
      {
        text: "End",
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
    <div className=" text-center  flex flex-col justify-center items-center mx-auto h-[100vh] pt-0 *:  bg-white">
      {stage === 0 && (
        <>
          <div className="mb-2 h- mt-3 font-bold border-slate-200 border-4 p-5 py-7 pt-6 w-[650px] rounded-lg text-slate-500 text-6xl">
            <p> Play mindfully !</p>
          </div>
          <div className="flex justify-center items-center ml-[80px] gap-5 rounded-lg px-26">
            <Image
              src="/startes.gif"
              alt="download Life"
              width={300}
              height={150}
              className="text-black z-30 mr-14  w-[500px] h-[420px]  "
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
              className="h-[480px] w-[854x] mb-6 mr-4"
            />
          </div>

          <p className="mb-2 text-2xl font-bold border-slate-200 border-4 p-5 py-4 rounded-md text-slate-500 w-10/12">
            {questions[stage - 1].title}
          </p>

          <div className="flex gap-4">
            {questions[stage - 1].options.map((option) => {
              return (
                <button
                  className="z-10 bg-sky-400 -mt-46 mr-[100px] border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-4 tracking-wide"
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