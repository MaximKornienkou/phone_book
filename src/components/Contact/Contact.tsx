import {Button, Col, Container, Row} from "reactstrap";
import {useDispatch} from "react-redux";

import styles from "./Contact.module.scss";
import defaultPhoto from "../../common/images/defaultPhoto.png";
import {ContactType, deleteContact} from "../../reducers/contactsReducer";

type ContactPropsType = {
   contact: {
       id: number,
       name: string,
       lastname: string,
       phone: string,
       photo?: string,
   }
    openEditingForm: (contactInfo: ContactType) => void,
}

export const Contact = ({contact: {id, name, lastname, phone, photo}, openEditingForm}:ContactPropsType) => {

    const dispatch = useDispatch();

    const onDeleteContact = () => {
        dispatch(deleteContact(id));
    }

    const onChangeContact = (contact: ContactType) => {
        openEditingForm(contact);
    }

    return (
        <Container className={styles.contactWrapper}>
            <Row>
                <Col md="8">
                    <Row>{name}</Row>
                    <Row>{lastname}</Row>
                    <Row>{phone}</Row>
                </Col>
                <Col className={styles.contactPhoto}>
                    <img src={photo ? photo : defaultPhoto} alt="Avatar"/>
                </Col>
                <Col>
                    <Button onClick={() => onChangeContact({id, name, lastname, phone, photo})}>
                        Update
                    </Button>
                    <Button onClick={onDeleteContact}>
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}