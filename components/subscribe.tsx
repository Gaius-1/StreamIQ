"use client";
import { Rocket } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/button";

export function Subscribe() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Button variant="default" size="lg">
          <Rocket className="mr-2 h-5 w-5 sm:mr-3"/>Get Started
        </Button>
      </div>
    </div>
  );
}
