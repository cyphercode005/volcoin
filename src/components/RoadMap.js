import React from "react";

export default function RoadMap() {
  return (
    <div className="w-screen pl-4 lg:pl-16 xl:pl-16 text-white flex justify-between">
      <div className="absolute lg:block xl:block mt-16 lg:mt-36 xl:mt-36 lg:w-4/5 xl:w-4/5">
        <span className=" text-4xl lg:text-9xl xl:text-9xl"> Our Roadmap </span>
        <p className="mr-12 lg:mr-0 xl:mr-0 pl-3 mt-6 lg:mt-12 xl:mt-12 text-md lg:w-3/5 xl:w-3/5">
          With volatility a constant threat to any crypto currency trader, we
          are offering the first ever coin which will allow you to hedge against
          the unpredictable swings in the market.
        </p>
        <div className="flex flex-col-reverse lg:flex-row xl:flex-row" >
        <section className="mr-20 lg:mr-0 xl:mr-0 pl-5 lg:pl-12 xl:pl-12 pb-8 mt-8 lg:mt-16 xl:mt-16 lg:w-3/5 xl:w-3/5 ml-5 lg:ml-3 xl:ml-3 border border-gray-300">
          <img className="mt-8 lg:mt-12 xl:mt-12 w-12 pb-4 lg:pb-8 xl:pb-8" src="roadmap1.png" alt="" />
          <span className="text-sm text-yellow-300"> Phase Three</span>
          <h1 className=" pt-3 text-xl lg:text-3xl xl:text-3xl lg:w-1/2 xl:w-1/2">
            Create GVolCoins and Marketing
          </h1>
          <section className="mt-4 lg:mt-7 xl:mt-7">
              <div className="flex text-justify pr-4 lg:pr-16 xl:pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-xs lg:text-sm xl:text-sm">
                  The governance tokens will be used to attract initial
                  investment from investors looking to enter into the project
                  early at a discount, whitelist distribution.
                </p>
            </div>
              <div className="flex mt-3 text-justify pr-4 lg:pr-16 xl:pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-xs lg:text-sm xl:text-sm">
                Start marketing organically using Twitter, Discord and Telegram
                </p>
            </div>
              <div className="flex mt-3 text-justify pr-4 lg:pr-16 xl:pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-xs lg:text-sm xl:text-sm">
                Work on giveaways to attract early adopters
                </p>
            </div>
              <div className="flex mt-3 text-justify pr-4 lg:pr-16 xl:pr-16">
                <img className="w-3 h-3 mt-1 mr-2" src="tick.png" alt="" />
                <p className="text-xs lg:text-sm xl:text-sm">
                Legal preparation for regulation compliance
                </p>
            </div>
          </section>
        </section>
        <ul className="mt-10 lg:mt-20 xl:mt-20 pl-8 lg:pl-20 xl:pl-20 ml-3 lg:ml-3 xl:ml-3 flex lg:flex-col xl:flex-col list-disc gap-0	">
            <li className=" text-gray-300 px-3"> <span className="hidden lg:block xl:block"> Phase One.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-300 px-3"> <span className="hidden lg:block xl:block"> Phase Two.</span></li>
            <li  className="lg:pt-7 xl:pt-7 text-yellow-300 px-3"><span className="hidden lg:block xl:block"> Phase Three.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"> <span className="hidden lg:block xl:block"> Phase Four.</span></li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"><span className="hidden lg:block xl:block"> Phase Five.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"> <span className="hidden lg:block xl:block"> Phase Six.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"> <span className="hidden lg:block xl:block"> Phase Seven.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"> <span className="hidden lg:block xl:block"> Phase Eight.</span> </li>
            <li  className="lg:pt-7 xl:pt-7 text-gray-500 px-3"> <span className="hidden lg:block xl:block">  Phase Nine.</span> </li>
        </ul>
        </div>
      </div>
      <div className="pl-16 lg:pl-9 xl:pl-9 lg:left-2/3 xl:left-2/3 relative lg:block xl:block justify-end">
        <div className="flex justify-end"> <img className="w-72 lg:w-96 xl:w-96" src="roadmap2.png" alt="" /> <div> </div></div>
      </div>
    </div>
  );
}
