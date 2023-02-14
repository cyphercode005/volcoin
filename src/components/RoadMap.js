import React from "react";

export default function RoadMap() {
  return (
    <div className="pl-16 text-white flex justify-between">
      <div className="mt-36 w-4/5">
        <span className="text-9xl"> Our Roadmap </span>
        <p className=" pl-3 mt-12 text-md w-3/5 ">
          With volatility a constant threat to any crypto currency trader, we
          are offering the first ever coin which will allow you to hedge against
          the unpredictable swings in the market.
        </p>
        <div className="flex " >
        <section className="pl-12 pb-10 mt-16 w-3/5 ml-3 border border-gray-300">
          <img className="mt-12 mb-12 w-16" src="roadmap1.png" alt="" />
          <span className="text-sm text-yellow-300"> Phase Three</span>
          <h1 className=" pt-3 text-3xl w-1/2">
            Create GVolCoins and Marketing
          </h1>
          <section className="mt-7">
              <div className="flex pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-sm">
                  The governance tokens will be used to attract initial
                  investment from investors looking to enter into the project
                  early at a discount, whitelist distribution.
                </p>
            </div>
              <div className="flex mt-3 pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-sm">
                Start marketing organically using Twitter, Discord and Telegram
                </p>
            </div>
              <div className="flex mt-3 pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-sm">
                Work on giveaways to attract early adopters
                </p>
            </div>
              <div className="flex mt-3 pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-sm">
                Legal preparation for regulation compliance
                </p>
            </div>
          </section>
        </section>
        <ul className="pl-20 mt-20 ml-3 flex flex-col list-disc">
            <li className=" text-gray-300"> Phase One. </li>
            <li  className="pt-7 text-gray-300"> Phase Two.</li>
            <li  className="pt-7 text-yellow-300"> Phase Three.</li>
            <li  className="pt-7 text-gray-500"> Phase Four.</li>
            <li  className="pt-7 text-gray-500"> Phase Five.</li>
            <li  className="pt-7 text-gray-500"> Phase Six.</li>
            <li  className="pt-7 text-gray-500"> Phase Seven.</li>
            <li  className="pt-7 text-gray-500"> Phase Eight.</li>
            <li  className="pt-7 text-gray-500"> Phase Nine.</li>
        </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex justify-end"> <img className="" src="roadmap2.png" alt="" /> <div> </div></div>
      </div>
    </div>
  );
}
