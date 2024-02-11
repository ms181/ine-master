import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { useRef } from "react";

export default function Home() {
  const layout = useRef();
  return (
    <div
      className="grid grid-cols-[20%_80%]
         max-sm:grid-cols-[0%_100%] max-sm:p-0 
         w-screen h-screen overflow-hidden"
      ref={layout}
    >
      <SideBar />
      <MainContent layout={layout}/>
    </div>
  );
}
