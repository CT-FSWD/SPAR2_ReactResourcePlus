import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import CatEdit from './CatEdit'
import axios from 'axios'

library.add(fas);

export default function SingleCategory(props) {
    const {currentUser} = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    const deleteCategory = (id) => {
        if(window.confirm(`Are you sure you want to delete ${props.category.CategoryName}?`)){
        axios.delete(`https://api.jamesrcaldwell.com/api/categories/${id}`).then(() => { props.getCategories() });
        }
    }
    return (
        <>
            <tr>
                <td>{props.category.CategoryName}</td>
                <td>{props.category.CategoryDescription}</td>
                {currentUser.email === 'james.caldwell82@outlook.com' &&
                <td>
                    <button className="m-1 rounded" id="editLink" onClick={( ) => setShowEdit(true)}>
                        <FontAwesomeIcon icon={['fas', 'edit']}/>
                    </button>
                    <button className="m-1 rounded" id="deleteLink" onClick={() => deleteCategory(props.category.CategoryId)}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </button>
                </td>
                
                }                
            </tr>
            {showEdit &&
                <CatEdit 
                    category={props.category}
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    getCategories={props.getCategories} />
            }
        </>
    )
}
