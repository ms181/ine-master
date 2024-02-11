import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { useRef, useState } from "react";

export default function Layout({ Content }) {
  const layout = useRef();
  const [active, setActive] = useState("DashBoard")
  const changeName = (name) => {
    setActive(name);
    layout.current.classList.toggle("max-sm:grid-cols-[100%_0%]")
    layout.current.classList.add("max-sm:grid-cols-[0%_100%]")
  }
  return (
    <div
      className="grid grid-cols-[20%_80%]
         max-sm:grid-cols-[0%_100%] max-sm:p-0 
         w-screen h-screen overflow-hidden"
      ref={layout}
    >
      <SideBar changeName={changeName} active={active}/>
      <div className=" overflow-y-scroll p-8 max-sm:p-4 bg-gray-100">
        <NavBar layout={layout} changeName={changeName} active={active}/>
        <Content />
      </div>
    </div>
  );
}
