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
      title: "Raj a 12 year old boy , his father passed out in his toodle phase",
      photo: "/Child_labor/01.jpg", 
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
      title:" His mom works on field daily to survive and she ask Raj to help her",
      photo: "/Child_labor/02.jpg", 
      options: [

        {
          text: "Next 1",
          tostage: 1,
        },

        {
          text: "Next 2",
          tostage: 3,
        },

      ],
    },

    {
      title:
        " Due to high temperature his mother feels unwell and calls him to help",

        photo: "/Child_labor/2.1.jpg", 
      options: [
        {
          text: "Next",
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
        " while working Raj got a poster of hiring workers for construction  site",

        photo: "/Child_labor/03.jpg", 
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

      title: "They have to buy new tools for farming so she sent Raj to withdraw money from cupboard",
      photo: "/Child_labor/3.1.jpg", 
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
      title: " Raj checked cupboard was totally empty of money",

      photo: "/Child_labor/3.1.jpg", 
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
      title: "He went to site and manager hire him for very little wage",

      photo: "/Child_labor/3.2.jpg", 
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
      title: "But you can't quit because of very poor finicial condition ",

      photo: "/Child_labor/4.1.jpg", 
      options: [
        
        {
          text: "Next",
          tostage: 9,
        },
      ],
    },

    {
      title: "One day while working in site his teacher Mr.Gupta comes there and saw him",
     

      photo: "/Child_labor/05.jpg", 
      options: [
        {
          text: "Back",
          tostage: 7,
        },
        {
          text: "Next",
          tostage: 10,
        },
      ],
    },

    {
      title: "Gupta sir caught you while hiding and ask why he is working here",

      photo: "/Child_labor/5.1.jpg", 
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
      title: "Raj feels very guilty after getting caught by Gupta sir in the school time",

      photo: "/Child_labor/5.5.jpg", 
      options: [
        {
          text: "Back ",
          tostage: 9,
        },
        { 
          text: "Next",
          tostage: 12,
        },
      ],
    },



    {
      title: " He told about his all conditions and after seeing his dedication Gupta sir decide to help him ",

      photo: "/Child_labor/06.jpg", 
      options: [
        {
          text: "Back",
          tostage: 10,
        },
        {
          text: "Next",
          tostage: 13,
        },
      ],
    },



  {
    title: " Child labor always lead to darkness in future, you have strong determination use it wisely",
    photo: "/Child_labor/6.1.jpg", 
    options: [
      {
        text: "Back",
        tostage: 12,
      },
      {
        text: "Next",
        tostage: 14,
      },
    ],
  },

  
  {
    title: " hello ",

    photo: "/Child_labor/07.jpg",
    options: [
      {
        text: "Back",
        tostage: 13,
      },
      {
        text: "Next",
        tostage: 15,
      },
    ],
  },


  {
    title: " Gupta sir invented him for his evening classes for free but Raj have to study very hard... should he? ",

    photo: "/Child_labor/08.jpg",
    options: [
      {
        text: "Back ",
        tostage: 14,
      },
      {
        text: "Next",
        tostage: 16,
      },
    ],
  },

  {
    title: "Sir said that, 'missing any opportunity  for learning is just like starving even food is in front' this leads to insecure future ",

    photo: "/Child_labor/8.1.jpg",
    options: [
      
      {
        text: " Next",
        tostage: 17,
      },
    ],
  },

  {
    title: " He is learning very head on the path of his sir",

    photo: "/Child_labor/09.jpg",
    options: [
      
      {
        text: " Next",
        tostage:18,
      },
    ],
  },


  {
    title: " by his hardwork after few years he scored 97% in boards what should he do further ?",

    photo: "/Child_labor/10.jpg",
    options: [
      
      {
        text: " Next",
        tostage: 19,
      },
    ],
  },


  {
    title: "Remember Gupta sir advice 'Don't leave any chance to learn ' Reconsider about further studies",

    photo: "/Child_labor/10.1.jpg",
    options: [
      
      {
        text: " Next",
        tostage: 20,
      },
    ],
  },


  {
    title: "after few years he became a successful engineers and now he is successful son who stucked in child labour but rescued on",

    photo: "/Child_labor/11.jpg",
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

export default PathwayGame1;