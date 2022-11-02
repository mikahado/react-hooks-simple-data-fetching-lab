import React, { useState, useEffect } from "react";

function App() {

    const [randoDog, setRandoDog] = useState(null)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(imageDog => setRandoDog(imageDog.message))
    }, []);

    if (!randoDog) return <h1> . . . Loading . . . </h1>
    
    return (
        <img src={randoDog} alt="A Random Dog"/>
    )  
}

export default App