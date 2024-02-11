export default function Categories() {
  return (
    <div className="mt-8 w-full">
      <div className="flex flex-col gap-8 rounded-xl shadow-xl p-8 bg-white">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="bg-gray-300 flex gap-4 p-4 w-fit rounded-xl">
            <button className="btn btn-neutral">Income</button>
            <button className="btn shadow-none">Expence</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 p-8 border-2 rounded-xl">
          <h3>INCOME</h3>
          <div className="w-full">
            <h4 className="text-primary-500">Add Income categories</h4>
          </div>
          <div className="flex flex-col w-full gap-4">
            <input className="border p-2" type="text" placeholder="Add Title" />
            <textarea
              className="border p-2"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Add Description"
            ></textarea>
            <div className="w-full">
              <button className="btn btn-primary">Add Income categories</button>
            </div>
          </div>
          <div className="w-full pt-8">
            <h4 className="text-primary-500">Income Table</h4>
          </div>
          <div className="w-full">
            <div className="flex justify-end items-center">
              <p className="text-body-1 p-2">Select category</p>
              <select name="" id="" className="border p-2">
                <option value="all">all catagories</option>
              </select>
            </div>
            <div className="w-full py-4">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Rent</td>
                    <td>22/12/22</td>
                    <td>10,000</td>
                    <td>i paid my rent</td>
                    <td>X</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
