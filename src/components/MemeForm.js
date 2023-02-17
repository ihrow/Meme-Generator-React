import React from 'react'
import memesData from '../memesData'
import { useState } from 'react'

export default function MemeForm() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: '',
    })

    console.log(meme)

    const onClick = (e) => {
        e.preventDefault()
        const memes = memesData.data.memes
        const randomMeme = memes[Math.floor(Math.random() * memes.length)]
        const url = randomMeme.url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: url
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    const memeImage = meme.randomImg.length !== 0 ? <img className='meme-image' src={meme.randomImg} alt="meme" /> : null

    return (
        <div className='form-container'>
            <form className="meme-form">
                <input name="topText" value={meme.topText} className='meme-form-input' type="text" placeholder="Top Text" onChange={handleChange} />
                <input name="bottomText" value={meme.bottomText} className='meme-form-input' type="text" placeholder="Bottom Text" onChange={handleChange} />
                <button onClick={onClick} className='meme-form-button'>Get a new meme image!🖼️</button>
            </form>
            <div className='meme-image-container'>
                <h2 className='meme-text meme-top-text'>{meme.topText}</h2>
                <h2 className='meme-text meme-bottom-text'>{meme.bottomText}</h2>
                {memeImage}
            </div>
        </div>
    )
}
