import React from "react";
import { Container, Navbar } from "react-bootstrap";

interface Props {}

export const Footer = (props: Props) => {
    return (
        <footer>
            <Navbar bg="dark" className="text-light">
                <Container>Footer</Container>
            </Navbar>
        </footer>
    );
};
