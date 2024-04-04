import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/ui/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "English", imageSrc: "./assets/us.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="English" />
      </FeedWrapper>
    </div>
  );
}