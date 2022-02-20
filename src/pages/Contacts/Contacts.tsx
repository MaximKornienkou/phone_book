import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Container, Input, Modal, ModalHeader, Row} from "reactstrap";

import {AppStoreType} from "../../state/store";
import {ContactType, getContacts} from "../../reducers/contactsReducer";
import {Contact} from "../../components/Contact/Contact";

import {ContactForm} from "../../components/ContactForm/ContactForm";
import {search} from "../../helpers";
import styles from "./styles.module.scss";

export const Contacts = () => {

    const contacts = useSelector<AppStoreType, Array<ContactType>>((state) =>
        state.contacts);
    const dispatch = useDispatch();

    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [isNewContact, setIsNewContact] = useState<boolean>(false);

    const [searchValue, setSearchValue] = useState("");
    const [contact, setContact] = useState<ContactType>({id: 0, lastname: "", name: "", phone: "", photo: ""});


    useEffect(() => {
        dispatch(getContacts());
    }, []);

    const updateContact = (contact: ContactType) => {
        setIsFormOpen(true)
        setContact(contact)
        setIsNewContact(false);
    }

    const openForm = () => {
        setIsFormOpen(true);
        setIsNewContact(true);
        setContact({id: 0, lastname: "", name: "", phone: "", photo: ""});
    }

    const closeForm = () => {
        setIsFormOpen(false);
    }

    const onChangeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value);
    }

    const contactsFilter = search(searchValue, contacts);

    return (
        <Container>
            <Row className={styles.search}>
                <Col>
                    <Input
                        type="text"
                        placeholder="Search..."
                        onChange={onChangeSearchHandler}
                    />
                </Col>
                <Col>
                    <Button onClick={openForm}>Add contact</Button>
                </Col>

            </Row>
            <Row>
                <Col>
                    {contactsFilter.map((contact: ContactType) => (
                            <Container key={contact.id}>
                                <Contact
                                    contact={contact}
                                    openEditingForm={updateContact}
                                />
                            </Container>
                        )
                    )}
                </Col>
                <Modal isOpen={isFormOpen}>
                    <ModalHeader
                        toggle={closeForm}
                    >
                        {isNewContact ? "Add contact" : "Update contact"}
                    </ModalHeader>
                    <ContactForm
                        contact={contact}
                        openForm={setIsFormOpen}
                        isNewContact={isNewContact}
                    />
                </Modal>
            </Row>
        </Container>
    )
}