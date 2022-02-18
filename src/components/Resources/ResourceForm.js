import React from 'react'
import { Formik, Form, Field } from 'formik'
import { resourceSchema } from '../../Utilities/validationSchema'
import axios from 'axios'

export default function ResourceForm(props) {
    const handleSubmit = (values) => {
                //submit axios
        if(!props.resource)
            {
                const resourceToCreate = {            
                    Name: values.Name,
                    Description: values.Description,
                    Url: values.Url,
                    LinkText: values.LinkText,
                    CategoryId: values.CategoryId
                }
                console.log(resourceToCreate)

                axios.post('https://api.jamesrcaldwell.com/api/resources/', resourceToCreate).then(() => {
                    props.getResources();
                    props.setShowCreate(false);
                })
            }
            else {
                const resourceToEdit = {
                    ResourceId: props.resource.ResourceId,
                    Name: values.Name,
                    Description: values.Description,
                    Url: values.Url,
                    LinkText: values.LinkText,
                    CategoryId: values.CategoryId
                };
                console.log(resourceToEdit);
                axios.put('https://api.jamesrcaldwell.com/api/resources/', resourceToEdit).then(() => {
                    props.getResources();
                    props.setShowEdit(false);
                })
            }


    }
    return ( 
            
            <Formik
                initialValues={{ 
                    //Here we assign the values of the objects in the form's initial values. If this is an edit version, it will have a resource prop and it will not have resource prop if it is a create version. So we use a ternary operator to assign the values appropriately to the inputs' initial values.                   
                    Name: props.resource  ? props.resource.Name : '' ,
                    Url: props.resource  ? props.resource.Url : '' ,
                    LinkText: props.resource  ? props.resource.LinkText : '' ,
                    Description: props.resource  ? props.resource.Description : '' ,
                    CategoryId: props.resource  ? props.resource.CategoryId : ''                
                }}
                validationSchema={resourceSchema}
                onSubmit={values =>
                    handleSubmit(values)
                }>
        
                {({ errors, touched }) => (
                    <Form id="resourceForm">
                        <div className="form-group m-3">
                            <Field name="Name" className="form-control" placeholder="Name" />
                            {errors.Name && touched.Name ? (
                                <div className="text-danger">
                                    {errors.Name}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group m-3">
                            <Field name="Url" className="form-control" placeholder="Url" />
                            {errors.Url && touched.Url ? (
                                <div className="text-danger m-1">
                                    {errors.Url}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group m-3">
                            <Field name="LinkText" className="form-control" placeholder="Link Text" />
                            {errors.LinkText && touched.LinkText ? (
                                <div className="text-danger m-1">
                                    {errors.LinkText}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group m-3">
                            <Field name="Description" as="textarea" className="form-control" placeholder="Description" style={{ resize: 'none', height: '5em' }} />
                            {errors.Description && touched.Description ? (
                                <div className="text-danger m-1">
                                    {errors.Description}
                                </div>
                            ) : null}
                        </div>
                        <div className="form-group m-3">
                            <Field as="select" name="CategoryId" className="form-control">
                                <option value="0" disabled>[-- Please Choose a Category --]</option>
                                {props.categories.map(x =>
                                    <option key={x.CategoryId} value={x.CategoryId}>
                                        {x.CategoryName}
                                    </option>
                                )}
                            </Field>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info m-3">Submit Resource to API</button>
                        </div>
                    </Form>
                )}
            </Formik>
    )
}
