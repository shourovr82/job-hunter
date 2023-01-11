import React from "react";
import { BsSave2Fill, BsCurrencyDollar, BsPeopleFill } from "react-icons/bs";

const index = () => {
  return (
    <section>
      <div className="shadow w-full rounded p-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-6">
            <img
              className="w-20 h-20 rounded-full"
              src="https://i.ibb.co/QYjRJmD/avator.jpg"
              alt="brand logo"
            />
            <div>
              <h3 className="text-sm  font-bold text-gray-800">
                Junior UI/UX Designer
              </h3>
              <h6 className="text-gray-500 text-lg">Slack Technologies, LLC</h6>
            </div>
          </div>
          <button className="flex items-center justify-center gap-4 bg-slate-200 py-4 px-8 rounded-2xl text-[#23bfef] hover:text-[#19ccfe] text-xl font-semibold hover:bg-slate-300 duration-300">
            <span>Save job</span>
            <BsSave2Fill />
          </button>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-400 text-justify py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempore, quas tenetur perspiciatis, officiis ab facere earum dolore
            maiores libero nihil labore architecto repellat
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-4 border-b pb-6 text-lg">
          <span className=" bg-slate-200 py-2 px-6 rounded-lg">Fulltime</span>
          <span className=" bg-slate-200 py-2 px-6 rounded-lg">Designer</span>
          <span className=" bg-slate-200 py-2 px-6 rounded-lg">Remote</span>
        </div>
        <div className="flex justify-between items-center pt-6">
          <div className="flex items-center gap-2">
            <BsCurrencyDollar className="text-[#23bfef] text-lg" />
            <h4 className="text-lg font-semibold font-mono">12k-14k </h4>
            <h6 className="text-xl text-gray-400">/ Month</h6>
          </div>
          <div className="flex items-center gap-2">
            <BsPeopleFill className="text-[#23bfef] text-lg" />
            <h4 className="text-lg font-semibold  font-mono">55</h4>
            <span className="text-xl text-gray-400">people applied</span>
          </div>
          <button className="py-2 font-bold px-5 text-xs rounded-2xl text-gray-50 bg-[#23bfef] hover:bg-[#23bfef67] duration-300">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default index;
