import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

export default function MainContent({layout}) {
  return (
    <div className=" overflow-y-scroll p-8 max-sm:p-4 bg-gray-100">
      <NavBar layout={layout}/>
      <Dashboard/>
    </div>
  );
}
