import React from "react";


export default function Hero() {
  const handleDownload = () => {
    const url = '/Files/VolCoin.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'VolCoin.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="volreg mt-12 lg:mt-28 2xl:mt-48 xxl:mt-60 mb-10 ml-4 lg:ml-16 ">
        {/* <div>
          <img className="hero1" src="/Photos/hero1.png" alt="" />
          <img className="hero2" src="/Photos/hero2.png" alt="" />
        </div> */}
        <div className=" text-white pr-4 leading-none lg:pr-56 xxl:pr-96 text-6xl lg:text-9xl 2xl:text-11xl ">
          A <span className="text-border-white">coin</span>  built on the <span className="text-border-white">Vol</span>itility of Bitcoin
        </div>
        <div className="flex flex-col lg:flex-row text-gray-300 mt-10 w-full lg:w-3/5 2xl:w-1/2 pr-10 lg:pr-0 2xl:pr-20 2xl:text-xl">
  {Array.from({ length: 2 }, (_, index) => {
    if (index === 0 || window.innerWidth > 768) {
      return (
        <span
          key={index}
          className="pr-9 lg:pr-20 text-justify text-sm"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
          eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem.
        </span>
      );
    }
    return null;
  })}
</div>
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row">
            <button className="mr-28 lg:mr-0 text-gray-900 btn-style
 font-medium rounded-lg text-sm px-5 py-2 text-center 2xl:text-2xl">
              PURCHASE VOLCOIN →
            </button>
            <button onClick={handleDownload} type="button" className="mr-28 lg:mr-0 text-gray-900 btn-style font-medium rounded-lg text-sm px-5 py-2 text-center ml-0 lg:ml-10 mt-2 lg:mt-0 2xl:text-2xl">DOWNLOAD</button>
          </div>
          <div className="text-style
  pt-1 pr-10 2xl:text-2xl">
            <span> Early adopters get 20% discount on all coins. </span>
          </div>
        </div>
      </div>
    </>
  );
}
