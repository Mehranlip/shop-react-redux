import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className='text-center bg-footer d-flex flex-column p-3'>
                        Footer
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer