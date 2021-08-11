import React from "react";
import { Carousel, Col, Container, Row, Image, Card } from "react-bootstrap";
import { LoremIpsum, loremIpsum } from "react-lorem-ipsum";
import { GlobalFooter } from "../components/GlobalFooter";
import { useHolderjs } from "use-holderjs";

const CarouselBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    data-src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    data-src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    data-src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

const RoundedCircleSection = () => {
    return (
        <Row className="justify-content-md-center">
            <Col className="p-4" style={{ textAlign: "center" }} sm="12" md="4">
                <h2>Heading</h2>
                <Image data-src="holder.js/171x180" roundedCircle />

                <div style={{ textAlign: "left" }}>
                    <LoremIpsum p={1} />
                </div>
            </Col>
            <Col className="p-4" style={{ textAlign: "center" }} sm="6" md="4">
                <h2>Heading</h2>
                <Image data-src="holder.js/171x180" roundedCircle />

                <div style={{ textAlign: "left" }}>
                    <LoremIpsum p={1} />
                </div>
            </Col>
            <Col className="p-4" style={{ textAlign: "center" }} sm="6" md="4">
                <h2>Heading</h2>
                <Image data-src="holder.js/171x180" roundedCircle />

                <div style={{ textAlign: "left" }}>
                    <LoremIpsum p={1} />
                </div>
            </Col>
        </Row>
    );
};

const ProductsSection = () => {
    return (
        <Row className="justify-content-md-center">
            <Col
                style={{ textAlign: "center" }}
                className="bg-dark text-light"
                md="6"
            >
                <div className="my-3 py-3">
                    <h2 className="display-5">Another headline</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>

                <div
                    className="bg-light box-shadow mx-auto"
                    style={{
                        width: "80%",
                        height: "300px",
                        borderRadius: "21px 21px 0 0",
                    }}
                ></div>
            </Col>

            <Col style={{ textAlign: "center" }} className="bg-light" md="6">
                <div className="my-3 py-3">
                    <h2 className="display-5">Another headline</h2>
                    <p className="lead">And an even wittier subheading.</p>
                </div>

                <div
                    className="bg-dark box-shadow mx-auto"
                    style={{
                        width: "80%",
                        height: "300px",
                        borderRadius: "21px 21px 0 0",
                    }}
                ></div>
            </Col>
        </Row>
    );
};

export const CardSection = () => {
    return (
        <Row>
            <Col>
                <Card className="bg-dark m-4">
                    <Card.Img data-src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>{loremIpsum()}</Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>

                <Card className="bg-dark m-4">
                    <Card.Img data-src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>{loremIpsum()}</Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    );
};

const DarkerSection = () => {
    return (
        <Row className="bg-dark text-light p-4">
            <Col>
                <Row className="bg-dark text-light p-4 text-center">
                    <Col>
                        <Image data-src="holder.js/171x180" roundedCircle />
                    </Col>
                    <Col>
                        <h4>Heading</h4>
                    </Col>
                    <Col></Col>
                </Row>

                <div style={{ textAlign: "left" }}>
                    <LoremIpsum p={1} />
                </div>
            </Col>
        </Row>
    );
};

export const Home = () => {
    useHolderjs();

    return (
        <>
            <CarouselBanner></CarouselBanner>

            <Container fluid>
                <RoundedCircleSection></RoundedCircleSection>

                <ProductsSection></ProductsSection>

                <DarkerSection></DarkerSection>

                <CardSection></CardSection>
            </Container>

            <GlobalFooter></GlobalFooter>
        </>
    );
};

export default Home;
