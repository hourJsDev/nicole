import React from "react";
import { ContainerTextFlip } from "./ui/container-text-flip";
import DitherShader from "./ui/dither-shader";
import LandingImage from "../../public/landingImage.png";
// Using React.FC (Functional Component) provides type checking for children and return types
const Landing: React.FC = () => {
  return (
    <div className="h-[100dvh] max-sm:gap-[20px] max-sm:flex-col max-sm:flex overflow-hidden relative bg-[#e8e6e4]">
      <div className="flex z-10 top-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">2021</p>
        <p className="desc">2025</p>
      </div>
      <div className="flex bottom-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">Architecture Design</p>
        <p className="desc">Interior Design</p>
      </div>
      <div className="absolute max-sm:relative max-sm:right-0 max-sm:bottom-0 right-[10%] bottom-[30%]">
        <DitherShader
          src={LandingImage}
          gridSize={1}
          ditherMode="bayer"
          colorMode="grayscale"
          invert={false}
          animated={false}
          animationSpeed={0.02}
          primaryColor="#000000"
          secondaryColor="#f5f5f5"
          threshold={0.5}
          className="h-[600px] max-sm:h-[600px] max-sm:w-full w-[1000px] "
        />
      </div>
      <div className="absolute max-sm:relative z-[100] max-sm:left-none max-sm:left-[20px] max-sm:bottom-0 left-[5%] bottom-[20%]">
        <ContainerTextFlip textClassName="text-[130px] max-sm:text-[50px] text-right" words={["Portfolio", "Architecture", "Interior"]} />
      </div>
    </div>
  );
};

export default Landing;
