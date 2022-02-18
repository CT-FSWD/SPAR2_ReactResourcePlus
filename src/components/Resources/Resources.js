import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout'
import './Resources.css'
import sampleResources from '../../Utilities/sampleResources'
import SingleResource from './SingleResource'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import ResourceForm from './ResourceCreate'
import FilterCat from './FilterCat'

export default function Resources() {
    const { currentUser } = useAuth();

    const [resources, setResources] = useState(sampleResources);
    const [showCreate, setShowCreate] = useState(false);

    const [filter, setFilter] = useState(0);

    const getResources = () => {
        axios.get('https://api.jamesrcaldwell.com/api/resources').then(response => {
            setResources(response.data);
        })
    }

    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        axios.get('https://api.jamesrcaldwell.com/api/categories/').then(response => {
            setCategories(response.data)
        })
    }

    

    useEffect(() => {
        getResources();
        getCategories();
    }, []);
    return (
        <section className="resources">
            <article className="bg-info p-5 text-center">
                <h1>Resources Dashboard</h1>
            </article>
            {currentUser.email === 'james.caldwell82@outlook.com' &&
                <div className="bg-dark p-2 mb-3 text-center">
                    <button onClick={() => setShowCreate(!showCreate)} className="btn btn-info">
                        {!showCreate ? "Create New Resource" : 'Close Form'}
                    </button>
                    <div className="createContainer">
                        {showCreate &&
                            <ResourceForm 
                            getResources={getResources}
                            categories={categories}
                            showCreate={showCreate}
                            setShowCreate={setShowCreate}
                            />
                        }
                    </div>
                </div>

            }

            <FilterCat setFilter={setFilter} categories={categories} />

            <Container>
                <article className="resourceGallery row justify-content-center p-4">

                    {filter === 0 ? resources.map(resource =>
                        <SingleResource
                            key={resource.ResourceId}
                            resource={resource}
                            getResources={getResources} 
                            categories={categories}/>
                    ) :
                    resources.filter(resource => resource.CategoryId === filter).map(resource =>
                        <SingleResource key={resource.ResourceId} resource={resource} categories={categories} getResources={getResources} />
                    )
                    }
                    {filter !== 0 && resources.filter(resource => resource.CategoryId === filter).length === 0 &&
                        <h2 className="alert alert-warning text-dark">
                            There are no results in this category.
                        </h2>
                    }
                </article>
            </Container>
            {currentUser &&
                <Logout />
            }
        </section>
    )
}
