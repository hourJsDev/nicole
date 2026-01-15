import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { project } from "../data/project";
import ImageSkeleton from "../components/skeleton/ImageSkeleton";
const ProjectDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const pro = useMemo(() => {
    const projectDetail = project.find((p) => p.id === Number(id));
    return projectDetail;
  }, [id]);
  console.log(typeof(pro?.image));
  
  return (
    <div className="bg-[#f5f5f5] pb-[30px]">
      <div className="relative pt-[8%] ">
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
            <div className="border border-black w-[60%]">
              <ImageSkeleton src={pro?.image} className="w-full h-full" />
            </div>
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
      {!!pro?.images?.length && (
        <div className="mt-[60px]">
          <div className="flex max-w-[900px] mx-auto gap-[10px] flex-col">
            {pro?.images.map((imgs, index) => (
              <div className={`grid grid-cols-1 gap-4 lg:grid-cols-3 `} key={index}>
                {imgs.map((img, idx) => (
                  <div className={`border-2 bg-[#303030] border-black ${!(index % 2) ? `${idx ? "lg:col-span-2" : ""}` : `${idx ? "" : "lg:col-span-2"}`}`} key={idx}>
                    <ImageSkeleton className="w-full object-center h-full object-contain" src={img} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
