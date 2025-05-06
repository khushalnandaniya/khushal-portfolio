import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-start relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="pt-8 leading-[24px] tracking-tight  text-[40px] md:text-4xl lg:text-5xl text-gray-800 dark:text-white font-bold"
          />

          <p className=" text-left mt-5 mb-7 text-sm md:text-xl lg:text-base  text-gray-600 dark:text-gray-400 w-full">
            Hi! I'm Khushal, a{" "}
            <span className="font-semibold text-white">Shopify Expert</span> &{" "}
            <span className="font-semibold text-white">Web Developer</span>{" "}
            passionate about crafting high-converting eCommerce experiences.
            <br />
            <br />
            With hands-on expertise in building responsive, fast-loading Shopify
            stores and custom web solutions, I help businesses bring their
            digital visions to life. Whether it's a sleek product launch, custom
            theme development, or optimizing your store for better sales — I’m
            here to turn ideas into results.
            <br />
            <br />
            Let's build something impactful together.
          </p>

          <a href="#about" className="w-full">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
