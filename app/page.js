import { Button } from "@/components/ui/button"
import Header from "./dashboard/_components/Header"
import { ArrowBigRight, ArrowRight, LucideArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: `url(/grid.svg)` }}>
      <Header />
      <div className="flex flex-col items-center h-[80vh] justify-center text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-whitek">Your Personal AI Interview Coach</h1>
        <h2 className="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Double your chances of landing that job offer with our AI-powered interview prep</h2>
        <Link href={'/dashboard'}>
          <Button className='gap-2'>Get Started <ArrowRight /></Button>
        </Link>
      </div>
    </div>
  );
}
