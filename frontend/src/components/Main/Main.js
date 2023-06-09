import React, { useState } from 'react'
import Accordion from '../Accordion/Accordion'
import Createnote from '../Createnote/Createnote'


const Main = (props) => {

    return (
        <div className='container main'>
            <h1>Welcome Again! Abhishek Kamti</h1>
            <hr id='horizontal-line' />

            <button type="button" name="CreateNote" class="btn btn-outline-info px-3 py-2" id='create-btn' onClick={props.showNote}>Create Note</button>


            {props.active ? <Accordion /> : <Createnote />}





        </div>
    )
}

export default Main