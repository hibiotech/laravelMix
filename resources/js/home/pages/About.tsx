import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {

}

export const About = (props: Props) => {
    return (
        <div>
            <Container className="p-3">
                <Row>
                    <Col>
                        <h1>ABOUT Public</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            Should always be a public page, like seo pages
                            and more
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
