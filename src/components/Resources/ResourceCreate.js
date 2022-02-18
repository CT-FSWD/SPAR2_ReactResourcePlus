import React from 'react'
import { Formik, Form, Field } from 'formik'
import { resourceSchema } from '../../Utilities/validationSchema'
import axios from 'axios'
import ResourceForm from './ResourceForm'

export default function ResourceCreate(props) {
    // const handleSubmit = (values) => {
    //     const resource = {
    //         Name: values.Name,
    //         Description: values.Description,
    //         Url: values.Url,
    //         LinkText: values.LinkText,
    //         CategoryId: values.CategoryId
    //     }
    //     console.log(resource);
    //     //submit axios
    //     axios.post('https://api.jamesrcaldwell.com/api/resources/', resource).then(() => {
    //         props.getResources();
    //         props.setShowCreate(false);
    //     })  

    // }
    return (
        <article className="createResource m-2 text-white justify-content-center">
            <ResourceForm
            showCreate={props.showCreate}
            setShowCreate={props.setShowCreate}
            getResources={props.getResources}
            categories={props.categories} />
        </article>
            
        
    )
}
