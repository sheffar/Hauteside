import { Star } from "lucide-react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function ReviewsList() {
  return (
    <div className="grid mt-5 grid-cols-2 gap-x-3 gap-y-6">
      {[1, 2, 3, 4, 5].map((el, key) => (
        <div className="flex gap-5" key={key}>
          <div className="">
            <div className="h-10 w-10 border-gray-600 rounded-full border-2 "></div>
          </div>
          <div className="">
            <p className="font-semibold text-sm">Taylor Swift</p>
            <div className="flex mt-2 gap-2">
              {[1, 2, 3, 4, 5].map((el, key) => (
                <div className="" key={key}>
                  <BsStarFill className="text-sm text-amber-500" />
                </div>
              ))}
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                eaque maxime tenetur consequatur dolores nobis eos iste, quidem
                cum labore, similique ab mollitia alias, dicta qui officia
                provident obcaecati ducimus unde. Labore sapiente enim atque
                laborum eum voluptate corporis fugit.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
