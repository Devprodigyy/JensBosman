import React from 'react'
import { clientData } from '../data/contentData'
import { ButtonsSlot } from './../common/ButtonsSlot';
import ClientDisplay from './../common/ClientDisplay';

const Client = () => {
  return (
    <div className="flex flex-col gap-3 w-full px-[5vw] overflow-x-scroll overflow-hidden scrollbar_hide py-5 text-white">
       <ButtonsSlot logo={clientData.span1} namee={clientData.span2} button={clientData.button} />         
      
      <h1
        className="text-[22vw] w-full overflow-hidden md:text-[28vh] flex whitespace-nowrap gap-3 text-transparent stroke-white stroke-[1px]"
        style={{ WebkitTextStroke: "1px white" }}
      >
        <span className="text-white">CLIENT </span>
        <span>CLIENT</span>
        <span>CLIENT</span>
      </h1>
      <ClientDisplay />
    </div>
  )
}

export default Client