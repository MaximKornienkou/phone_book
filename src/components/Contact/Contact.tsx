import {Button, Col, Container, Modal, ModalHeader, Row} from "reactstrap";
import {useDispatch} from "react-redux";

import styles from "./Contact.module.scss";
import defaultPhoto from "../../common/images/defaultPhoto.png";
import {deleteContact} from "../../reducers/contactsReducer";
import {ContactForm} from "../ContactForm/ContactForm";
import React, {useState} from "react";

type ContactPropsType = {
   contact: {
       id: number,
       name: string,
       lastname: string,
       phone: string,
       photo?: string,
   }
}

export const Contact = ({contact: {id, name, lastname, phone, photo}}:ContactPropsType) => {

    const dispatch = useDispatch();
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

    const closeForm = () => {
        setIsFormOpen(false);
    }

    const openForm = () => {
        setIsFormOpen(true);
    }

    const onDeleteContact = () => {
        dispatch(deleteContact(id));
    }

    return (
        <Container className={styles.contactWrapper}>
            <Row>
                <Col md="8" className={styles.contactInfo}>
                    <Row>{name}</Row>
                    <Row>{lastname}</Row>
                    <Row>{phone}</Row>
                </Col>
                <Col className={styles.contactPhoto}>
                    <img src={photo ? photo : defaultPhoto} alt="Avatar"/>
                </Col>
                <Col>
                    <Button onClick={openForm} color="primary">
                        Update
                    </Button>
                    <Button onClick={onDeleteContact} color="danger">
                        Delete
                    </Button>
                </Col>
                <Modal isOpen={isFormOpen}>
                    <ModalHeader
                        toggle={closeForm}
                    >
                        Update contact
                    </ModalHeader>
                    <ContactForm
                        contact={{id, name, lastname, phone, photo}}
                        openForm={setIsFormOpen}
                        isNewContact={false}
                    />
                </Modal>
            </Row>
        </Container>
    )
}