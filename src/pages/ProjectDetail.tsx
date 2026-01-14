import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { project } from "../data/project";

const ProjectDetail = () => {
  const { id } = useParams();
  const pro = useMemo(() => {
    const projectDetail = project.find((p) => p.id === Number(id));
    return projectDetail;
  }, [id]);

  return (
    <div className="relative pt-[15%] min-h-[100dvh]">
      <div className="flex top-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">Portfolio / Son SreyNich</p>
        <p className="desc">
          0{pro?.id} / {pro?.name}
        </p>
      </div>
      <span className="underline absolute right-[5%] top-[10%]">
        <Link to={"/#project"}>Back</Link>
      </span>
      <div className="px-[8%]">
        <div className="flex justify-end">
          <div className="border border-black w-[60%] aspect-[16/9]"></div>
        </div>
        <div className="flex gap-[20px]">
          <p className="mt-[10px] main">0{pro?.id}</p>
          <div className="flex flex-col gap-[10px]">
            <p className="main">{pro?.name}</p>
            <p className="desc">
              <span>Subject: </span>
              <span>{pro?.subject}</span>
            </p>
            <p className="desc">
              <span>Program: </span>
              <span>{pro?.program}</span>
            </p>
            <p className="desc">
              <span>Area: </span>
              <span>{pro?.area}</span>
            </p>
            <p className="desc">
              <span>Location: </span>
              <span>{pro?.location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
