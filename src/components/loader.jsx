import { React } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Loader() {
  var tl = gsap.timeline();
  useGSAP(() => {
    tl.to(
      "#loader",
      {
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: "power3",
      },
      "same"
    );
    tl.to(
      "#loader",
      {
        display: "none",
        delay: 0.3,
      },
      "same"
    );
  });

  return (
    <div
      id="loader"
      className="fixed z-100 h-screen w-full flex items-center justify-center bg-white text-black pointer-none"
    >
      <div className="flex flex-col text-black items-center  ">
        <div class="w-7 h-7 border-2 border-t-red-500 border-gray-300 rounded-full animate-spin"></div>
       <h1 className="text-sm">
         loading
        </h1>
      </div>
    </div>
  );
}

export default Loader;
