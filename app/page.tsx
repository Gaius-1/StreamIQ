import React from 'react';
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThreeDCard } from '@/components/3d-card';
// import { Subscribe } from '@/components/subscribe';

export default function Home() {
  return (
    <div className="px-9">
      <ThreeDCard />
      {/* <Subscribe /> */}
    </div>
  );
}
