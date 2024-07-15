import React from 'react'

const Education = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 flex gap-x-1 items-center">
                <div className="w-max h-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 w-max"><span>2018 - 2022</span></div>
                    </div>
                </div>
                <div className="border-4 rounded-[50%] border-[#65B741]"></div>
                <div className="w-full md:w-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 flex flex-col gap-y-0.5"><span>Under
                            Graduation</span><span>BE-Computer Science - 75%</span><span>Paavai College -
                                Tamilnadu</span><span>Anna University</span></div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex gap-x-1 justify-end items-center">
                <div className="w-full md:w-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 flex flex-col gap-y-0.5"><span>Higher Secondary School
                            Graduation</span><span> Class XII - 78%</span><span>Government School -
                                Tamilnadu</span><span>State Board</span></div>
                    </div>
                </div>
                <div className="border-4 rounded-[50%] border-[#65B741]"></div>
                <div className="w-max h-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 w-max"><span>2017 - 2018</span></div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex gap-x-1 items-center">
                <div className="w-max h-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 w-max"><span>2015 - 2016</span></div>
                    </div>
                </div>
                <div className="border-4 rounded-[50%] border-[#65B741]"></div>
                <div className="w-full md:w-max">
                    <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                        <div className="cursor-pointer p-1 md:p-2 flex flex-col gap-y-0.5"><span>Secondary School
                            Graduation</span><span> Class X - 91%</span><span>Government School -
                                Tamilnadu</span><span>State Board</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
