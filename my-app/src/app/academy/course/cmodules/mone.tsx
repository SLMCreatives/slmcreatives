import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Video,
  CheckCircle,
  Play,
  FileText,
  ChevronRight,
  ChevronUp,
  ChevronLeft,
  PanelsLeftBottom
} from "lucide-react";
import Link from "next/link";

export function Mone() {
  return (
    <div className="space-y-6">
      {/* Module 1: Introduction to CSS and Modern Layout Techniques */}

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Module 1</span>
          <span>•</span>
          <span>15 mins</span>
          <span>•</span>
          <span>2 lessons</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground text-balance">
            Introduction to Web Development
          </h1>
          <p className="text-lg text-muted-foreground mt-2 text-pretty">
            Understanding the fundamentals and setting up your development
            environment
          </p>
        </div>
      </div>

      {/* What You Will Learn */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="h-5 w-5 text-primary" />
            <span>What You will Learn</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">
                Website Fundamentals
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>What are the components of a basic website</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>The difference between good and great websites</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>The different ways of building a website</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">
                Modern Website Development
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Benefit of learning how to code</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>The importance of a good development environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    The rise of modern frameworks and static site generators
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">
              Why These Module Matters
            </h4>
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-2">
              <p>
                This is module talks about the basic fundamentals of building a
                website. I will give you all the different components you need
                to know about a website and how they work together to create a
                custom user experience for your brand.
              </p>
              <p>
                I am sure that you might have heard about some of these terms,
                but a quick refresh never hurt anyone. You will learn about
                terms like:
              </p>
              <p>
                <ChevronRight className="h-4 w-4 text-primary inline" />
                <strong className="text-foreground">Domain</strong> refers to
                the URL of a website, that typically starts with www. It is the
                address that users type into their web browsers to access a
                specific website.
              </p>
              <p>
                <ChevronRight className="h-4 w-4 text-primary inline" />
                <strong className="text-foreground">Hosting</strong> refers to
                where your website files are stored and accessed from. It is a
                service that allows individuals and organizations to make their
                websites accessible on the internet.
              </p>
              <p>
                <ChevronRight className="h-4 w-4 text-primary inline" />
                <strong className="text-foreground">Language</strong> refers to
                the language used to write the code that makes up a website.
                Examples include HTML, CSS, and JavaScript. These languages are
                used to create the structure, design, and functionality of a
                website.
              </p>
              <p>
                We will also cover{" "}
                <strong className="text-foreground">the various options</strong>{" "}
                available for building a website, including traditional
                development, website builders, and content management systems.
                Understanding these options will help you make informed
                decisions about how to create and manage your own website.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/academy/course/lessons/moduleone">
                <PanelsLeftBottom className="h-4 w-4 mr-2" />
                View Lesson Now
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="h-4 w-4 mr-2" />
              Download Resources
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      {/*  <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            Helpful links and tools to enhance your learning experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h5 className="font-medium text-foreground">Web Development</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    MDN CSS Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    CSS Tricks Flexbox Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    CSS Grid Garden Game
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-foreground">Tools</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    VS Code Extensions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browser DevTools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Figma for Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-foreground">Practice</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    CodePen Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Practice Exercises
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Project Templates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card> */}

      <Card>
        <CardHeader>
          <CardTitle>Continue Learning?</CardTitle>
          <CardDescription>
            This lesson covers the basic of web development. You can continue
            learning in the next module which covers{" "}
            <span className="italic text-cyan-500 font-bold">HTML and CSS</span>
            .
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/academy/course/mtwo">
              <ChevronRight className="h-4 w-4 mr-2" /> Next Lesson
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
