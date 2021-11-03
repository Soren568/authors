import React, {useState, useEffect} from 'react'
import AuthorForm from '../components/AuthorForm';
import axios from 'axios'
import AllAuthorsTable from '../components/AllAuthorsTable';
import { useHistory } from 'react-router';

const Home = props => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();
    const {domChange, setDomChange} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/')
            .then(res => {
                console.table(res.data.authors)
                setAuthors(res.data.authors);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [domChange]);

    return (
        <div>
            <h1 className="text-4xl font-extrabold text-green-700 mb-5">Favorite authors: </h1>
            <AllAuthorsTable authors={authors} setDomChange={setDomChange} domChange={domChange}/>
            <button onClick={(e) => history.push('/authors/new')} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800 hover:text-green-300 mt-3 items-end focus:ring focus:ring-green-200">Add an Author</button>
        </div>
    )
}

export default Home
