import React from 'react'

function Tick({date}) {
    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    )
}

export default Tick
