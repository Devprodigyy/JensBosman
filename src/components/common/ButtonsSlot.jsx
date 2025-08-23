
import { stillStyle } from '../data/styleData'

export const ButtonsSlot = ({logo,namee,button}) => {
  return (
    <div className={stillStyle.wrapercontainer1}>
      <div className="flex gap-2">
        {" "}
        <span className="hidden rounded-full border-2 sm:flex items-center justify-center h-[3rem] w-[3rem]">
          {logo}
        </span>
        <span className=" rounded-4xl text-[0.8rem] sm:text-[1rem] h-[3rem] whitespace-nowrap px-[2rem] border-2 flex items-center justify-center">
          {namee}
        </span>
      </div>
      <button className="rounded-4xl whitespace-nowrap text-[0.8rem] sm:text-[1rem]  h-[3rem] px-[2rem] border-2 flex items-center justify-center">
        {button}
      </button>
    </div>
  )
}
