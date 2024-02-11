import { Bell, Search} from "../../../assets/Icons"

export default function NavBar({layout}){

    const openSideBar = () =>{
        console.log(layout.current.classList);
        layout.current.classList.add("max-sm:grid-cols-[100%_0%]")
        layout.current.classList.remove("max-sm:grid-cols-[0%_100%]")
    }

    return(
        <div className="flex justify-between items-center max-sm:p-0">
            <div>
                <p className="lg:text-4xl text-2xl font-bold font-primary pl-1">Dashboard</p>
                <p className="lg:text-body-1 text-body-2 pl-1">Welcome, Annartte !</p>
            </div>

            <div className="flex gap-4">
                <button className="p-2 border rounded-md"><Search /></button>
                <button className="p-2 border rounded-md"><Bell /></button>
                <button 
                className="btn btn-primary max-sm:btn-sm lg:hidden"
                onClick={openSideBar}>
                Menu
                </button>
            </div>

        </div>
    )
}
