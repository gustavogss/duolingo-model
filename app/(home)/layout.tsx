import { FooterPage } from "./footer";
import { HeaderPage } from "./header";

type Props = {
  children: React.ReactNode;
};

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderPage />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <FooterPage />
    </div>
  );
};
