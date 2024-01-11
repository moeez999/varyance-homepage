import React, { useEffect, useRef } from "react";

const FutureNetwork = () => {
  const data = [
    {
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "public/hand.png",
      p2Icon: "public/heart.png",
      p3Icon: "public/1.png",
      p4Icon: "public/2.png",
      p5Icon: "public/3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "public/bg-6.png",
    },
    {
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "public/hand.png",
      p2Icon: "public/heart.png",
      p3Icon: "public/1.png",
      p4Icon: "public/2.png",
      p5Icon: "public/3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "public/bg-5.png",
    },
    {
      title: "Unlock the full potential of your future network.",
      p1: "Hello, I am",
      p1a: "Alexander",
      p1Icon: "public/hand.png",
      p2Icon: "public/heart.png",
      p3Icon: "public/1.png",
      p4Icon: "public/2.png",
      p5Icon: "public/3.png",
      p2: "BSc Computer Science",
      p2b: "Goethe University Frankfurt",
      p3: "Finance",
      p4: "Economics",
      p5: "Supply Chain",
      backgroundImage: "public/bg-4.png",
    },
  ];

  return <div>{data.map()}</div>;
};

export default FutureNetwork;
// import { createContext, useState, useEffect, useRef } from "react";
// import { state } from "../utils/state";
// import { swipe } from "../utils/swipe";
// import { scroll } from "../utils/scroll";
// import { context } from "../utils/context";
// import Detector from "../detector/detector";
// import cn from "classnames";
// import "./index.scss";
// import { setToRender, removeFromRender } from "@/Animator/js/renderer";

// // fixme
// import { ModalContext } from "../components/Modal/Modal";
// import { useContext } from "react";
// //

// export const ControllerContext = createContext();

// const Controller = ({
//   children,
//   duration,
//   externalDelay,
//   externalDuration,
// }) => {
//   const [prevSections, setPrevSections] = useState(null);
//   const [sections, setSections] = useState(null);
//   const [active, setActive] = useState(context.active);
//   const [activeId, setActiveId] = useState();
//   const [externalChanging, setExternalChanging] = useState(false);
//   const { activeForm } = useContext(ModalContext);
//   context.setExternalChanging = setExternalChanging;
//   state.set({ duration, externalDelay, externalDuration });

//   useEffect(() => {
//     context.activeForm = activeForm;
//   }, [activeForm]);

//   const controller = useRef();
//   const value = {
//     active,
//     setNewActive,
//     activeId,
//     sections,
//     setSections,
//     setPrevSections,
//   };
//   useEffect(() => {
//     const label = `ControllerScrollRender${Date.now()}`;
//     const detector = new Detector(document, setActiveOnScroll);
//     context.controller = controller.current;
//     setToRender({
//       label,
//       handler: () => scroll.renderTranslateInterpolation(),
//     });
//     return () => {
//       detector.unmount();
//       removeFromRender(label);
//     };
//   }, []);
//   function setActiveOnScroll({ dir, wheel }) {
//     if (!scroll.ready(context.sections)) {
//       return;
//     }
//     if (context.activeForm) {
//       return;
//     }
//     // scroll.calcTranslate(context.sections, wheel) // делает диспатч wheel`а для хуков
//     if (context.changing) {
//       return;
//     }
//     console.log("wheel", wheel);
//     const innerPos = swipe.getInnerPos(context.sections);
//     const swipeDir = dir === 1 ? swipe.pos.BOTTOM : swipe.pos.TOP;
//     if (innerPos === swipeDir || innerPos === swipe.pos.TOPBOTTOM) {
//       // если мы проскроллили и свайпаем в нужном направлении то все гуд
//       if (state.validActive(context.active + dir)) {
//         context.wheel = 0;
//         scroll.resetWheelTo();
//         setNewActive(context.active + dir, false);
//       }
//       return;
//     }
//     context.wheel = wheel;
//     scroll.calcWheelTo();
//     // scroll.translate(context.sections, wheel) // теперь постоянно рендерим смещение
//   }
//   function setNewActive(index, externalChange = true) {
//     if (index === context.active) {
//       return;
//     }
//     console.log("changing --- TRUE");
//     context.changing = true;
//     context.active = index;
//     context.externalChange = externalChange;
//     setActive(index);
//     setActiveId(context.ids[context.active]);
//     setExternalChanging(externalChange);
//   }

//   // sections ререндерятся от active, а переключения рендерим от sections
//   useEffect(() => {
//     context.prevsections = prevSections;
//     context.sections = sections;
//     swipe.swipe(prevSections, sections, () =>
//       scroll.resetTranslate(context.sections)
//     );
//   }, [sections]);

//   return (
//     <ControllerContext.Provider value={value}>
//       <div
//         ref={controller}
//         className={cn(
//           "controller",
//           state.globalClassName(active),
//           state.externalChangingClass(externalChanging)
//         )}
//       >
//         {children}
//       </div>
//     </ControllerContext.Provider>
//   );
// };

// export default Controller;
