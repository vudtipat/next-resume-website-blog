import React from "react";

type Props = {
  timelineData: TimelineData,
}

const TimelineItem = ({ timelineData }: Props) => {

  return (
    <div className="flex p-5 rounded-md relative">
      <div className="bg-white p-5 rounded-md relative shadow-custom w-[100%]">
        <span className="bg-[#A91D3A] text-white py-[5px] px-[10px] rounded-[3px] text-sm font-bold">{timelineData.period}</span>
        <h3 className="font-extrabold text-xl mt-2">{timelineData.company_name}</h3>
        <h4 className="font-bold text-lg">{timelineData.role}</h4>
        <p>{timelineData.description}</p>
        {timelineData.jobResponsibility?.map(data => <li>{data}</li>)}
        <span className="w-5 h-5 bg-[#A91D3A] rounded-[50%] absolute left-[-10px] top-5"/>
      </div>
    </div>
  );
};

export default TimelineItem;
