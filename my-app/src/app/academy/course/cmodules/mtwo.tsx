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
  ChevronLeft
} from "lucide-react";
import Link from "next/link";

export function Mtwo() {
  return (
    <div className="space-y-6">
      {/* Module 1: Introduction to CSS and Modern Layout Techniques */}

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Module 2</span>
          <span>•</span>
          <span>20 mins</span>
          <span>•</span>
          <span>4 lessons</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground text-balance">
            HTML: The Foundation
          </h1>
          <p className="text-lg text-muted-foreground mt-2 text-pretty">
            Learn semantic HTML and why structure matters for accessibility and
            SEO
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
              <h4 className="font-medium text-foreground">CSS Fundamentals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Understanding the CSS box model and how it affects layout
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Selectors, specificity, and the cascade</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Typography and color theory for web design</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">
                Modern Layout Techniques
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Flexbox for one-dimensional layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>CSS Grid for complex two-dimensional layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Responsive design principles and mobile-first approach
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="font-medium text-foreground">
              Why These Technologies Matter
            </h4>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p>
                CSS is the language that brings your HTML to life. While HTML
                provides structure, CSS controls the visual presentation,
                layout, and user experience. In this module, we will explore why
                modern CSS techniques like Flexbox and Grid have revolutionized
                web development.
              </p>
              <p>
                <strong className="text-foreground">Flexbox</strong> solves many
                layout problems that were previously difficult, like centering
                content vertically or creating equal-height columns. It is
                perfect for navigation bars, card layouts, and any
                one-dimensional arrangement.
              </p>
              <p>
                <strong className="text-foreground">CSS Grid</strong> takes
                layout control to the next level, allowing you to create
                complex, responsive designs with minimal code. It is ideal for
                page layouts, image galleries, and any design that needs precise
                control over rows and columns.
              </p>
              <p>
                We will also cover{" "}
                <strong className="text-foreground">
                  responsive design principles
                </strong>{" "}
                because modern websites must work seamlessly across all devices.
                You will learn the mobile-first approach and how to use media
                queries effectively.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Play className="h-4 w-4 mr-2" />
              Start This Module
            </Button>
            <Button variant="outline" size="lg">
              <FileText className="h-4 w-4 mr-2" />
              Download Resources
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            Helpful links and tools to enhance your learning experience
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <h5 className="font-medium text-foreground">Documentation</h5>
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
      </Card>

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
