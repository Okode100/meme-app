import React from 'react';
import memeData from './Data'; // Corrected import path

export default function Form(props) {
    //const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1bij.jpg"); // State to store the image URL
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memeData);
    // State to store the image URL


    function getMemeData() {
        const dataArray =allMemeImages.data.memes; // Correctly accessing the memes array
        const randomNumber = Math.floor(Math.random() * dataArray.length); // Random index
        const url = (dataArray[randomNumber].url);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        })); // Update the memeImage state with the URL
    }

    return (
        <main>
            <div className='form'>
                <input type='text' className='form--input' placeholder='Top text' />
                <input type='text' className='form--input' placeholder='Bottom text' />
                <button className='form--button' onClick={getMemeData}>
                    Get a new meme image 🖼
                </button>
                {/* Use the memeImage state in the src attribute */}
                {meme.randomImage && <img src={meme.randomImage} alt="Random Meme" className='form--image' />}
            </div>
        </main>
    );
}
