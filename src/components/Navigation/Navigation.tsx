import {
    Col,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand, NavbarToggler,
    NavItem,
    NavLink, Row,
} from "reactstrap";
import React, {useState} from "react";
import styles from "./styles.module.scss";






export const Navigation = () => {

    const navigation = ["home", "contacts", "about", "404"];

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navigation}>
            <Navbar color="light" light expand="md" animation="false">
                <NavbarBrand>Phone book</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Row>
                                {navigation.map(elem =>
                                    <Col key={elem}>
                                        <NavLink
                                            href={`/#/${elem}`}
                                        >
                                            {elem}
                                        </NavLink>
                                    </Col>
                                )}
                            </Row>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
            // {/*<Navbar*/}
            // {/*    color="light"*/}
            // {/*    expand="sm"*/}
            // {/*    light*/}
            // {/*>*/}
            // {/*    <NavbarBrand >*/}
            // {/*        Phone book*/}
            // {/*    </NavbarBrand>*/}
            //
            // {/*    <Collapse navbar isOpen>*/}
            // {/*        <Nav*/}
            // {/*            className="me-auto"*/}
            // {/*            navbar*/}
            // {/*        >*/}
            // {/*            <NavItem>*/}
            // {/*                <NavLink href="/#/home/">*/}
            // {/*                    Home*/}
            // {/*                </NavLink>*/}
            // {/*            </NavItem>*/}
            // {/*            <NavItem>*/}
            // {/*                <NavLink href="/#/contacts">*/}
            // {/*                    Contacts*/}
            // {/*                </NavLink>*/}
            // {/*            </NavItem>*/}
            // {/*            <NavItem>*/}
            // {/*                <NavLink href="/#/about">*/}
            // {/*                    About*/}
            // {/*                </NavLink>*/}
            // {/*            </NavItem>*/}
            // {/*        </Nav>*/}
            // {/*    </Collapse>*/}
            // {/*</Navbar>*/}
