import {applyMiddleware, combineReducers, createStore} from "redux";
import {ContactActionType, contactsReducer} from "../reducers/contactsReducer";
import thunk, {ThunkAction} from "redux-thunk";

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppStoreType = ReturnType<typeof rootReducer>;

export type AppActionsType = ContactActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>