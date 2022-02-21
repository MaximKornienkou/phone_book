import {
    addNewContact,
    contactsReducer, ContactType,
    deleteContact, setContacts,
    updateContactInfo
} from "./contactsReducer";


let startState: Array<ContactType>

beforeEach(() => {

    startState = [
        {id: 1, name: "Maxim", lastname: "Kornienko", phone: "0994578933",},
        {id: 2, name: "Alexandra", lastname: "Cravchishina", phone: "0994433555",}
    ]
});

test("new contact must be added", () => {

    let newContact = {id: 3, name: "Petr", lastname: "Petrov", phone: "0653344556"};

    const endState = contactsReducer(startState, addNewContact(newContact));

    expect(endState.length).toBe(3);
    expect(endState[0].id).toBe(3);
    expect(endState[0].name).toBe("Petr");
    expect(endState[0].lastname).toBe("Petrov");
    expect(endState[0].phone).toBe("0653344556");
});

test("contact information needs to be updated", () => {

    let updatedContactInfo = {name: "Den", lastname: "Ivanov", phone: "0883334455"};

    const endState = contactsReducer(startState, updateContactInfo(1, updatedContactInfo));

    expect(endState[0].name).toBe("Den");
    expect(endState[0].lastname).toBe("Ivanov");
    expect(endState[0].phone).toBe("0883334455");
});

test("contact must be deleted", () => {

    const endState = contactsReducer(startState, deleteContact(1));

    expect(endState.length).toBe(1);
    expect(endState[0].name).toBe("Alexandra");
    expect(endState[0].lastname).toBe("Cravchishina");
    expect(endState[0].phone).toBe("0994433555");
});

test("set contacts list", () => {

    const startState: Array<ContactType> = []

    const contacts = [
        {id: 1, name: "Maxim", lastname: "Kornienko", phone: "0994578933",},
        {id: 2, name: "Alexandra", lastname: "Cravchishina", phone: "0994433555",}
    ]

    const endState = contactsReducer(startState, setContacts(contacts));

    expect(endState.length).toBe(2);
    expect(endState[0].name).toBe("Maxim");
    expect(endState[1].id).toBe(2);
    expect(endState[0].phone).toBe("0994578933");
});