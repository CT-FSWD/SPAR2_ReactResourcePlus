import React, {useState, useEffect} from 'react'
import { Formik, Form, Field } from 'formik'
import catSchema from '../../Utilities/validationSchema'
import axios from 'axios'


export default function CatCreate(props) {
    const handleSubmit = (values) => {
        const category = {
            CategoryName: values.CategoryName,
            CategoryDescription: values.CategoryDescription
        };

        console.log(category);
        axios.post('https://api.jamesrcaldwell.com/api/categories/', category).then(response => {
            props.setShowCreate(false)
            props.getCategories();
        });
    }
    return (
        <div className="createCategory m-2 text-center">
            <Formik
                initialValues={{CategoryName:'', CategoryDescription: ''}}
                validationSchema={catSchema}
                onSubmit={values => {
                   handleSubmit(values)
                }}
            >
                {({errors,touched}) => (
                    <div className="container">
                    <Form id="catForm" className="row text-center m-auto">
                        <div className="form-group col-md-12 m-1 p-1">
                            <Field name="CategoryName" className="form-control" placeholder="Name"/>
                            {errors.CategoryName && touched.CategoryName ? (
                                <div className="text-danger m-1">{errors.CategoryName}</div>
                            ) : null}
                        </div>
                        <div className="form-group col-md-12 m-1 p-1">
                            <Field name="CategoryDescription" className="form-control" placeholder="Description"/>
                            {errors.CategoryDescription && touched.CategoryDescription ? (
                                <div className="text-danger m-1">{errors.CategoryDescription}</div>
                            ) : null}
                        </div>
                        <div className="form-group col-md-12 m-1">
                            <button type="submit" className="btn btn-success">Submit</button></div>
                    </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}
