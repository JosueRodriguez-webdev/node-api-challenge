import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {ProjectCard} from './ProjectCard'

export default function ProjectList() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/project/')
        .then(res => {
            setData(res.data)
        })
    }, [])
    return (
        <div>
            {data.map(project => {
                return <ProjectCard project={project}/>
            })}
            
        </div>
    )
}
