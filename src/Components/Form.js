import React from 'react';
import memeData from './Data'; // Corrected import path

export default function Form(props) {
    const [memeImage, setMemeImage] = React.useState(''); // State to store the image URL

    function getMemeData() {
        const dataArray = memeData.data.memes; // Correctly accessing the memes array
        const randomNumber = Math.floor(Math.random() * dataArray.length); // Random index
        setMemeImage(dataArray[randomNumber].url); // Update the memeImage state with the URL
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
                {memeImage && <img src={memeImage} alt="Random Meme" className='form--image' />}
            </div>
        </main>
    );
}
