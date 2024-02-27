import React from 'react';
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeDCard } from '@/components/3d-card';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <ThreeDCard />
      </div>
    </div>
  );
}
