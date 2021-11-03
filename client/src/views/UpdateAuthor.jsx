import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import DeleteButton from '../components/DeleteButton';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const {domChange, setDomChange} = props
    const [errors, setErrors] = useState([])
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                console.log(res.data.author)
                setAuthor(res.data.author)
                setLoaded(true);
            })
    }, []);
    
    const updateAuthor =(e, author )=> {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, author)
        .then(res => console.log(res))
        .catch(err => {
            console.error("THIS IS AN ERROR", err)
            const errorResponse = err.response.data.error.errors; 
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) { 
                console.log(errorResponse[key].message)
                errorArr.push(errorResponse[key].message)
            }
            setLoaded(true);
            setErrors(errorArr)
        });
    }

    return ( 
        loaded && (
            <>
                <AuthorForm onSubmitProp={updateAuthor} errors ={errors} initName={author.name} initQuote={author.quote} initGenre={author.genre} btnText="Update info."/>
                {errors.map((err, i) => 
                    <p key={i}>{err}</p>
                )}
                <span className="px-4 py-2 bg-gray-400 text-white hover:text-gray-700 font-semibold rounded-lg text-xs">
                    <DeleteButton authorId={author._id} successCallback={() => history.push('/')} />
                </span>
            </>
        )
    )
}


