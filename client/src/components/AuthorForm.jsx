import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from 'react-router';

const AuthorForm = (props) => {
    const {initName, initGenre, initQuote, onSubmitProp, btnText, successCallback} = props;
    const [name, setName] = useState(initName)
    const [quote, setQuote] = useState(initQuote)
    const [genre, setGenre] = useState(initGenre)
    const history = useHistory();

    return (
        <div>
            <form onSubmit={e => {onSubmitProp(e, {name, genre, quote});}} className="bg-gray-100 w-1/2 p-4 rounded-2xl mx-auto mt-9">
                <div className=" flex justify-between mb-5">
                    <h1 className="font-extrabold text-2xl text-green-600"> ADD AN AUTHOR</h1>
                    <span onClick={e=> history.push('/')} className="px-4 py-2 bg-gray-400 text-white hover:text-gray-700 font-semibold rounded-lg text-xs">Home</span>
                </div>
                <div className="flex pl-36 items-center mb-7">
                    <label htmlFor="" className="mr-7 font-bold">Author name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="w-1/2 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" placeholder="John Steinbeck"/>
                </div>
                <div className="flex pl-2 items-center mb-7">
                    <label htmlFor="" className="mr-7 font-bold">Your favorite quote from them</label>
                    <textarea onChange={(e) => setQuote(e.target.value)} value={quote} className="w-1/2 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" placeholder="And now that you dont have to be perfect, you can be good."/>
                </div>
                <div className="flex pl-52 items-center mb-7">
                    <label htmlFor="" className="mr-7 font-bold">Genre</label>
                    <input onChange={(e) => setGenre(e.target.value)} value={genre} type="text" className="w-1/2 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500" placeholder="Fiction"/>
                </div>
                <div>
                    <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800 hover:text-green-300 mt-3 items-end focus:ring focus:ring-green-200 font-bold" >{btnText}</button>
                </div>
            </form>
        </div>
    )
}

export default AuthorForm
