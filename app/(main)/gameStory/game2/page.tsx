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
      title: "Suppose in alternate universe ,Arv's parents didn't believe in him and scold him about abuse",
      photo: "/ab/1.jpg", 
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
      title:" Next day Arv gone to school and was enjoying and suddenly he heard uncle came to meet him ",
      photo: "/ab/2.jpg", 
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
        " Uncle has been fishy and since last incidence he has been hard to see handle uncle ",

        photo: "/ab/3.jpg",  
      options: [
        {
          text: "Stay with him",
          tostage: 4,
        },
        {
          text: "Leave",
          tostage: 5,
        },
      ],
    },

    {
      title:
        " It was a bad desicion uncle. Now has touched Uncle npw has performed bad touch to your body",

        photo: "/ab/4.jpg",  
      options: [

        {
          text: "Back ",
          tostage: 3, 
        },
        {
          text: "Next",
          tostage: 5,
        },
      ],
    },



    {

      title: "Arav has been thinking about doing something that how he will handle uncle",
      photo: "/ab/12.jpg", 
      options: [
        {
          text: "Forget about Uncle",
          tostage: 0, 
        },
        {
          text: "Think solution",
          tostage: 6,
        },
       
      ],
    },


    {
      title: " Arv thought about no solution and started crying , Tv was only thing he could watch",

      photo: "/ab/5.jpg", 
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
      title: " Arav is happy now , he has seen show for child who are suffering with similar problems ",
      photo: "/ab/7.jpg", 
      options: [
        {
          text: "Back",
          tostage: 6,
        },
        {
          text: "Next",
          tostage: 8,
        },
      ],
    },
     

    {
      title: "1098 is a child helpline service which help children with all kind of battles ",

      photo: "/ab/6.jpg", 
      options: [
        
        {
          text: "Nothing",
          tostage: 0,
        },
        {
          text: "Police",
          tostage: 12,
        },
        {
          text: "Child Helpline",
          tostage: 9,
        },
      ],
    },

    {
      title: " What to call ",

      photo: "/ab/8.jpg",  
      options: [
        {
          text: "1028",
          tostage: 7,
        },
        {
          text: "1098",
          tostage: 10,
        },
      ],
    },

    {
      title: " Arv has told all his problems to child helpline , they are here to help him",

      photo: "/ab/9.jpg",
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
      title: "Police has helped the child and child helpline has explained the parents about mishaps...... Arv is happy now",

      photo: "/ab/10.jpg", 
      options: [
        {
          text: "Back ",
          tostage: 7,
        },
        { 
          text: "Next",
          tostage: 100,
        },
      ],
    },



    {
      title: " police has came and parents think that its Arv's mistake ",

      photo: "/ab/11.jpg",
      options: [
        
        {
          text: "Reconsider the situation",
          tostage: 8,
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