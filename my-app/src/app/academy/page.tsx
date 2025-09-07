import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AcademyPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-start p-4 px-10 bg-stone-950 text-white text-center">
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h1 className="text-6xl font-thin font-sans">
          Learn How To Build A Website For Free!
        </h1>
        <p className="max-w-[700px] text-center sm:text-left text-lg text-muted">
          A complete guide on how to build, deploy and host your own website
          using the latest web technology stack using free tier accounts and
          tools.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/academy">Get Started</Link>
        </Button>
      </div>

      {/* Who this is for */}
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h3 className="text-6xl font-thin font-sans">Who This Is For</h3>
        <p className="max-w-[700px] text-center sm:text-left text-lg text-muted">
          This course is for anyone who wants to learn how to build their own
          website from scratch.
        </p>
        <ul className="list-none list-inside text-center max-w-[700px] text-lg text-muted">
          <li>Students</li>
          <li>Freelancers</li>
          <li>Small Business Owners</li>
          <li>Hobbyists</li>
          <li>Anyone interested in Web Dev!</li>
        </ul>
      </div>

      {/* What you will learn */}
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h3 className="text-6xl font-thin font-sans">What You Will Learn</h3>
        <p className="max-w-[700px] text-center sm:text-left text-lg text-muted">
          You will learn how to build a website using the following
          technologies:
        </p>
        <ul className="list-none list-inside text-center max-w-[700px] text-lg text-muted">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Vercel</li>
          <li>Git & GitHub</li>
        </ul>
        <p className="max-w-[700px] text-center sm:text-left text-md text-muted italic">
          <span className="font-bold">To Note:</span> I will guide you through
          the basic foundation of what these technologies mean, where to use it,
          what you need to know and how to use them. This is not a deep dive
          course into each technology.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h3 className="text-6xl font-thin font-sans">Ready To Get Started?</h3>
        <Button variant="secondary" asChild>
          <Link href="/academy">Get Started</Link>
        </Button>
      </div>

      {/* Offerings */}
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h3 className="text-6xl font-thin font-sans">What I Offer</h3>
        <p className="max-w-[700px] text-center sm:text-left text-lg text-muted">
          I offer a few options for you to get started:
        </p>
        <ul className="list-none list-inside text-center max-w-[700px] text-lg text-muted">
          <li>Free Course</li>
          <li>1-on-1 Mentorship</li>
          <li>Group Workshops</li>
          <li>Custom Solutions</li>
        </ul>
        <Button variant="secondary" asChild>
          <Link href="/academy/course">Visit Free Course</Link>
        </Button>
      </div>

      {/* Footer Call to Action */}
      <div className="flex flex-col items-center gap-6 py-20 text-balance">
        <h3 className="text-6xl font-thin font-sans">Ready To Get Started?</h3>
        <Button variant="secondary" asChild>
          <Link href="/academy">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
