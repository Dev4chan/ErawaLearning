"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from 'typewriter-effect';


const PathwayGame1: React.FC = () => {
  const [stage, setStage] = useState<number>(0);

  const questions = [
    {
      title: "Tina a small girl ambitious to her study",
      photo: "/Child_marriage/b1.jpg", 
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
      title:"There is knock on door , she runs to the door",
    
      photo: "/Child_marriage/b2.jpg",
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
        "She welcomes the guest and welcomes the guest .",

      photo: "/Child_marriage/b3.jpg",
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
        " Uncle started a conversion with Tina and call her mother",

      photo: "/Child_marriage/b4.jpg",
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

      title: "They chaat for a while and her mother reveal that she is getting married to that man",
      photo: "/Child_marriage/b5.jpg",
      options: [
        {
          text: "Back",
          tostage: 4, 
        },
        {
          text: "Next",
          tostage: 6,
        },
       
      ],
    },


    {
      title: " She got shocked",

      photo: "/Child_marriage/b6.jpg",
      options: [
        {
          text: "Back",
          tostage: 13,
        },
        {
          text: "Next",
          tostage: 7,
        },
      ],
    },

    {
      title: " Mother tells her , marriage is good for her. and she tells her to have a discussion with Groom ",

      photo: "/Child_marriage/b7.jpg",
      options: [
        {
          text: "Back",
          tostage: 14, 
        },
        {
          text: "Next",
          tostage: 8,
        },
      ],
    },

    {
      title: "Groom start emotional blackmailing to her, so she should leave her education",
     

      photo: "/Child_marriage/b8.jpg",
      options: [
        {
          text: "Back",
          tostage: 14,
        },
        {
          text: "Next",
          tostage: 9,
        },
      ],
    },

    {
      title: "she concerns about terrible future as she is not ready",

      photo: "/Child_marriage/b9.jpg",
      options: [
        {
          text: "Back",
          tostage: 15,
        },
        {
          text: "Next",
          tostage: 10,
        },
      ],

    },

    {
      title: "Marriage will ruin her life, Education is must ",

      photo: "/Child_marriage/b10.jpg",
      options: [
        {
          text: "Back ",
          tostage: 9,
        },
        { 
          text: "Next",
          tostage: 11,
        },
      ],
    },



    {
      title: "Dream to become a Doctor",

      photo: "/Child_marriage/b11.jpg",
      options: [
        {
          text: "Back",
          tostage: 10,
        },
        {
          text: "Next",
          tostage: 100,
        },
      ],
    },

  


  {
    title: " Her life become Hell",

    photo: "/Child_marriage/1.jpeg",
    options: [
      {
        text: "Back",
        tostage: 10,
      },
      {
        text: "Next",
        tostage: 1,
      },
    ],
  },

  {
    title: " She become too frusted due to her work",

    photo: "/Child_marriage/2.jpeg",
    options: [
      {
        text: "Back",
        tostage: 5,
      },
      {
        text: "Next",
        tostage: 1,
      },
    ],
  },

  {
    title: " She will be totally depend on one man and can't enjoy her life",

    photo: "/Child_marriage/3.jpeg",
    options: [
      {
        text: "Back ",
        tostage: 5,
      },
      {
        text: "Next",
        tostage: 1,
      },
    ],
  },

  {
    title: "After seeing she is mature her parents are happy",

    photo: "/Child_marriage/b12.jpg",
    options: [
      
      {
        text: " Next",
        tostage: 100,
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

export default PathwayGame1;