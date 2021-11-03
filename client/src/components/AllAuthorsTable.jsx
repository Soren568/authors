import React from 'react'
import DeleteButton from './DeleteButton'
import {useHistory} from 'react-router';
const AllAuthorsTable = (props) => {
    const history = useHistory();
    const {setDomChange, domChange} = props;

    return (
        <div className="flex flex-col w-1/4 mx-auto">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 pl-10 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {props.authors.map((author, i) => (
                                    <tr key={i}>
                                        <td className="px-6 whitespace-nowrap">
                                            <div className="text-sm text-gray-900 text-left">{author.name}</div>
                                        </td>
                                        <td className="py-5 whitespace-nowrap text-right text-sm font-medium align-bottom pr-2">
                                                <span onClick={(e) => history.push('/authors/' + author._id + '/edit')} className="text-green-500 bg-transparent border-l border-t border-b border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" >
                                                    Edit
                                                </span>
                                                <span className="text-green-500 bg-transparent border-t border-b border-r border-green-500 hover:bg-green-500 hover:text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150">
                                                    <DeleteButton authorId={author._id} successCallback={e=> setDomChange(!domChange)}/>
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllAuthorsTable
