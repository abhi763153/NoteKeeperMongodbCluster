import React from 'react'

const Note = (props) => {
    return (
        <div class="accordion-item my-2 w-75 mx-auto">
            <h2 class="accordion-header" id={`heading${props.id}`}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.id}`} aria-expanded="true" aria-controls={`collapse${props.id}`}>
                    {props.title}
                </button>
            </h2>
            <div id={`collapse${props.id}`} class="accordion-collapse collapse show" aria-labelledby={`heading${props.id}`} data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {props.des}
                </div>
            </div>
        </div>
    )
}

export default Note