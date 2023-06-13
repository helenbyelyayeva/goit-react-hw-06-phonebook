import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    const handleDeleteContact = (id) => dispatch(deleteContact({ id }));

    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    <p className={css.name}>
                        {name}:{number}
                    </p>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={() => handleDeleteContact(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

