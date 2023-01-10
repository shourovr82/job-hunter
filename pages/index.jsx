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
              <h3 className="text-2xl font-bold text-gray-800">
                Junior UI/UX Designer
              </h3>
              <h6 className="text-gray-500 text-lg">Slack Technologies, LLC</h6>
            </div>
          </div>
          <button className="flex items-center justify-center gap-4 bg-slate-200 py-4 px-8 rounded-full text-slate-700 text-xl font-semibold hover:bg-slate-300">
            <span>Save job</span>
            <BsSave2Fill />
          </button>
        </div>
        <div>
          <p className="text-lg text-gray-400 text-justify py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempore, quas tenetur perspiciatis, officiis ab facere earum dolore
            maiores libero nihil labore architecto repellat
          </p>
        </div>
        <div className="flex flex-wrap justify-start gap-4 border-b pb-6">
          <span className="bg-slate-200 py-3 px-7 rounded-lg">Fulltime</span>
          <span className="bg-slate-200 py-3 px-7 rounded-lg">Designer</span>
          <span className="bg-slate-200 py-3 px-7 rounded-lg">Remote</span>
        </div>
        <div>
          <div className="flex items-center">
            <BsCurrencyDollar />
            <h4>12k-14k </h4>
            <h6>/Month</h6>
          </div>
          <div className="flex items-center">
            <BsPeopleFill />
            <h4>55</h4>
            <span>people applied</span>
          </div>
          <button className="py-4 px-8 rounded-xl">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default index;
