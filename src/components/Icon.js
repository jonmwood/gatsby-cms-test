import React from 'react'

const Icon = (props) => {
    const RenderedIcon = props.icon

    console.log(RenderedIcon)

    return (
        <div>
            <RenderedIcon className="icon" />
        </div>
    )
}

export default Icon 
