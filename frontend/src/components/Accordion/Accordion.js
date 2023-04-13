import React from 'react'
import Note from '../Note/Note'
import notes from '../../data'
import './Accordion.css'


const Accordion = () => {
    return (
        <div class="accordion my-3" id="accordionExample">
            {
                notes.map((note) => {
                    return <Note id={note.id} title={note.title} des={note.des} />;
                })
            }
        </div>
    )
}

export default Accordion