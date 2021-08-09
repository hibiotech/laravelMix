import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div>
            <Container className="p-3">
                <Row>
                    <Col>
                        <h1>Welcome To React-Bootstrap</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
