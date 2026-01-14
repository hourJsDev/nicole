import Landing from "../components/Landing";
import About from "../components/About";
import Project from "../components/Project";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const pathname = useLocation();

  useEffect(() => {
    if (pathname && pathname.hash.includes("#project")) {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }, 10);
    }
  }, [pathname]);
  return (
    <div>
      <Landing />
      <About />
      <Project />
    </div>
  );
};

export default Home;
