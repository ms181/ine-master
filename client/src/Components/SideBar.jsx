import { Link } from "react-router-dom";
import { Card, Columns, Dollar, Home, LogOut, Settings } from "../assets/Icons";
// temp imports for testing purpose
import usrImg from "../assets/temp/user.png";

export default function SideBar({ changeName, active }) {
  const setHeading = (heading) => {
    changeName(heading);
    console.log(active);
    console.log(heading + " this is heading");
  };
  return (
    <div className="Sidebar">
      <div className="sidebar">
        <div className="user">
          <img src={usrImg} alt="logo" />
          <div className="info">
            <h6>Annette Black</h6>
            <p>annette@gmail.com</p>
          </div>
        </div>
        <ul className="menu">
          <Link
            className="duraion-75 no-underline text-[#666677] hover:text-indigo-700 group"
            to="/"
          >
            <li onClick={() => changeName("Dashboard")}>
              <Home classNames="group-hover:stroke-indigo-700 stroke-[#666677] w-5" />
              Dashboard
            </li>
          </Link>
          <Link
            className="duraion-75 no-underline text-[#666677] hover:text-indigo-700 group"
            to="/income"
          >
            <li onClick={() => changeName("Incomes")}>
              <Card classNames="group-hover:stroke-indigo-700 stroke-[#666677] w-5" />
              Income
            </li>
          </Link>
          <Link
            className="duraion-75 no-underline text-[#666677] hover:text-indigo-700 group"
            to="/expenses"
          >
            <li onClick={() => changeName("Expenses")}>
              <Dollar classNames="group-hover:stroke-indigo-700 stroke-[#666677] w-5" />
              Expense
            </li>
          </Link>
          <Link
            className="duraion-75 no-underline text-[#666677] hover:text-indigo-700 group"
            to="/categories"
          >
            <li onClick={() => changeName("Categories")}>
              <Columns classNames="group-hover:stroke-indigo-700 stroke-[#666677] w-5" />
              Categories
            </li>
          </Link>
        </ul>
        <div className="bottom">
          <button>
            <Settings />
          </button>
          <button>
            <LogOut />
          </button>
        </div>
      </div>
    </div>
  );
}
