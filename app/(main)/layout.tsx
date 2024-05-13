import { MobileHeader } from "@/components/mobile-header";
import { SideBar } from "@/components/sidebar";


type MainProps = {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainProps) {
  return (
    <>
      <MobileHeader />
      <SideBar className="hidden lg:flex" />
      <main className="lg:pl-[16rem] h-full pt-[3.125rem] lg:pt-0">
        <div className="max-w-[66rem] h-full mx-auto pt-6">
          {children}
        </div>
      </main>
    </>
  );
}