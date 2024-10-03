import {useEffect, useState} from "react";
import axios from "axios";


export const GetCurrentHeroSkills = ({id}) =>{
    const [skills, setSkills] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(`http://localhost:8000/api/v1/skills`)
                    .then(res => {
                        setSkills(res.data.results.filter(skill => skill.hero.id === id))
                    })
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()

    }, [id])

    return {skills}
}