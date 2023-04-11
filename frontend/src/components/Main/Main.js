import React from 'react'
import Note from '../Note/Note';
import notes from '../../data';


const Main = () => {
    return (
        <div className='container main'>
            <h1>Welcome Again! Abhishek Kamti</h1>
            <hr />

            <button type="button" class="btn btn-outline-info px-3 py-2">Create Note</button>

            <div class="accordion my-3" id="accordionExample">

                {
                    notes.map((note) => {
                        return <Note id={note.id} title={note.title} des={note.des} />;
                    })
                }




            </div>
        </div>
    )
}

export default Main