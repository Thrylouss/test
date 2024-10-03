import {useParams} from "react-router-dom";
import {GetCurrentHero} from "../../features/GetCurrentHero/GetCurrentHero.jsx";
import './current-hero.css'
import HeroVideo from "./Hero_video.jsx";
import HeroAttr from "./Hero_attr.jsx";
import HeroType from "./Hero_type.jsx";
import talents from '../../../public/talents.svg'
import {GetCurrentHeroSkills} from "../../features/GetCurrentHeroSkills/GetCurrentHeroSkills.jsx";

export default function CurrentHero() {
    const {name} = useParams()
    const hero = GetCurrentHero(name).heroes
    const skills = GetCurrentHeroSkills({id: hero.id}).skills
    console.log(skills)

    return (
        <div className='current-hero'>
            <HeroVideo hero={hero}/>

            <div className='hero-info'>
                <HeroAttr id={hero.main_attribute}/>

                <HeroType hero={hero}/>
            </div>

            <div className='hero-abilities'>
                <div className='hero-talents'>
                    <img src={talents} alt="talents"/>
                </div>
                <div className='hero-skills'>
                    
                </div>
                <div></div>
            </div>
        </div>
    )
}