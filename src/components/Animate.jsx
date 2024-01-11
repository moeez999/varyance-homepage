import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animate() {
  const standOutRef = useRef(null);
  const videoRef = useRef(null);
  const dashboardRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: standOutRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: false,
      },
    });

    timeline.fromTo(standOutRef.current, { x: "-100%" }, { x: "0%" });

    // Video Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top center",
          end: "center center",
          scrub: 2,
          markers: false,
        },
      })
      .fromTo(
        videoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 }
      )
      .fromTo(videoRef.current, { x: "-100%" }, { x: "0%" }, 0);

    // Dashboard Section
    gsap
      .timeline({
        scrollTrigger: {
          trigger: dashboardRef.current,
          start: "top center",
          end: "center center",
          scrub: 2,
          markers: false,
        },
      })
      .fromTo(
        dashboardRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 }
      )
      .fromTo(dashboardRef.current, { x: "0%" }, { x: "-100%" }, 0);
  }, []);

  return (
    <div>
      {/* Stand Out Section */}
      <div ref={standOutRef} className="w-full h-[100vh] flex items-center">
        <p className="text-4xl font-medium px-20">Stand Out</p>
      </div>

      {/* Video Section */}
      <div
        ref={videoRef}
        className="rounded-xl h-[100vh] flex justify-center items-center mt-8 px-4"
      >
        <video src="video.mp4" controls></video>
      </div>

      {/* Dashboard Section */}
      <div
        ref={dashboardRef}
        className="bg-d flex h-[100vh] justify-center items-center mt-8 px-4"
      >
        <div className="rounded-xl shadow-md max-w-[95%]">
          <img className="" src="dashboard.png" alt="" />
        </div>
      </div>
    </div>
  );
}
