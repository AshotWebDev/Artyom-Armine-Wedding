import React from "react";

function Section({ icon, time, title, locationName, address, locationLink, img }) {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center !py-10">
      <div className="w-[80px] h-[80px]">
        <img src={icon} alt="rings" />
      </div>
      <h3 className="font-bold md:text-4xl text-3xl text-gray-700">{time}</h3>
      <div className="flex flex-col gap-1 items-center justify-center max-sm:max-w-[250px]">
        <h4 className="text-xl text-gray-700 nato-sans-regular font-bold text-center">
          {title}
        </h4>
        <span className="text-gray-700 font-semibold text-md text-center">{locationName}</span>
      </div>
      <div className="w-full h-[430px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center max-sm:max-w-[200px]">
        <span className="text-gray-700 font-semibold text-md text-center">{address}</span>
        <a href={locationLink} target="_blanc" className="bg-black hover:bg-zinc-900 text-md text-white !py-2 !px-8 rounded-full">Ինչպես Հասնել</a>
      </div>
    </div>
  );
}

export default Section;
