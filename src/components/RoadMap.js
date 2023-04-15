import React from "react";
// import { useState } from 'react';
import { ReactComponent as IconOne } from './UnionOne.svg';
import { ReactComponent as IconTwo } from './UnionTwo.svg';
import { ReactComponent as IconThree } from './UnionThree.svg';

export default function RoadMap() {

const [active, setActive] = React.useState(1);
// const [hovered, setHovered] = useState(false);
// const [hoveredIndex, setHoveredIndex] = useState(null);
// const handleHover = (index) => {
// setHoveredIndex(index);
// };
const handleOnClick = (ev, id) => {
  setActive(id + 1)
}

const content = {
"one": <>
<span className="text-md text-style"> Q2 2022 </span>
<h1 className="pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
Whitepaper and static website
</h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Crystalise the idea and the mechanics of VolCoin
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Use a static website to showcase the idea </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Market feasibility research </p>
</div>
</section>

</>,
"two": <>
<span className="text-md text-style"> Q3 2022 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
Form the team </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Find like minded and skilled people who can work together to bring the idea home </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Re-make the website to make it more professional and appealing </p>
</div>
</section>

</>,
"three": <>
<span className="text-md text-style"> Q1 2023 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-3/5 2xl:w-1/2">
Create GVolCoins and Marketing
</h1>
<section className="mt-4 lg:mt-7">
<div className="flex pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
The governance tokens will be used to attract initial
investment from investors looking to enter into the project
early at a discount, whitelist distribution.
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Start marketing organically using Twitter, Discord and Telegram
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Work on giveaways to attract early adopters
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Legal preparation for regulation compliance
</p>
</div>
</section>
</>,
"four": <>
<span className="text-md text-style"> Q1 2023 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
VolCoin Tokens </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Create VolCoin tokens that use the Deribit Implied volatility index as they have the largest market share of Bitcoin option contracts
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Brand Identity </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Digital content collaborations </p>
</div>
</section>
</>,
"five": <>
<span className="text-md text-style"> Q2 2023 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-2/3 xl:w-2/3">
Gather Feedback and Apply Changes </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Amend the underlying index so that it uses a weighted price feed from different exchanges
</p>
</div>
</section>
</>,
"six": <>
<span className="text-md text-style"> Q2 2023 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
Launch VolCoin </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Launch the VolCoin token so that it can be traded on the native web3 portal
</p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Community expansion </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Mass marketing </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Team growth </p>
</div>
<div className="flex mt-3 text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Web3 Platform optimisation </p>
</div>
</section>
</>,
"seven": <>
<span className="text-md text-style"> Q3 2024 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
Staking </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Fix staking of VolCoin and GVolCoin so fees can be fed back to coin holders, via an airdrop. Staking returns to be defined according to number of days coins have been staked.
</p>
</div>
</section>
</>,
"eight": <>
<span className="text-md text-style"> Q4 2024 </span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-1/2">
Onward </h1>
<section className="mt-4 lg:mt-7">
<div className="flex text-justify pr-4 lg:pr-16">
<img className="w-3 2xl:w-5 h-3 2xl:h-5 mt-1 2xl:mt-2 mr-2" src="/Photos/tickRoadMap.png" alt="" />
<p className="text-xs lg:text-sm 2xl:text-xl">
Allow the token to be traded with other central exchanges and DEX’s
</p>
</div>
</section>
</>,
"nine": <>
<span className="text-md text-style"></span>
<h1 className=" pt-3 text-xl lg:text-3xl 2xl:text-4xl lg:w-4/5 xl:w-4/5">
Work on the next Volatility Coin or Commodity to be Tokenised </h1>
</>
}



const getContent = (number) => {
switch (number) {
case 1:
return content["one"]
case 2:
return content["two"]
case 3:
return content["three"]
case 4:
return content["four"]
case 5:
return content["five"]
case 6:
return content["six"]
case 7:
return content["seven"]
case 8:
return content["eight"]
case 9:
return content["nine"]
default:
return null
}
}

return (
<div className="relative volmed ml-4 lg:ml-16 xl:ml-16 text-white flex justify-between">
<div className="pt-0 lg:mt-0 xl:mt-4 w-3/4 lg:w-4/5 xl:w-4/5">
<span className=" leading-none text-5xl lg:text-9xl xl:text-9xl 2xl:text-9xl xxl:text-10xl "> Our Roadmap </span>
<p className="pl-3 pt-6 lg:pt-10 xl:pt-10 2xl:pt-10 xxl:pt-10 text-md lg:text-xl xl:text-xl 2xl:text-2xl xxl:text-2xl lg:w-3/5 xl:w-3/5">
With volatility a constant threat to any crypto currency trader, we
are offering the first ever coin which will allow you to hedge against
the unpredictable swings in the market.
</p>
<div className="flex flex-col-reverse lg:flex-row xl:flex-row" >
<section className="mr-20 lg:mr-0 xl:mr-0 pl-5 lg:pl-12 xl:pl-12 pb-6 mt-8 lg:mt-8 xl:mt-8 w-full lg:w-1/2 ml-5 lg:ml-3 xl:ml-3 border border-gray-300">
<img className="mt-8 lg:mt-8 xl:mt-8 w-12" src="/Photos/roadmap1.png" alt="" />
<div id="content" className=" pt-4 lg:pt-8 xl:pt-8">
{getContent(active)}
</div>
</section>
<ul className="volreg gap-0 pr-0 lg:pr-16 xl:pr-16 2xl:pr-16 xxl:pr-16 mt-8 lg:mt-24 xl:mt-8 pl-0 lg:pl-20 xl:pl-20 ml-0 lg:ml-3 xl:ml-3 w-full lg:w-1/3 xl:w-1/2">
<div className=" w-full relative flex lg:flex-col">
<div className="hidden lg:block h-full absolute candle-line w-0.5 left-2"></div>
{["Phase One.", "Phase Two.", "Phase Three.", "Phase Four.", "Phase Five.", "Phase Six.", "Phase Seven.", "Phase Eight.", "Phase Nine."].map((item, idx) => {
let colorClass = "";
let icon = null;
if (idx === 0 || idx === 1) {
colorClass = "flex text-white";
icon = <IconOne className= "lg:absolute roadMapIcon ml-0 mt-3 lg:mt-0 h-5 lg:h-6"/>;
} else if (idx === 2) {
colorClass = "flex text-style";
icon = <IconTwo className="lg:absolute roadMapIcon h-8 lg:h-6" />;
} else {
colorClass = "flex text-color";
icon = <IconThree className="lg:absolute roadMapIcon ml-0 mt-3 lg:mt-0 h-5 lg:h-6" />;
}
return (
<button className={` ${colorClass} py-3 px-0.5 lg:px-0 xl:px-0 2xl:px-0 xxl:px-0 hover:text-style flex `}  
onClick={(e) => handleOnClick(e, idx)}
//  onMouseEnter={() => handleHover(idx)}
//  onMouseLeave={() => setHoveredIndex(null)}
> 
{icon}
<span className='text-xs lg:text-xl lg:ml-5 px-0 lg:px-5 hidden lg:block'>
{item}
</span>
</button>
);
})}
</div>
</ul>
</div>
</div>
<div className="">
<img className="absolute -top-16 right-0 w-24 lg:w-80 ht-phone lg:ht-desk" src="/Photos/roadmap2.png" alt="" />
</div>
</div>
);
}
