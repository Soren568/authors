import axios from 'axios';
import React from 'react'

export default props => {
    const { authorId, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                console.info("User deleted:" + res)
                successCallback();
            ;})
    }
    return (
        <button onClick={deleteAuthor} className="font-bold uppercase text-xs">
            Delete
        </button>
    )
}