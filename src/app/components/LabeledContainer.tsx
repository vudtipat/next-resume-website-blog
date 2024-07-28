import React from 'react'

type Props = {
    cardTitle?: string;
    children?: React.ReactNode
}

const LabeledContainer = ({cardTitle, children}: Props) => {
  return (
    <div className="flex p-5 rounded-md relative">
      <div className="bg-white p-5 rounded-md relative shadow-custom w-[100%]">
        <span className="bg-[#A91D3A] text-white absolute top-[-10px] left-[-10px] py-[5px] px-[10px] rounded-[3px] text-base font-bold">{cardTitle}</span>
        {children}
      </div>
    </div>
  )
}

export default LabeledContainer