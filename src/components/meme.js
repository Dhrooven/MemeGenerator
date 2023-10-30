import React from "react";

import "../index.css";

export default function Meme(){

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        async function getMemes() {
                const response = await fetch("https://api.imgflip.com/get_memes");
                const dbs = await response.json();
                setAllMemes(dbs.data.memes);
            }
            getMemes();
    }, [])


    const [meme, setMeme] = React.useState({
        TopText: "",
        BottomText: "",
        memeurl: "http://i.imgflip.com/1bij.jpg"
    })

    function getMeme (){
        const randomNumber = Math.floor(Math.random() * 100);
        const url = allMemes[randomNumber].url;
        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                memeurl: url
            };
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top"
                    name = "TopText"
                    value={meme.TopText}
                    onChange={handleChange} />

                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom" 
                    name = "BottomText" 
                    value={meme.BottomText}
                    onChange={handleChange} />

                <button onClick={getMeme} className="form--button">
                    Get a new Meme Image
                </button>
            </div>
            <div className="meme">
                <img className="image" src = {meme.memeurl} alt="meme" />
                <h2 className="meme--text top">{meme.TopText}</h2>
                <h2 className="meme--text bottom">{meme.BottomText}</h2>
            </div>
        </main>
    )
}