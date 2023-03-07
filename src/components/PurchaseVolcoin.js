import React from "react";


export default function PurchaseVolcoin() {
  const handleDownload = () => {
    const url = '/Files/VolCoin-File.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'VolCoin.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className=" volmed mt-12 lg:mt-16 xl:mt-16 pb-10 pl-10 lg:pl-16 xl:pl-16">
        <div className=" text-white pr-12 text-5xl md:text-6xl lg:pr-40 lg:text-7xl xl:pr-56 xl:text-9xl">
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
          <div className="flex flex-col lg:flex-row xl:flex-row">
            <button className="mr-28 lg:mr-0 xl:mr-0 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-md shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center">
              PURCHASE VOLCOIN →
            </button>
            <button onClick={handleDownload} type="button" class="mr-28 lg:mr-0 xl:mr-0 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-md shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center ml-0 lg:ml-10 xl:ml-10 mt-2 lg:mt-0 xl:mt-0 ">DOWNLOAD</button>
          </div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-lime-600  pt-1 pr-10 lg:pr-10 xl:pr-10">
            <span> Early adopters get 20% discount on all coins. </span>
          </div>
        </div>
      </div>
    </>
  );
}
