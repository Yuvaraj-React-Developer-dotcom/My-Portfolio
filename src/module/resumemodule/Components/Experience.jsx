import React from 'react'

const Experience = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-2 flex flex-col items-start">
                <div className="flex flex-col w-max gap-y-1 items-center">
                    <div className="w-max h-max">
                        <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                            <div className="cursor-pointer p-1 md:p-2 w-max"><span>2023 - Present</span></div>
                        </div>
                    </div>
                    <div className="border-4 rounded-[50%] border-[#65B741]"></div>
                    <div className="w-full md:w-max">
                        <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                            <div className="cursor-pointer p-1 md:p-2 flex flex-col gap-y-0.5"><span>Frontend
                                Developer</span><span>Experience - 1.4 years</span><span>Zealeye.AI Tech Solutions -
                                    Chennai</span><span>IT Industry</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col items-end">
                <div className="flex flex-col w-max gap-y-1 items-center">
                    <div className="w-max h-max">
                        <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                            <div className="cursor-pointer p-1 md:p-2 w-max"><span>10 July - 20 Oct 2021</span></div>
                        </div>
                    </div>
                    <div className="border-4 rounded-[50%] border-[#65B741]"></div>
                    <div className="w-full md:w-max">
                        <div className="border-2 rounded-[10px] border-[#65B741] bg-[#092635] h-full">
                            <div className="cursor-pointer p-1 md:p-2 flex flex-col gap-y-0.5"><span>Fullstack Web Developer
                            </span><span>Period - 100 Days Training and Internship</span><span>Devtown Company</span><span>Research
                                and Education-based firm </span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
