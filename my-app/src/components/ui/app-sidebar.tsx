"use client";

import * as React from "react";
/* import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher"; */
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar";
import { CheckCircle, Clock, Play, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { courseModules } from "@/app/academy/course/page";

// Course progress data
// const completedModules = 3;
// const totalModules = 10;
// const progressPercentage = (completedModules / totalModules) * 100;

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentModule =
    courseModules.find((module) => module.current) || courseModules[0];
  const completedModules = courseModules.filter(
    (module) => module.completed
  ).length;
  const totalModules = courseModules.length;
  const progressPercentage = (completedModules / totalModules) * 100;
  const handleModuleClick = (module: (typeof courseModules)[number]) => {
    // Logic to navigate to the selected module
    //alert(`Navigate to module: ${module.title}`);
    // Actual navigation logic
    currentModule.current = false;
    module.current = true;
    // In a real app, you would use a router to navigate to the module's page.
  };
  return (
    <Sidebar {...props} className="w-80 lg:w-96">
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        <div className="space-y-6 p-4">
          {/* Course Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-sidebar-foreground">
                Course Progress
              </h3>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{completedModules} completed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>~16 hours total</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Course Modules */}
          <div className="space-y-3">
            <h3 className="font-medium text-sidebar-foreground">
              Course Modules
            </h3>
            <div className="space-y-2">
              {courseModules.map((module) => (
                <Card
                  key={module.id}
                  onClick={() => handleModuleClick(module)}
                  className={`cursor-pointer transition-colors hover:bg-sidebar-accent max-h-28 ${
                    module.current ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                >
                  <CardContent className="">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
                        {module.completed ? (
                          <CheckCircle className="h-5 w-5 text-primary" />
                        ) : module.current ? (
                          <Play className="h-5 w-5 text-primary" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-sm font-medium ${
                            module.current
                              ? "text-primary"
                              : "text-sidebar-foreground"
                          }`}
                        >
                          {module.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                          <Video className="h-3 w-3" />
                          <span>{module.lessons} lessons</span>
                          <span>•</span>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* 
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
