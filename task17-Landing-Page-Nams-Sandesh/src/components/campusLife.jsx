import React from "react";
import img1 from "../images/pexels-jeffrey-czum-2346216.jpg";
import list from "../list.json";
import { TiChevronRight } from "react-icons/ti";

function Campus() {
  return (
    <div className="m-auto pt-2 bg-gray-200 w-full mt-0">
      <div className="flex flex-wrap justify-between">
        {list.map((item, i) => (
          <div className="w-[200px] space-y-4">
            <img
              src={img1}
              alt=""
              className="w-full h-40 object-cover mt-4 border rounded border-black"
            />
            <div>
              <h2 className="bg-[orange] p-[2px] px-3 font-bold mb-1">
                {item.text}
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              in.
            </p>
            <div className="flex">
              <a href="" className="font-bold">
                Read More
              </a>
              <TiChevronRight className="mb-5 ml-10 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Campus;
