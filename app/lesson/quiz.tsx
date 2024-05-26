"use client";

import { challenges, challengeOptions } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type QuizProps = {
  initialLessonId: number;
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: typeof challengeOptions.$inferSelect[];
  })[];
}

export function Quiz({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: QuizProps) {

  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <div className="">
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </div>
  )
}