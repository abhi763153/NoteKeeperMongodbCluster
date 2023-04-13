import React, { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

const Home = () => {

    const [active, setActive] = useState(true)

    const handlyCreateNote = (event) => {
        setActive(!active);

        if (event.target.name === "CreateNote") {
            document.getElementById("create-btn").style.display = "none";
            document.querySelector("#horizontal-line").style.marginBottom = "4rem";
        }
        else if (event.target.name === "ShowNotes") {
            document.getElementById("create-btn").style.display = "block";
            document.querySelector("#horizontal-line").style.marginBottom = "1rem";
        }

    }

    return (
        <>
            <Header active={active} showNote={handlyCreateNote} />
            <Main active={active} showNote={handlyCreateNote} />
            <Footer />
        </>

    )
}

export default Home