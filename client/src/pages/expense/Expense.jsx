import PieChart from "./components/PieChart";
import Tags from "./components/Tags";

const data = {
  labels: ['Personal', "category2", "category-3"],
  datasets: [
    {
      label: 'Expence',
      data: [12, 19, 3],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
};

export default function Expence() {
  return (
    <div className="p-8 w-screen flex flex-col gap-10">
      
    {/* 1st section catogory holder */}
    <div className="grid lg:grid-cols-[1fr_2fr] gap-8">

      <div className="p-8 shadow-xl border rounded-xl">
         <PieChart data={data} />
      </div>

      <div className="p-8 shadow-xl border rounded-xl">
        <h4 className="text-primary-500">Categories</h4>

          <div className="flex gap-4 flex-col justify-between h-[100%-2rem]">
            <div className="flex gap-4 flex-col pt-4">
            <div className="flex justify-between">
              <div>
                <h6>Personal</h6>
                <p className="text-body-2">my expences for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <button className="btn btn-neutral btn-sm">view</button>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <h6>Personal</h6>
                <p className="text-body-2">my expences for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <button className="btn btn-neutral btn-sm">view</button>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <h6>Personal</h6>
                <p className="text-body-2">my expences for my living</p>
              </div>
              <div className="flex justify-center items-center">
                <button className="btn btn-neutral btn-sm">view</button>
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
    <div className="p-8 shadow-xl border rounded-xl">
      <h4 className="text-primary-500">Recents</h4>
      <div className="flex justify-center item-center">
        <div className="py-4 w-full flex flex-col gap-4">
        {/*content*/}
              <div>
                <h6>Brought A Bike</h6>
                <p className="text-body-2">i brought a bire with high milage and works 20km for 1lt and it is a superbike </p>
                <div className="pt-2 flex gap-4">
                <Tags tagText="personal"/>
                <Tags tagText="debt"/>
                <Tags tagText="tags"/>
                </div>
              </div>

              <div>
                <h6>Brought A Bike</h6>
                <p className="text-body-2">i brought a bire with high milage and works 20km for 1lt and it is a superbike </p>
                <div className="pt-2 flex gap-4">
                <Tags tagText="personal"/>
                <Tags tagText="debt"/>
                <Tags tagText="tags"/>
                </div>
              </div>

              <div>
                <h6>Brought A Bike</h6>
                <p className="text-body-2">i brought a bire with high milage and works 20km for 1lt and it is a superbike </p>
                <div className="pt-2 flex gap-4">
                <Tags tagText="personal"/>
                <Tags tagText="debt"/>
                <Tags tagText="tags"/>
                </div>
              </div>

          </div>
      </div>
    </div>

    {/*  add Expence  */}
      <div className="flex flex-col justify-center items-center gap-8 p-8 shadow-xl border rounded-xl">
        <div className="w-full">
          <h4 className="text-primary-500">Add Expence</h4>
        </div>
        <div className="flex flex-col w-full gap-4">
          <input className="border p-2" type="text" placeholder="Add Title" />
          <div className="flex gap-4 w-full">
            <input className="w-1/6 border p-2" type="date" name="" id="" />
            <select name="" id="" className="border p-2 w-2/6 ">
              <option value="all">all categories</option>
            </select>
            <input
              className="border p-2 w-3/6"
              type="number"
              name=""
              id=""
              placeholder="Add Amount"
            />
          </div>
          <textarea
            className="border p-2"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Add Description"
          ></textarea>
          <div className="w-full">
            <button className="btn btn-primary">Add Expence</button>
          </div>
        </div>
      </div>
    </div>
  );
}
