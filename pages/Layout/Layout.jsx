import React from "react";
import { FaRegEdit } from "react-icons/fa";
const Layout = ({ children }) => {

  return (
    <section className="container  mx-auto">
      <div className="lg:grid grid-cols-8 gap-4 mt-20">
        <div className="shadow-md w-full  col-span-2 p-3 lg:p-0 ">
          <div className="sticky top-0">
            {/* User Profile */}
            <div className="text-center   rounded-md shadow-xl border-0">
              <img className="w-28 h-28 lg:w-40 lg:h-40 mx-auto border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
              <h1 className="text-2xl  font-bold pt-5 lg:text-lg">Aminul Islam Rakib</h1>
              <h1 className="text-xl  pt-3 lg:text-sm text-slate-400">Web Developer</h1>

              <button className="w-3/4 p-3 my-5 bg-slate-200 rounded-3xl text-blue-600 font-semibold border-none">Edit Profile</button>
            </div>

            {/* Wrok Experience */}
            <div className="bg-white p-3 my-3 rounded-md shadow-xl border-0">
              <div className="flex justify-between">
                <h1 className="font-bold text-orange-600">Wrok Experience </h1>
                <p className="pt-1 pr-2"><FaRegEdit></FaRegEdit></p>
              </div>

              {/* slot- */}
              <div className="flex justify-between py-4 ">
                <div className="flex">
                  <img className="w-16 h-16 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />

                  <div className="my-2 ml-2">
                    <p className=" font-bold">Junior UI Designer</p>
                    <p className="text-slate-400">Airbnb, inc - Fulltime</p>
                  </div>
                </div>
                <div>
                  <p className="mt-5 mr-2 text-slate-400">2 Moc</p>
                </div>

              </div>

              {/* slot-2 */}
              <div className="flex justify-between py-4 ">
                <div className="flex">
                  <img className="w-16 h-16 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />

                  <div className="my-2 ml-2">
                    <p className=" font-bold">Junior UI Designer</p>
                    <p className="text-slate-400">Airbnb, inc - Fulltime</p>
                  </div>
                </div>
                <div>
                  <p className="mt-5 mr-2 text-slate-400">2 Moc</p>
                </div>

              </div>


            </div>


            {/* Top Skill */}
            <div className="bg-white my-3 p-3 rounded-md shadow-xl border-0">

              <div className="flex justify-between">
                <h1 className="font-bold text-orange-600">Top Skills</h1>
                <p className="pt-1 pr-2"><FaRegEdit></FaRegEdit></p>
              </div>

              <div className="flex justify-between">
                <li className="mt-4">UI Disgner</li>
                <p className="mt-4 mr-2 text-slate-400">1-2 Years</p>
              </div>

              <div className="flex justify-between">
                <li className="mt-4">UI Disgner</li>
                <p className="mt-4 mr-2 text-slate-400">1-2 Years</p>
              </div>

              <div className="flex justify-between">
                <li className="mt-4">UI Disgner</li>
                <p className="mt-4 mr-2 text-slate-400">1-2 Years</p>
              </div>
            </div>
          </div>

        </div>
        <div className="col-span-4">
          {children}
        </div>


        <div className="shadow-md w-full col-span-2  ">

          <div className="bg-white p-3  rounded-md shadow-xl border-0">

            <h1 className="font-bold text-center text-[#19ccfe] lg:text-xl">Messages </h1>


            {/* slot-1 */}
            <div className="flex justify-between py-4 ">
              <div className="flex">
                {/* Total Friends */}
                <img className="w-8 h-8 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
                <p className="my-auto pl-4 text- font-semibold">Aminul Islam Rakib</p>
              </div>
            </div>


            {/* slot-2 */}
            <div className="flex justify-between py-4 ">
              <div className="flex">
                {/* Total Friends */}
                <img className="w-8 h-8 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
                <p className="my-auto pl-4 text- font-semibold">Ashikur Rahman</p>
              </div>
            </div>


            {/* slot-3 */}
            <div className="flex justify-between py-4 ">
              <div className="flex">
                {/* Total Friends */}
                <img className="w-8 h-8 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
                <p className="my-auto pl-4 text- font-semibold">Kazi Rahat Rezwan</p>
              </div>
            </div>


            {/* slot-4 */}
            <div className="flex justify-between py-4 ">
              <div className="flex">
                {/* Total Friends */}
                <img className="w-8 h-8 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
                <p className="my-auto pl-4 text- font-semibold">Shafin</p>
              </div>
            </div>


            {/* slot-5 */}
            <div className="flex justify-between py-4 ">
              <div className="flex">
                {/* Total Friends */}
                <img className="w-8 h-8 border-green-600 rounded-full" src="https://i.ibb.co/QYjRJmD/avator.jpg" alt="Profile Picture" />
                <p className="my-auto pl-4 text- font-semibold">Thadi Islam</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
