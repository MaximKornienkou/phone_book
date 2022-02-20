import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import React, {ChangeEvent, FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    addNewContact,
    ContactType,
    updateContactInfo,
    UpdateContactInfo
} from "../../reducers/contactsReducer";
import {AppStoreType} from "../../state/store";
import {generateId} from "../../helpers";


type ContactFormPropsType = {
    contact: {
        id: number,
        name: string,
        lastname: string,
        phone: string,
        photo?: string,
    },
    isNewContact: boolean,
    openForm: (flag: boolean) => void,
}

export const ContactForm = ({
                                contact,
                                isNewContact,
                                openForm
                            }: ContactFormPropsType) => {

    const contacts = useSelector<AppStoreType, Array<ContactType>>((state) =>
        state.contacts);
    const dispatch = useDispatch();

    const [name, setName] = useState(contact.name);
    const [lastname, setLastname] = useState(contact.lastname);
    const [phone, setPhone] = useState(contact.phone);

    const getContactFormInfo = (name: string, lastname: string, phone: string) => {
        const id = generateId(contacts);
        dispatch(addNewContact({id, name, lastname, phone}));
    }

    const updateContactFormInfo = (contactInfo: UpdateContactInfo) => {
            dispatch(updateContactInfo(contact.id, contactInfo));
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        isNewContact
            ? getContactFormInfo(name, lastname, phone)
            : updateContactFormInfo({name, lastname, phone});
        openForm(false);
    }

    const onChangeSetName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }
    const onChangeSetLastname = (event: ChangeEvent<HTMLInputElement>) => {
        setLastname(event.currentTarget.value);
    }
    const onChangeSetPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.currentTarget.value);
    }

    return (
        <Container>
            <div>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="name">
                            Enter name
                        </Label>
                        <Input id="name"
                               placeholder="name"
                               onChange={onChangeSetName}
                               value={name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">
                            Enter lastname
                        </Label>
                        <Input id="lastname"
                               placeholder="lastname"
                               onChange={onChangeSetLastname}
                               value={lastname}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">
                            Enter phone number
                        </Label>
                        <Input id="phoneNumber"
                               placeholder="phone number"
                               onChange={onChangeSetPhoneNumber}
                               value={phone}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button>
                            {isNewContact ? "Add" : "Update"}
                        </Button>
                        <Button onClick={()=> {openForm(false)}}>
                            Cancel
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        </Container>
    )
}