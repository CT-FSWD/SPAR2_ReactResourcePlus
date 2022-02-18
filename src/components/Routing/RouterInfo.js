import React from 'react'
import { Col } from 'react-bootstrap'

export default function RouterInfo() {    
    return (
        <Col md={6} className="routerInfo text-left p-5">
            <h2>React Router</h2>
            <p>
                To implement router functionality in React JS:
            </p>
            <ol>
                <li><strong>npm install react-router-dom@5.3.0</strong></li>
                <li><strong>Import the following components from the react-router-dom package:</strong>
                    <ul>
                        <li>HashRouter</li>
                        <li>Switch</li>
                        <li>Route</li>
                    </ul>
                </li>
                <li><strong>Create the structure as seen in App.js code</strong></li>
                <li><strong>For every 'page' of content in your router, import the component and make a new instance of the Route component, declaring the path and the component.</strong></li>
                <li><strong>Create a NotFound component to serve as a graceful error view.</strong></li>
            </ol>
        </Col>
    )
}
