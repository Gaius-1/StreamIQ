import React from 'react'
import { Rocket, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
// import { useVideoModal } from '../components/video-modal';

export default function Home() {
  // const { setShowVideoModal, VideoModal } = useVideoModal();
  return (
    <div className="flex flex-col sm:flex-row h-screen items-center justify-center px-6">
      <div className="text-center max-w-md sm:max-w-lg lg:max-w-xl space-y-4">
        <h1 className="my-8 text-center text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          <span className="bg-gradient-to-br from-white to-[#532a01] text-transparent bg-clip-text">
            <Balancer ratio={0.6}>Stay on top of your HN mentions</Balancer>
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400">
          Slacker notifies you on Slack whenever your company is mentioned on
          Hacker News. Built with{" "}
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
        {/* Render VideoModal component */}
        {/* <VideoModal /> */}
        {/* <div className="relative my-10">
          <button
            onClick={() => setShowVideoModal(true)}
            className="group flex justify-center items-center absolute z-10 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full hover:backdrop-blur-sm hover:bg-black/20 transition-all overflow-hidden"
          >
            <div className="flex justify-center items-center w-14 h-14 rounded-full bg-white shadow-lg">
              <Play size={20} fill="#27272A" aria-hidden="true" />
            </div>
            <p className="font-mono text-white absolute -bottom-10 group-hover:bottom-5 transition-all ease-in-out duration-300">
              <span className="sr-only">Play Video. Length of Video is</span> 1:03
            </p>
          </button>
          <video
            autoPlay
            loop
            muted
            src="/assets/demo-preview.mp4"
            className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full object-cover"
            tabIndex={-1}
            aria-label="Looping video preview"
          />
        </div> */}
        <div className="flex justify-center mt-6 sm:mt-0">
          <Button variant="default" size="lg">
            <Rocket className="mr-2 h-5 w-5 sm:mr-3"/>Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
