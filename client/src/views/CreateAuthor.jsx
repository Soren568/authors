import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import DeleteButton from '../components/DeleteButton';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const {successCallback, domChange, setDomChange} = props;
    const { id } = useParams();
    const [errors, setErrors] = useState([])
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    const createAuthor = (e, author) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', author)
        // HISTORY PUSH NO MATTER WHAT 
            .then(res => {console.log("CREATION SUCCESS", res); history.push('/')})
            .catch(err => {
                console.error(err.response.data.error.errors)
                const errorResponse = err.response.data.error.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    console.log("CREATE AUTHOR ERROR", errorResponse[key].message)
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
                setLoaded(true);
            });
    }

    return (
        (
            <>
                <AuthorForm onSubmitProp={createAuthor} initName="" initQuote="" initGenre="" btnText="Add Author" successCallback={e=> setDomChange(!domChange)}/>
                {errors.map((err, i) => 
                    <p key={i}>{err}</p>
                )}
                <button onClick={(e) => {history.push('/'); console.log("cancel clicked")}} className="px-4 py-2 bg-gray-400 text-white hover:text-gray-700 font-semibold rounded-lg mt-8 text-xs">Cancel</button>
            </>
        )
    )
}


