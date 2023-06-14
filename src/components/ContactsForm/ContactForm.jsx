import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getVisibleContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export function ContactForm() {
    const [formData, setFormData] = useState({ name: '', number: '' });
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleAddContact = (name, number) => {
        const existingContact = contacts.find(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (existingContact) {
            alert(`${name} is already in contacts.`);
        } else {
            dispatch(addContact({ name, number }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddContact(formData.name, formData.number);
        reset();
    };

    const reset = () => {
        setFormData({ name: '', number: '' });
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.formLabel}>Name</label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Please enter name"
                pattern="^([a-zA-Zа-яА-Я]{2,}\s[a-zA-Zа-яА-Я]{1,}'?-?[a-zA-Zа-яА-Я]{2,}\s?([a-zA-Zа-яА-Я]{1,})?)|([a-zA-Zа-яА-Я]{2,})"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.formLabel}>Phone number</label>
            <input
                className={css.formInput}
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Please enter number"
                pattern="[0-9\-\(\) ]*"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.btn} type="submit">
                Add contact
            </button>
        </form>
    );
}
