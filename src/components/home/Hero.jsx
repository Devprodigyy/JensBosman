import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { home } from './../data/contentData';
import { homeStyle } from "../data/styleData";

const Hero = () => {

    const heading1Ref = useRef();
    const heading2Ref = useRef();

    const heading2videoREf = useRef();
    const heading2heroREf = useRef();

    useGSAP(() => {
        gsap.from(
            heading1Ref.current,
            {
                x: 200,
                duration: 1,
            },
            "a"
        );
        gsap.from(
            heading2Ref.current,
            {
                x: -200,
                duration: 1,
            },
            "a"
        );
        gsap.to(
            heading2videoREf.current,
            {
                scale: 10,
                delay: 2,
                duration: 3,
            },
            "b"
        );
        gsap.from(
            heading2heroREf.current,
            {
                opacity: 0,
                delay: 2,
                duration: 3,
                y: "10vh",
            },
            "b"
        );
    });


    return (
        <div className={homeStyle.container}>
            <h1 ref={heading1Ref} className={homeStyle.heading}>
                James
                <video className="h-full w-full object-cover rounded-3xl" loop autoPlay muted src={home.Heading1_Video1src} ></video>
                <video className="h-full w-full rounded-3xl" loop autoPlay muted src={home.Heading1_Video2src} ></video>
                Blooum
            </h1>
            <h1 ref={heading2Ref} className={homeStyle.heading}>
                videographer{" "}
                <video ref={heading2videoREf} className="relative h-full w-full rounded-3xl object-cover" loop autoPlay muted src={home.Heading1_Video2src} ></video>
                Photographer
            </h1>
            <h1 ref={heading2heroREf} className="absolute bottom-1 text-[12vw] text-white" >
                JENS BOSMAN
            </h1>
        </div>

    )
}

export default Hero