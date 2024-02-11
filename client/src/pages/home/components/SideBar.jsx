import { Activity, Dollar, Home, LogOut, Message, Pie, Settings, User } from "../../../assets/Icons";
// temp imports for testing purpose
import usrImg from "../../../assets/temp/user.png"

export default function SideBar() {

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
          <li>
            <Activity className={"feather"} /> 
            Dashboard
          </li>
          <li>
            <Home className={"feather"} />
            Properties
          </li>
          <li>
            <User className={"feather"} />
            Tanants
          </li>
          <li>
            <Dollar className={"feather"} />
            Insurance
          </li>
          <li>
            <Pie className={"feather"} />
            Income
          </li>
          <li>
            <Message className={"feather"} />
            Chat
          </li>
        </ul>
        <div className="bottom">
          <button>
            <Settings src={"feather"} />
          </button>
          <button>
            <LogOut src={"feather"} />
          </button>
        </div>
      </div>
    </div>
  );
}
