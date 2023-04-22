import React from 'react'

function Alerts(props) {
    return (

        <>
            <div class={`alert alert-${props.color}`} role="alert">
                {/* A simple primary alert—check it out! */}
                {props.message}
            </div>
        </>
    )
}

export default Alerts