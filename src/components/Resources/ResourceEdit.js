import React from 'react'
import { Modal } from 'react-bootstrap'

import ResourceForm from './ResourceForm'


export default function ResourceEdit(props) {
    return (
        <Modal show={props.showEdit} onHide={() => props.setShowEdit(false)}>
            <Modal.Header className="bg-info" closeButton>
                <h3>Editing {props.resource.Name}...</h3>
            </Modal.Header>
            <Modal.Body>
                <ResourceForm
                     resource={props.resource}
                     showEdit={props.showEdit}
                     setShowEdit={props.setShowEdit}
                     getResources={props.getResources}
                     categories={props.categories} />
            </Modal.Body>
        </Modal>
    )
}
