import React from 'react'
import { stillblocksStyle, stillStyle } from '../data/styleData'
import { blockDataDesktop, blockDataMobile, stillsData } from '../data/contentData'
import { ButtonsSlot } from './../common/ButtonsSlot';

const Still = () => {
    return (
        <div className="flex flex-col gap-3 w-full px-[5vw] overflow-x-scroll overflow-hidden  scrollbar_hide py-5 bg-black text-white">
            <ButtonsSlot logo={stillsData.span1} namee={stillsData.span2} button={stillsData.button} />
            <div className={stillblocksStyle.stillblockContainer}>
                <div className={stillblocksStyle.stillblock1}>
                    {/* mobile_view */}
                    <img className=" object-center border-white w-[50%] border-[2px] md:hidden object-cover h-full rounded-2xl" src={blockDataMobile.block1_mobileImg1} alt="" />
                    <img className=" object-center border-white w-[50%] border-[2px] md:hidden object-cover h-full rounded-2xl" src={blockDataMobile.block1_mobileImg2} alt="" />

                    {/* desktop_view */}
                    <img className=" object-center border-white w-[50%] border-[2px] hidden md:flex object-cover h-full rounded-2xl" src={blockDataDesktop.block1_desktopImg1} alt="" />
                    <img className=" object-center border-white w-[50%] border-[2px] hidden md:flex object-cover h-full rounded-2xl" src={blockDataDesktop.block1_desktopImg2} alt="" />
                </div>
                <div className={stillblocksStyle.stillblock2}>
                    <h1 className="text-[10vh] md:text-[25vh] uppercase whitespace-nowrap">
                        Frame
                    </h1>
                    
                    {/* mobile_view */}
                    <img className="object-center border-white border-[2px] md:hidden h-full w-full object-cover rounded-2xl" src={blockDataMobile.block2_mobileImg1} alt=""/>
                    {/* desktop_view */}
                    <img className="object-center border-white border-[2px] hidden md:flex h-full w-full object-cover rounded-2xl" src={blockDataDesktop.block2_desktopImg1} alt="" />
                </div>
                <div className={stillblocksStyle.stillblock3}>
                    <h1 className="text-[10vh] md:text-[25vh] uppercase whitespace-nowrap">
                        By Frame
                    </h1>

                    {/* mobile_view */}
                    <img className=" object-center border-white border-[2px] md:hidden h-full object-cover rounded-2xl" src={blockDataMobile.block3_mobileImg1} alt="" />
                    {/* desktop_view */}
                    <img className=" object-center border-white border-[2px] hidden md:flex h-full object-cover rounded-2xl" src={blockDataDesktop.block3_desktopImg1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Still