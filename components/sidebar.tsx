import { cn } from "@/lib/utils";
import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from "next/image";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="./assets/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            DaviLingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Learn"
          href="/learn"
          icon="./assets/learn.svg"
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          icon="./assets/leaderboard.svg"
        />
        <SidebarItem
          label="quests"
          href="/quests"
          icon="/assets/quests.svg"
        />
        <SidebarItem
          label="shop"
          href="/shop"
          icon="./assets/shop.svg"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  )
}

