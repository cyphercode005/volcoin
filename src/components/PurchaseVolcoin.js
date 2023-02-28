import React from "react";


export default function PurchaseVolcoin() {
  return (
    <>
    <div className="mt-12 lg:mt-16 xl:mt-16 pb-10 pl-10 lg:pl-16 xl:pl-16">
      <div className="text-white pr-12 text-5xl md:text-6xl lg:pr-40 lg:text-7xl xl:pr-56 xl:text-9xl">
        A coin built on the Volitility of Bitcoin
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row text-gray-300 mt-10 w-full lg:w-3/5 xl:w-3/5 pr-10 lg:pr-0 xl:pr-0">
        <span className="pr-0 lg:pr-20 xl:pr-20 text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </span>
        <span className="mt-7 lg:mt-0 xl:mt-0 text-justify">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </span>
      </div>
      <div className="mt-10">
        <div>
          <button className="para-scroll rounded text-black px-2 lg:px-4 lg:px-4 py-1 lg:py-2 xl:py-1">
            PURCHASE VOLCOIN →
          </button>
        </div>
        <div className="text-yellow-200 pt-1 pr-10 lg:pr-10 xl:pr-10">
          <span> Early adopters get 20% discount on all coins. </span>
        </div>
      </div>
      </div>
    </>
  );
}
