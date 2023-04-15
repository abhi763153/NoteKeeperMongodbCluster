import React, { useEffect, useState } from 'react'
import Note from '../Note/Note'
// import notes from '../../data'
import './Accordion.css'
import axios from 'axios';


const Accordion = () => {

    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const { data } = await axios.get("notes");
        setNotes(data);
        console.log(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])

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