"use client";

import {
  BookOpen,
  Clock,
  Users,
  Play,
  CheckCircle,
  FileText,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Mtwo } from "../cmodules/mtwo";

export const courseModules = [
  {
    id: 1,
    title: "Introduction to Web Development",
    description:
      "Understanding the fundamentals and setting up your development environment",
    duration: "45 min",
    lessons: 6,
    completed: true,
    current: false,
    type: "video"
  },
  {
    id: 2,
    title: "HTML: The Foundation",
    description:
      "Learn semantic HTML and why structure matters for accessibility and SEO",
    duration: "1h 20min",
    lessons: 8,
    completed: false,
    current: true,
    type: "video",
    link: "/academy/course/cmodules/mtwo"
  },
  {
    id: 3,
    title: "CSS: Styling Your Website",
    description:
      "Master CSS fundamentals, Flexbox, Grid, and modern styling techniques",
    duration: "2h 15min",
    lessons: 12,
    completed: false,
    current: false,
    type: "video"
  },
  {
    id: 4,
    title: "JavaScript: Adding Interactivity",
    description: "Learn JavaScript fundamentals and DOM manipulation",
    duration: "3h 30min",
    lessons: 15,
    completed: false,
    current: false,
    type: "video"
  },
  {
    id: 5,
    title: "React: Building Modern UIs",
    description: "Introduction to React and component-based architecture",
    duration: "4h 45min",
    lessons: 18,
    completed: false,
    current: false,
    type: "video"
  },
  {
    id: 6,
    title: "Next.js: Full-Stack Framework",
    description:
      "Learn Next.js for server-side rendering and full-stack development",
    duration: "3h 15min",
    lessons: 14,
    completed: false,
    current: false,
    type: "video"
  },
  {
    id: 7,
    title: "Deployment & Best Practices",
    description: "Deploy your website and learn industry best practices",
    duration: "1h 45min",
    lessons: 9,
    completed: false,
    current: false,
    type: "video"
  }
];

export default function CoursePage() {
  const currentModule =
    courseModules.find((module) => module.current) || courseModules[1];
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col">
        {/* Sidebar */}
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="SLM Creatives"
                  width={200}
                  height={200}
                  className="w-16 h-16 object-contain -my-4"
                />
              </Link>
            </header>
            {/* <div className="hidden flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
                <div className="bg-muted/50 aspect-video rounded-xl" />
              </div>
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
            </div> */}
            {/*   </SidebarInset>
        </SidebarProvider> */}
            {/* Main Content */}
            <main className="flex-1 p-6">
              <div className="max-w-4xl mx-auto space-y-6">
                <Mtwo />
              </div>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
