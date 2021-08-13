import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface LinkItem {
    name: string;
    to: string;
    direct: boolean;
}

interface Props {
    links: LinkItem[];
}

export const GlobalNavbar = (props: Props) => {
    return (
        <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {props.links.map((l) => {
                        if (l.direct) {
                            return (
                                <Nav.Link
                                    className="text-light"
                                    key={l.to}
                                    href={l.to}
                                >
                                    {l.name}
                                </Nav.Link>
                            );
                        } else {
                            return (
                                <Nav.Link
                                    className="text-light"
                                    key={l.to}
                                    as={Link}
                                    to={l.to}
                                >
                                    {l.name}
                                </Nav.Link>
                            );
                        }
                    })}

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </>
    );
};
