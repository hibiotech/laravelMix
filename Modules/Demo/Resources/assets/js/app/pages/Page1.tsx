import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../../../../../../resources/js/components/Layouts/_Default/Layout";
import { links } from "../components/AppRouter";

export const Page1 = () => {
    return (
        <Layout links={links}>
            <Container>
                <Row>
                    <Col>
                        <h1>Test demo1!</h1>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Page1;
