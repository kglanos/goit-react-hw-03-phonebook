import React from "react";
import PropTypes from "prop-types";
import css from "./contactList.module.css";

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
                <p className={css.text}>{name}: {number}</p>
                <button className={css.button} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
};