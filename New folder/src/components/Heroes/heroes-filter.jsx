import {useRef} from "react";


export default function HeroesFilter({setAttr, attr, setComplexity, comp, searchHero}){

    const handleSearch = (e) => {
        searchHero(e.target.value)
        setAttr(0)
        setComplexity(0)
    }

    const handleClick = (value) => {

        if (attr === value) {
            setAttr(0)
        } else {
            setAttr(value)
        }
    }

    const handleComplexity = (value) => {
        if (comp === value) {
            setComplexity(0)
        } else {
            setComplexity(value)
        }
    }

    return (
        <div className='heroes-filter'>
            <p style={{color: 'white'}}>FILTER HEROES</p>
            <div className='heroes-filter-attr'>
                <p>Attribute</p>
                <img
                    onClick={() => handleClick(1)}
                    style={attr === 1  ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"
                    alt=""/>
                <img
                    onClick={() => handleClick(2)}
                    style={attr === 2 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
                    alt=""/>
                <img
                    onClick={() => handleClick(3)}
                    style={attr === 3 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"
                    alt=""/>
                <img
                    onClick={() => handleClick(4)}
                    style={attr === 4 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png"
                    alt=""/>
            </div>
            <div className='heroes-filter-comp'>
                <p>Complexity</p>
                <img
                    onClick={() => handleComplexity(1)}
                    style={comp === 1 || comp === 2 || comp === 3 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    alt=""/>
                <img
                    onClick={() => handleComplexity(2)}
                    style={comp === 2 || comp === 3 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    alt=""/>
                <img
                    onClick={() => handleComplexity(3)}
                    style={comp === 3 ? {filter: 'brightness(1) saturate(0.5)'} : {filter: 'brightness(0.5) saturate(0)'}}
                    src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png"
                    alt=""/>
            </div>
            <div className='heroes-filter-search'>
                <i className='bx bx-search'></i>
                <input onChange={handleSearch} type="text"/>
            </div>
        </div>
    )
}