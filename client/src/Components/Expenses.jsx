import PieChart from "../Charts/PieChart";

const data = {
  labels: ["Personal", "Finance", "Business"],
  datasets: [
    {
      label: "Expenses",
      data: [5, 19, 22],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
};

export default function Expenses() {
  return (
    <div className="lg:py-8 lg:px-2 px-2 pt-8 w-full flex flex-col gap-10 ">
      {/* 1st section catogory holder */}
      <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
        <div className="p-8 shadow-xl rounded-xl bg-white flex items-center justify-center">
          <PieChart data={data} />
        </div>

        <div className="p-8 shadow-xl rounded-xl bg-white">
          <h4 className="text-primary-500">Categories</h4>

          <div className="flex gap-4 flex-col justify-between h-[100%-2rem]">
            <div className="flex gap-4 flex-col pt-4">
              <div className="flex justify-between bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl">
                <div>
                  <h6>Personal</h6>
                  <p className="text-body-2">my expenses for my living</p>
                </div>
                <div className="flex justify-center items-center">
                  <a>View</a>
                </div>
              </div>
              <div className="flex justify-between bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl">
                <div>
                  <h6>Finance</h6>
                  <p className="text-body-2">my expenses for my living</p>
                </div>
                <div className="flex justify-center items-center">
                  <a>View</a>
                </div>
              </div>
              <div className="flex justify-between bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl">
                <div>
                  <h6>Business</h6>
                  <p className="text-body-2">my expenses for my living</p>
                </div>
                <div className="flex justify-center items-center">
                  <a>View</a>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="btn btn-primary"> See All </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section "Recents" */}
      <div className="p-8 shadow-xl rounded-xl bg-white">
        <h4 className="text-primary-500">Recents</h4>
        <div className="flex justify-center item-center">
          <div className="py-4 w-full flex flex-col gap-4">
            {/*content*/}
            <div className="flex justify-between border-b pb-4 last:border-none">
              <div>
                <h6>Personal</h6>
                <p className="text-body-2">my expenses for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <a>View</a>
              </div>
            </div>

            <div className="flex justify-between border-b pb-4 last:border-none">
              <div>
                <h6>Finance</h6>
                <p className="text-body-2">my expenses for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <a>View</a>
              </div>
            </div>

            <div className="flex justify-between border-b pb-4 last:border-none">
              <div>
                <h6>Business</h6>
                <p className="text-body-2">my expenses for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <a>View</a>
              </div>
            </div>

            <div className="pt-4">
              <button className="btn btn-primary"> See All </button>
            </div>
          </div>
        </div>
      </div>

      {/*  add Expenses  */}
      <div className="p-8 flex-col dashboardCard">
        <div className="w-full  mb-4">
          <h4 className="text-primary-500">Add Expenses</h4>
        </div>
        <div className="flex flex-col w-full gap-4">
          <input
            className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent"
            type="text"
            placeholder="Add Title"
          />
          <div className="flex gap-4 w-full">
            <input
              className="w-1/6 border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent"
              type="date"
              name=""
              id=""
            />
            <select
              name=""
              id=""
              className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent w-2/6"
            >
              <option value="all">all categories</option>
            </select>
            <input
              className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent w-3/6"
              type="number"
              name=""
              id=""
              placeholder="Add Amount"
            />
          </div>
          <textarea
            className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Add Description"
          ></textarea>
          <div className="w-full">
            <button className="btn btn-primary">Add Expenses</button>
          </div>
        </div>
      </div>
    </div>
  );
}
