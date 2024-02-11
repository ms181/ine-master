import {useState} from "react"
import Expenses from "./Expenses";
import Income from "./Income";

export default function Categories() {
  const [isIncomeShowing, setIsIncomeShowing] = useState(true);

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-col gap-8 rounded-xl shadow-xl p-8 bg-white">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="bg-gray-200 flex gap-1.5 p-1.5 w-fit rounded-lg">
            <button className={isIncomeShowing ? "bg-white shadow-2xl px-20 py-3 rounded-md" : "bg-transparent hover:bg-gray-300 px-20 py-3 rounded-md"} onClick={()=> setIsIncomeShowing(true)}>Income</button>
            <button className={!isIncomeShowing ? "bg-white shadow-2xl px-20 py-3 rounded-md" : "bg-transparent hover:bg-gray-300 px-20 py-3 rounded-md"} onClick={()=> setIsIncomeShowing(false)}>Expense</button>
          </div>
        </div>
        {isIncomeShowing ? <Income /> : <Expenses/>}
      </div>
    </div>
  );
}
