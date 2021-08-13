import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { GlobalNavbar, LinkItem } from "../../../GlobalNavbar";

interface Props {
    links: LinkItem[];
}

export const Header: React.FC<Props> = ({ links }) => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-light">
                        React-Bootstrap
                    </Navbar.Brand>
                    <GlobalNavbar links={links}></GlobalNavbar>
                </Container>
            </Navbar>
        </div>
    );
};
