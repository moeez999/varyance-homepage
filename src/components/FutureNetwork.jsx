import React, { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

const FutureNetwork = () => {
  const data = [
    {
      id: 1,
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "hand.png",
      p2Icon: "heart.png",
      p3Icon: "1.png",
      p4Icon: "2.png",
      p5Icon: "3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "bg-6.png",
    },
    {
      id: 2,
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "hand.png",
      p2Icon: "heart.png",
      p3Icon: "1.png",
      p4Icon: "2.png",
      p5Icon: "3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "bg-5.png",
    },
    {
      id: 3,
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "hand.png",
      p2Icon: "heart.png",
      p3Icon: "1.png",
      p4Icon: "2.png",
      p5Icon: "3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "bg-4.png",
    },
  ];

  // useEffect(() => {
  //   const floatingElements = document.querySelectorAll(".floating");

  //   floatingElements.forEach((element) => {
  //     animateFloating(element);
  //   });

  //   function animateFloating(element) {
  //     const duration = 20000; // Set the duration of the animation in milliseconds

  //     function updatePosition() {
  //       const angle = Math.random() * Math.PI * 2; // Random angle
  //       const distance = Math.random() * 700 + 700; // Random distance
  //       const newX = Math.cos(angle) * distance;
  //       const newY = Math.sin(angle) * distance;

  //       element.style.transform = `translate(${newX}px, ${newY}px)`;

  //       requestAnimationFrame(updatePosition);
  //     }

  //     updatePosition();
  //   }
  // }, []);
  return (
    <div className="mt-24 px-4 xs:px-1">
      <Carousel showStatus={false} autoPlay={true} showThumbs={true}>
        {data.map((avatar) => (
          <div
            key={avatar.id}
            style={{
              backgroundImage: `url(${avatar.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "120vh",
            }}
            className="py-32 xs:pt-4 rounded-lg relative"
          >
            <h1 className="text-4xl desk:text-3xl desk:top-[2rem] xs:text-2xl absolute top-[3rem] left-[3rem] xs:w-[20rem] font-semibold w-[26rem] px-2 ">
              {avatar.title}
            </h1>
            <div className="flex absolute top-[14rem] desk:left-[3rem] left-[25rem] flex-row items-center justify-center bg-white w-[15rem] px-2 py-2 rounded-lg gap-1 floating">
              <span className="w-14">
                <img src={avatar.p1Icon} alt="" />
              </span>
              <p className="flex flex-col font-normal">
                <span>{avatar.p1}</span>
                <span className="text-3xl font-medium">{avatar.p1a}</span>
              </p>
            </div>
            <div className="flex flex-row absolute top-[30rem] left-[15rem] desk:left-[2rem] items-center justify-center bg-white w-[20rem] px-2 py-2 rounded-lg gap-1 floating">
              <span className="w-14">
                <img src={avatar.p2Icon} alt="" />
              </span>
              <p className="flex flex-col font-normal">
                <span className="text-lg font-medium">{avatar.p2}</span>
                <span className="text-base font-medium">{avatar.p2b}</span>
              </p>
            </div>
            <div className="flex flex-row absolute top-[10rem] right-[23rem] desk:right-[2rem] w-[10rem] items-center py-2 px-2 gap-1 justify-center bg-white rounded-xl floating">
              <img src={avatar.p3Icon} alt="" />
              <p className="font-normal">{avatar.p3}</p>
            </div>
            <div className="flex flex-row absolute top-[20rem] right-[26rem] desk:right-[2rem] w-[10rem] items-center py-2 px-2 gap-1 justify-center bg-white rounded-xl floating">
              <img src={avatar.p4Icon} alt="" />
              <p className="font-normal">{avatar.p4}</p>
            </div>
            <div className="flex flex-row absolute top-[30rem] right-[20rem] w-[10rem] desk:right-[1rem] items-center py-2 px-2 gap-1 justify-center bg-white rounded-xl floating">
              <img src={avatar.p5Icon} alt="" />
              <p className="font-normal">{avatar.p5}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FutureNetwork;
