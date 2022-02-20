import {ContactType} from "./reducers/contactsReducer";


export const generateId = (contacts: Array<ContactType>) => {
    if (contacts.length) {
        return Math.max.apply(null, contacts.map(contact => contact.id)) + 1;
    } else {
        return 1;
    }
}

export const search = (value: string, contacts: Array<ContactType>) => {
    return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
        || contact.lastname.toLowerCase().includes(value.toLowerCase()));
}

export const parseContacts = (contacts: any) => {
    return contacts.map((contact: any) => {
        return {
            id: contact.id,
            name: contact.name,
            lastname: contact.username,
            phone: contact.phone,
            photo: contact.photo ? contact.photo : "",
        }
    })
}

