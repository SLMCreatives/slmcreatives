import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          src="/logo.png"
          alt="SLM Creatives"
          width={1000}
          height={1000}
          className="md:w-40 md:h-40 w-24 h-24 object-contain"
        />
        <h1 className="sr-only text-4xl sm:text-5xl font-extrabold tracking-tight text-center sm:text-left">
          SLM Creatives
        </h1>
        <Avatar className="w-32 h-32">
          <AvatarImage src="/sulaiman.jpg" alt="Sulaiman Shafiq"></AvatarImage>
          <AvatarFallback>SS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-5xl sm:text-5xl font-bold tracking-tight text-center sm:text-left">
            Sulaiman Shafiq
          </h2>
          <h3 className="text-3xl sm:text-2xl font-thin tracking-tight text-center sm:text-left">
            Digital Marketing Specialist
          </h3>
        </div>
        <p className="max-w-[700px] text-center sm:text-left text-lg text-muted-foreground">
          A passionate freelance digital marketing specialist with over 8 years
          of industry experience. I specialize in crafting and executing
          effective campaigns that drive growth and engagement.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="default" asChild>
            <Link href="/">Services</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/">Portfolio</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
