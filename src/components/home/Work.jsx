import React from 'react'
import { workStyle } from '../data/styleData'
import { workData } from '../data/contentData'
import WorkDisplay from './../common/WorkDisplay';
import { ButtonsSlot } from './../common/ButtonsSlot';

const Work = () => {
  return (
    <>
      <div className={workStyle.container}>
        <ButtonsSlot logo={workData.span1} namee={workData.span2} button={workData.button} />
        <h1
          className="text-[22vw] md:text-[28vh] flex whitespace-nowrap gap-3 text-transparent stroke-white stroke-[1px]"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-white">Work </span>
          <span>Work</span>
          <span>Work</span>
        </h1>
      </div>

      <div className="flex gap-3 w-full px-[5vw] overflow-x-scroll overflow-hidden scrollbar_hide py-5 bg-black">
        <WorkDisplay videoSrc="/videos/video2.mp4" marqueeText="NUMBIK. NUMBIK. NUMBIK. NUMBIK. Bimikk." title="NUMBIK" subtitle="AW36" />
        <WorkDisplay videoSrc="/videos/video4.mp4" marqueeText="AGNONA. AGNONA. AGNONA. AGNONA. AGNONA. AGNONA." title="AGNONA" subtitle="FW23" />
        <WorkDisplay videoSrc="/videos/video5.mp4" marqueeText="VOGUE X BOSS. VOGUE X BOSS. VOGUE X BOSS. VOGUE X BOSS." title="VOGUE X BOSS" subtitle="VOGUE X BOSS" />
        <WorkDisplay videoSrc="/videos/video6.mp4" marqueeText="DENHAM. DENHAM. DENHAM. DENHAM. DENHAM." title="DENHAM" subtitle="COOLMAX" />
      </div>
    </>
  )
}

export default Work