import React, { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout'
import sampleCategories from '../../Utilities/sampleCategories'
import SingleCategory from './SingleCategory'
import { Container } from 'react-bootstrap'
import './Categories.css'
import axios from 'axios'
import CatCreate from './CatCreate'


export default function Categories() {
    const { currentUser } = useAuth()
    const [categories, setCategories] = useState(sampleCategories);
    const [showCreate, setShowCreate] = useState(false);


    const getCategories = () => {
        axios.get('https://api.jamesrcaldwell.com/api/categories/').then(response => {
            setCategories(response.data);
        })
    }




    useEffect(() => {
        getCategories();
    }, []);
    return (
        <section className="categories">
            <article className="bg-info p-5 text-center">
                <h1>Categories Dashboard</h1>
            </article>
            <div className="bg-dark p-2 mb-3 text-center">
                {(currentUser.email === 'james.caldwell82@outlook.com' && showCreate) ?
                    <>
                        <button onClick={() => setShowCreate(false)} className="btn btn-warning">Cancel</button>
                        <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
                    </>
                    :
                    <button onClick={() => setShowCreate(true)} className="btn btn-info">Create New Category</button>
                }
            </div>
            <Container>
                <table className="table table-striped table-bordered table-light rounded mt-3 mb-3">
                    <thead className="bg-info text-uppercase">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            {currentUser.email === 'james.caldwell82@outlook.com' &&
                                <th>Actions</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(cat =>
                            <SingleCategory
                                key={cat.CategoryId}
                                category={cat}
                                getCategories={getCategories} />
                        )}
                    </tbody>
                </table>

            </Container>
            {currentUser &&
                <Logout />
            }
        </section>
    )
}
