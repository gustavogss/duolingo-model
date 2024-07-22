import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FooterPage() {
  return (
    <footer className=" hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/us.svg" alt="Ingles Americano" height={32} width={40}
            className="mr-4 rounded-md"
          />
          Estados Unidos
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/in.svg" alt="Ingles Britânico" height={32} width={40}
            className="mr-4 rounded-md"
          />
          Inglaterra
        </Button>
      </div>
    </footer>
  );
}