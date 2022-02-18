//Step 10 - Read - Create the SingleResource component
import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ResourceEdit from './ResourceEdit'
import axios from 'axios'

library.add(fas);

export default function SingleResource(props) {
    const { currentUser } = useAuth();
    const [showEdit, setShowEdit] = useState(false);

    const deleteResource = (id) => {
        if (window.confirm(`Are you sure you want to delete ${props.resource.Name}?`)) {
            axios.delete(`https://api.jamesrcaldwell.com/api/resources/${id}`).then(() => {
                props.getResources();
            })
        }
    }

    return (
        <div className="singleResource col-lg-5 col-md-10 col-sm-12 m-2">
            <h3>{props.resource.Name}</h3>
            {props.resource.Description !== null ?
                <p>{props.resource.Description}</p> :
                <p>No Description Provided</p>
            }
            <a href={props.resource.Url} target="_blank" rel="noreferrer" className="btn btn-info">
                Visit {props.resource.LinkText}
            </a>
            {currentUser.email === 'james.caldwell82@outlook.com' &&
                <div>
                    <button id="editLink" onClick={() => setShowEdit(true)}>
                        <FontAwesomeIcon icon={['fas', 'edit']} />
                    </button>
                    <button id="deleteLink" onClick={() => deleteResource(props.resource.ResourceId)}>
                        <FontAwesomeIcon icon={['fas', 'trash-alt']} />
                    </button>
                    {showEdit &&
                        <ResourceEdit
                            resource={props.resource}
                            showEdit={showEdit}
                            setShowEdit={setShowEdit}
                            getResources={props.getResources}
                            categories={props.categories} />
                    }
                </div>
            }


        </div>
    )
}
