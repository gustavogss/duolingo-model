import { lessons, units } from "@/db/schema";

type UnitProps = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson: typeof lessons.$inferSelect & {
    unit: typeof units.$inferSelect;
  } | undefined;
  activeLessonPercentage: number;
}

export function Unit({ id, order, title, description, lessons, activeLesson, activeLessonPercentage }: UnitProps) {
  return (
    <>
      {/* <UnitBanner /> */}
    </>
  )
}