import styles from './ContactsList.module.scss';
import sprite from '../sprite.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import { getContactItemById } from '../../redux/phonebook/phonebook-selectors';

import React from 'react';
import { Button } from '@material-ui/core';

const ContactListItem = ({ id }) => {
  const { name, number } = useSelector(getContactItemById(id));
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <span className={styles.textContact}>
        {name} : {number}
      </span>
      <Button /* className={styles.btnDelete}  */ onClick={handleDeleteContact}>
        Delete
        <svg className={styles.iconRemove}>
          <use href={`${sprite}#icon-remove`}></use>
        </svg>
      </Button>
    </li>
  );
};

export default ContactListItem;
