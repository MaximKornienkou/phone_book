import {AppThunk} from "../state/store";
import {phoneBookApi} from "../api/api";
import {parseContacts} from "../helpers";

const initialState: Array<ContactType> = [];

export const contactsReducer = (state = initialState, action: ContactActionType): Array<ContactType> => {
    switch (action.type) {
        case "SET-CONTACTS":
            return [...action.contacts]
        case "ADD-CONTACT":
            return [action.contact, ...state];
        case "UPDATE-CONTACT-INFO":
            return [
                ...state.map(contact => contact.id === action.contactId
                    ? {
                        ...contact, name: action.updateContactInfo.name,
                        lastname: action.updateContactInfo.lastname,
                        phone: action.updateContactInfo.phone
                    }
                    : contact)];
        case "DELETE-CONTACT":
            return state.filter(contact => contact.id !== action.contactId);
        default:
            return state;
    }
}

export const setContacts = (contacts: Array<ContactType>) =>
    ({type: "SET-CONTACTS", contacts} as const);
export const addNewContact = (contact: ContactType) =>
    ({type: "ADD-CONTACT", contact} as const);
export const updateContactInfo = (contactId: number, updateContactInfo: UpdateContactInfo) =>
    ({type: "UPDATE-CONTACT-INFO", contactId, updateContactInfo} as const);
export const deleteContact = (contactId: number) =>
    ({type: "DELETE-CONTACT", contactId} as const);


export type ContactActionType =
    ReturnType<typeof addNewContact>
    | ReturnType<typeof updateContactInfo>
    | ReturnType<typeof deleteContact>
    | ReturnType<typeof setContacts>

export const getContacts = (): AppThunk =>
    async (dispatch) => {
        try {
            const result = await phoneBookApi.getContacts();
            const contacts = parseContacts(result.data);
            dispatch(setContacts(contacts));
        } catch (error) {

        } finally {

        }
    }

export type ContactType = {
    id: number,
    name: string,
    lastname: string,
    phone: string,
    photo?: string,
}
export type UpdateContactInfo = {
    name: string,
    lastname: string,
    phone: string,
}
