import { cn } from "@/lib/utils";

type SideBarProps = {
  className?: string;
};

export function SideBar({ className }: SideBarProps) {
  return (
    <div className={cn(
      "flex bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
      className,
    )}>
      <h1>Side Bar</h1>
    </div>
  )
}

