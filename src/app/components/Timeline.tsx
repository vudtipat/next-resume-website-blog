// src/components/Timeline.tsx

import React from "react";
import TimelineItem from "./TimelineItem";

type Props = {
    timelineData: TimelineData[],
}
  
const Timeline = ({timelineData}: Props) => {

  return (
    <div className="flex flex-col relative pb-[20px] px-4 my-0 mx-auto w-[100%]">
      {timelineData.map((data:TimelineData ) => (
        <TimelineItem key={data.id} timelineData={data} />
      )).reverse()}
    </div>
  );
};

export default Timeline;
