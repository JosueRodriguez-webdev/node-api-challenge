import React from 'react'
import styled from 'styled-components'

const Name = styled.p`
border: solid 1px black;
`

const Description = styled.p`

`

export const ProjectCard = ({project}) => {
    const {name, description} = project
    return (
        <div>
            <Name>name: {name}</Name>
    <p>description: {description}</p>
        </div>
    )
}
