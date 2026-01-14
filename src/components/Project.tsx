import { project } from "../data/project";
import DitherShader from "./ui/dither-shader";
const Project = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center overflow-hidden relative bg-[#f7f7f7]">
      <div className="flex top-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">Portfolio / Son SreyNich</p>
        <p className="desc">Project</p>
      </div>
      <div className="flex gap-[30px]">
        {project.map((p, index) => (
          <div key={p.id} className="cursor-pointer">
            <p>0{index + 1}</p>
            <DitherShader
              src={p.image}
              gridSize={1}
              ditherMode="bayer"
              colorMode="grayscale"
              invert={false}
              animated={false}
              animationSpeed={0.02}
              primaryColor="#000000"
              secondaryColor="#f5f5f5"
              threshold={0.6}
              className="h-[380px] transition-all ease-in-out duration-300 hover:-translate-y-[5px] border-2 mt-[30px] border-black w-[200px]"
            />
            <p className="mt-[10px] text-[14px]">{p.name}</p>
            <p className="mt-[20px] desc">{p.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
