import React from 'react';
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import { InfiniteMovingCommentCards } from '@/components/comment-card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-9">
      <div className="text-center max-w-md sm:max-w-xl lg:max-w-xl space-y-4">
        <h1 className="my-8 text-4xl md:text-7xl font-semibold text-transparent">
          <span className="bg-gradient-to-br from-white to-[#482603] bg-clip-text tracking-tight">
            <Balancer ratio={0.6}>Stay on top of your HN mentions</Balancer>
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Slacker notifies you on Slack whenever your company is mentioned on Hacker News. Built with{" "}
          <a
            href="https://vercel.com/blog/cron-jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#faddae] hover:from-[#f8eaca] to-[#d2ab6b] hover:to-[#dabb92] text-transparent bg-clip-text transition-all"
          >
            Vercel Cron Jobs
          </a>
          .
        </p>
        <div className="flex justify-center mt-6 sm:mt-0">
          <Button variant="default" size="lg">
            <Rocket className="mr-2 h-5 w-5 sm:mr-3"/>Get Started
          </Button>
        </div>
      </div>
      <div className="mt-6 w-full sm:w-auto">
        <InfiniteMovingCommentCards />
      </div>
    </div>
  );
}
