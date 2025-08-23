
import { aboutData } from '../data/contentData';
import { aboutStyle } from '../data/styleData';
import { ButtonsSlot } from './../common/ButtonsSlot';

const About = () => {
    return (
        <div className={aboutStyle.container}>
            <ButtonsSlot logo={aboutData.span1} namee={aboutData.span2} button={aboutData.button} />
            <p className={aboutStyle.para}>{aboutData.para}</p>
            <button className={aboutStyle.button}>{aboutData.button}</button>
        </div>

    )
}

export default About