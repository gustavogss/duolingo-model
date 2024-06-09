import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

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
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "English",
        imageSrc: "/assets/us.svg",
      },
      {
        id: 2,
        title: "Spanish",
        imageSrc: "/assets/es.svg",
      },
      {
        id: 3,
        title: "German",
        imageSrc: "/assets/ger.svg",
      },
      {
        id: 4,
        title: "French",
        imageSrc: "/assets/fr.svg",
      },
      {
        id: 5,
        title: "Italy",
        imageSrc: "/assets/it.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "Unit 1",
        description: "Learn the basics of English",
        order: 1,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        title: "Nouns",
        order: 1,
      },
      {
        id: 2,
        unitId: 1,
        title: "Verbs",
        order: 2,
      },
      {
        id: 3,
        unitId: 1,
        title: "Present Simple",
        order: 3,
      },
      {
        id: 4,
        unitId: 1,
        title: "Past Simple",
        order: 4,
      },
      {
        id: 5,
        unitId: 1,
        title: "Present Continouns",
        order: 5,
      },
    ]);
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      {
        id: 2,
        lessonId: 1, // Nouns
        type: "ASSIST",
        order: 2,
        question: '"the man"',
      },
      {
        id: 3,
        lessonId: 1, // Nouns
        type: "SELECT",
        order: 3,
        question: 'Which one of these is the "the robot"?',
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "./assets/man.svg",
        correct: true,
        text: "the man",
        audioSrc: "./assets/audio/the-man.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "./assets/woman.svg",
        correct: false,
        text: "the woman",
        audioSrc: "./assets/audio/the-woman.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "./assets/robot.svg",
        correct: false,
        text: "the robot",
        audioSrc: "./assets/audio/the-robot.mp3",
      },
    ]);
   

    console.log("Seedind finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
