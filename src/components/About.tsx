import DitherShader from "./ui/dither-shader";
import Image1 from "../../public/nich1.jpg";
import { useMemo } from "react";
const About = () => {
  const year = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);
  const softwares = [
    "Adobe Photoshop",
    "V Ray",
    "AutoCAD",
    "SketchUp",
    "D5 Render",
  ];
  const habits = ["Sketching", "Researching", "Archiving", "Resting"];
  const educations = [
    {
      title: "Hight School",
      school: "Toul Prasat Hight School (TPS)",
      date: "2019 - 2021",
    },
    {
      title: "Architecture Design",
      school: "Norton University (NU)",
      date: "2021 - present",
    },
  ];
  const languages = [
    {
      name: "Khmer",
      rate: "Native",
    },
    {
      name: "English",
      rate: "Medium",
    },
  ];
  const experiences = [
    {
      jobTitle: "Architecture design",
      company: "NOK Construction",
      date: "JAN 2026 - MAY 2026",
    },
    {
      jobTitle: "Architecture Internship",
      company: "STHABANAK ARCHITECT & DESIGN",
      date: "JUNE 2025 - DEC 2025",
    },
  ];

  return (
    <div
      id="about"
      className="h-[100dvh] max-sm:overflow-auto max-sm:h-auto overflow-hidden relative bg-[#f5f5f5]"
    >
      <div className="flex max-sm:invisible top-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">Portfolio / Son SreyNich</p>
        <p className="desc">Curriculum Vitae</p>
      </div>
      <div className="flex max-sm:invisible bottom-[5%] justify-between absolute w-[90%] left-[50%] -translate-x-[50%]">
        <p className="desc">2021</p>
        <p className="desc">{year}</p>
      </div>
      <div className="flex  gap-[100px] max-sm:gap-[20px] max-sm:flex-col-reverse justify-center items-center h-full">
        <div className="w-[40%] max-sm:w-full max-sm:px-[20px] max-sm:gap-[10px] gap-[20px] max-sm:flex-col max-sm:justify-center justify-end flex">
          <p className="main">.ABOUT ME</p>
          <p className="w-[50%] max-sm:w-full max-sm:w-full mt-[30px] max-sm:mt-0 desc">
            Hello my name is SreyNich Son, As an architecture student, the
            ultimate goal is to secure a job in a field upon graduation. During
            my university life I wanted to find a job as an internship to
            improve my skill in creative and to maximize my skill by giving my
            contribution to the company as much as I able to give.
          </p>
        </div>
        <div className="flex-1 gap-[50px] flex max-sm:flex-col">
          <div className="flex flex-col ">
            <DitherShader
              src={Image1}
              gridSize={1}
              ditherMode="bayer"
              invert={false}
              animated={false}
              animationSpeed={0.02}
              primaryColor="#000000"
              secondaryColor="#f5f5f5"
              threshold={1}
              className="h-80 max-sm:h-[500px] max-sm:w-full w-[200px]"
            />
            <div className=" max-sm:px-[15px]">
              <p className="my-[10px] main">Son SreyNich</p>
              <p className="desc">Phnom Penh , Cambodia.</p>
              <p className="desc">sonsreynich1212@gmail.com</p>
              <p className="desc">+855 92 35 12 84</p>
            </div>
          </div>
          <div className="grid max-sm:px-[15px] gap-[30px] grid-cols-2">
            <div>
              <p className="main">.EDUCATION</p>
              <ul className="flex mt-[15px] flex-col gap-[20px]">
                {educations.map((e) => (
                  <li key={e.title}>
                    <p className="semi text-black">{e.title}</p>
                    <p className="desc">{e.school}</p>
                    <p className="desc mt-[5px]">{e.date}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="main">.SOFTWARE</p>
              <ul className="mt-[15px]">
                {softwares.map((s) => (
                  <li className="desc" key={s}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="main">.EXPERIENCE</p>
              <ul className="mt-[15px] flex flex-col gap-[20px]">
                {experiences.map((e) => (
                  <li className="desc" key={e.jobTitle}>
                    <p className="semi text-black">{e.jobTitle}</p>
                    <ul className="my-[5px]">
                      {e.jobDescription?.length &&
                        e.jobDescription.map((jd, index) => (
                          <li className="desc" key={index}>
                            {jd}
                          </li>
                        ))}
                    </ul>
                    <p className="desc mt-[5px]">{e.date}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="main">.HABIT</p>
              <ul className="mt-[15px]">
                {habits.map((h) => (
                  <li className="desc" key={h}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="main">.LANGUAGES</p>
              <ul className="mt-[15px]">
                {languages.map((l) => (
                  <li key={l.name}>
                    <span>{l.name}</span>
                    <span className="desc"> | {l.rate}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
