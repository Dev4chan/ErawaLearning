import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!); 
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    //Adding courses 
    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Sexual Abuse",
        imageSrc: "/child_abuse.svg",
      },
      {
        id: 2,
        title: "Child Labour",
        imageSrc: "/child_labour.svg",
      },
      {
        id: 3,
        title: "Child Marriage",
        imageSrc: "/child_marriage.svg",
      },
      {
        id: 4,
        title: "Online Exploitaion",
        imageSrc: "/online_exploitation.svg",
      },
    ]);

    //Adding units
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Sexual Abuse
        title: "Unit 1",
        description: "Learn about body awareness",
        order: 1,
      },
      {
        id: 2,
        courseId: 2, // Child Labour
        title: "Unit 1",
        description: "Learn about child labour",
        order: 1,
      },
      {
        id: 3,
        courseId: 3, // child marriage
        title: "Unit 1",
        description: "Learn about child marriage",
        order: 1,
      },
      {
        id: 4,
        courseId: 4, // online exploitation
        title: "Unit 1",
        description: "Learn about online exploitation",
        order: 1,
      }
    ]);

    
    await db.insert(schema.lessons).values([
      {
        id: 1,// Lesson 1
        unitId: 1, // Unit 1
        order: 1,
        title: "Sexual Abuse1",
      },
      {
        id: 2,// Lesson 2
        unitId: 1, // Unit 1
        order: 2,
        title: "Sexual Abuse2",
      },
      {
        id: 3,// Lesson 2
        unitId: 2, // Unit 1
        order: 2,
        title: "Child Labour2",
      },
      {
        id: 4,// Lesson 2
        unitId: 2, // Unit 1
        order: 2,
        title: "Child Labour2",
      },
      {
        id: 5,// Lesson 2
        unitId: 3, // Unit 1
        order: 2,
        title: "Child Marriage1",
      },{
        id: 6,// Lesson 2
        unitId: 3, // Unit 1
        order: 2,
        title: "Child Marriage2",
      },
      {
        id: 7,// Lesson 2
        unitId: 4, // Unit 1
        order: 2,
        title: "online exploitaion1",
      },
      {
        id: 8,// Lesson 2
        unitId: 4, // Unit 1
        order: 2,
        title: "online exploitaion2",
      },
    ]);


    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: "Which one of these can be fully trusted for your body/emotions?",
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 2,
        question: "Which one of these can be considered as bad touch body part?",
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: "Which one of these can be considered as bad touch body part?",
      },
      {
        id: 4,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 4,
        question: "You should not hide secrets from whom?",
      },
      {
        id: 5,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 5,
        question: "Should you keep any secrets from your parents?",
      },

      // Lesson 2 questions starts
      // q1
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        order: 1,
        question: "Which one of these is number for Child-Helpline in India?",
      },
      //q2
      {
        id: 7,
        lessonId: 2,
        type: "SELECT",
        order: 2,
        question: "Which is better to call in child related issues?",
      },
      //q3
      {
        id: 8,
        lessonId: 2,
        type: "SELECT",
        order: 3,
        question: "What if parents are not taking your abuse seriously?",
      },
      //q4
      {
        id: 9,
        lessonId: 2,
        type: "SELECT",
        order: 4,
        question: "Resisting abuser Good/Not?",
      },
      //q5
      {
        id: 10,
        lessonId: 2,
        type: "SELECT",
        order: 5,
        question: "Taking action in your own hand is good or not?",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1, // Which one of these can be fully trusted for your body/emotions?
        imageSrc: "/guardian.png",
        correct: true,
        text: "Guardian",
        audioSrc: "",
      },
      {
        challengeId: 1,
        imageSrc: "/uncle.png",
        correct: false,
        text: "Uncle",
        audioSrc: "",
      },
      {
        challengeId: 1,
        imageSrc: "/teacher.png",
        correct: false,
        text: "Teacher",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2, // Which one of these can be considered as bad touch body part?
        imageSrc: "/shoulder.png",
        correct: false,
        text: "Shoulder",
        audioSrc: "",
      },
      {
        challengeId: 2,
        imageSrc: "/chest.png",
        correct: true,
        text: "Chest",
        audioSrc: "",
      },
      {
        challengeId: 2,
        imageSrc: "/feet.png",
        correct: false,
        text: "Feet",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3, // Which one of these can be considered as bad touch body part?
        imageSrc: "/elbow.png",
        correct: false,
        text: "Elbow",
        audioSrc: "",
      },
      {
        challengeId: 3,
        imageSrc: "/hand.png",
        correct: false,
        text: "Hand",
        audioSrc: "",
      },
      {
        challengeId: 3,
        imageSrc: "/bottom.png",
        correct: true,
        text: "Bottom",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 4, // You should not hide secrets from whom?
        imageSrc: "/uncle.png",
        correct: false,
        text: "Uncle",
        audioSrc: "",
      },
      {
        challengeId: 4,
        imageSrc: "/guardian.png",
        correct: true,
        text: "Guardians",
        audioSrc: "",
      },
      {
        challengeId: 4,
        imageSrc: "/stranger.png",
        correct: false,
        text: "Strangers",
        audioSrc: "",
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 5, // Should you keep any secrets from your parents?
        imageSrc: "/yes.png",
        correct: false,
        text: "Yes",
        audioSrc: "",
      },
      {
        challengeId: 5,
        imageSrc: "/no.png",
        correct: true,
        text: "No",
        audioSrc: "",
      }
    ]);

    // Lesson 2 answers
    // question 1
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 6, // Which one of these is number for Child-Helpline in India?
        correct: false,
        text: "1028",
        audioSrc: "",
      },
      {
        challengeId: 6,
        correct: true,
        text: "1098",
        audioSrc: "",
      },
      {
        challengeId: 6,
        correct: false,
        text: "100",
        audioSrc: "",
      },
    ]);
    // Lesson 2 answers
    // question 2
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 7, // Which is better to call in child related issues?
        correct: false,
        text: "Police",
        audioSrc: "",
      },
      {
        challengeId: 7,
        correct: true,
        text: "Child Helpline",
        audioSrc: "",
      },
      {
        challengeId: 7,
        correct: false,
        text: "Woman's Helpline",
        audioSrc: "",
      },
    ]);
    // Lesson 2 answers
    // question 3
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 8, // Which one of these is number for Child-Helpline in India?
        correct: true,
        text: "Take help of child services",
        audioSrc: "",
      },
      {
        challengeId: 8,
        correct: false,
        text: "Do as parent said",
        audioSrc: "",
      },
    ]);
    // Lesson 2 answers
    // question 4
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 9, // Resisting abuser Good/Not?
        correct: true,
        text: "Good",
        audioSrc: "",
      },
      {
        challengeId: 9,
        correct: false,
        text: "Bad",
        audioSrc: "",
      },
    ]);
    // Lesson 2 answers
    // question 5
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 10, // Which one of these is number for Child-Helpline in India?
        correct: false,
        text: "Good",
        audioSrc: "",
      },
      {
        challengeId: 10,
        correct: true,
        text: "Bad",
        audioSrc: "",
      },
    ]);


    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();

