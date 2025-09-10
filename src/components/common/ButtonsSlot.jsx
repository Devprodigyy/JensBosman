import { useRef, useEffect } from "react";
import gsap from "gsap";
import { stillStyle } from "../data/styleData";

export const ButtonsSlot = ({ logo, namee, button }) => {
  const btnRef = useRef(null);
  const nameRef = useRef(null);
  const logoRef = useRef(null);

  // Reusable GSAP hover animation function
  const setupHoverAnimation = (ref) => {
    const el = ref.current;
    if (!el) return;

    const textEls = el.querySelectorAll(".hover-text");

    const tl = gsap.timeline({ paused: true });
    tl.to(textEls[0], { y: "-100%", duration: 0.4, ease: "power2.inOut" }, 0)
      .to(textEls[1], { y: "0%", duration: 0.4, ease: "power2.inOut" }, 0);

    el.addEventListener("mouseenter", () => tl.play());
    el.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      el.removeEventListener("mouseenter", () => tl.play());
      el.removeEventListener("mouseleave", () => tl.reverse());
    };
  };

  useEffect(() => {
    const cleanups = [
      setupHoverAnimation(btnRef),
      setupHoverAnimation(nameRef),
      setupHoverAnimation(logoRef),
    ];

    return () => cleanups.forEach((c) => c && c());
  }, []);

  return (
    <div className={stillStyle.wrapercontainer1}>
      <div className="flex gap-2">
        {/* Logo with hover animation */}
        <span
          ref={logoRef}
          className="relative overflow-hidden hidden rounded-full border-2 sm:flex items-center justify-center h-[3rem] w-[3rem]"
        >
          <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {logo}
          </span>
          <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-full">
            {logo}
          </span>
        </span>

        {/* Name with hover animation */}
        <span
          ref={nameRef}
          className="relative overflow-hidden rounded-2xl text-[0.8rem] sm:text-[1rem] h-[3rem] whitespace-nowrap px-[2rem] border-2 flex items-center justify-center min-w-[200px]"
        >
          <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {namee}
          </span>
          <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-full">
            {namee}
          </span>
        </span>
      </div>

      {/* Button with hover animation */}
      <button
        ref={btnRef}
        className="relative overflow-hidden rounded-2xl whitespace-nowrap text-[0.8rem] sm:text-[1rem] h-[3rem] px-[2rem] border-2 flex items-center justify-center w-[200px]"
      >
        <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center">
          {button}
        </span>
        <span className="hover-text absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-full">
          {button}
        </span>
      </button>
    </div>
  );
};
