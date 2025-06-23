'use client'
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis'
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust for smoothness (lower values are smoother)
      duration: 1.5, // Adjust for scroll speed (longer duration is slower)
      smoothTouch: true, // Enable smooth scrolling on touch devices
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <div className="text-white">
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </div>
  );
}
