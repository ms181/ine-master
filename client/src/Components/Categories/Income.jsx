import React from "react";

const Income = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center gap-8 p-8 border-2 rounded-xl">
      <h3>Income Categories</h3>
      <div className="w-full">
        <h4 className="text-primary-500">Add Income categories</h4>
      </div>
      <div className="flex flex-col w-full gap-4">
        <input
          className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent"
          type="text"
          placeholder="Add Title"
        />
        <textarea
          className="border border-gray-300 rounded-lg outline-none focus:border-gray-400 px-4 py-4 bg-transparent"
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
                <td>
                  <a className="danger">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Income;
