import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(normalizedFilter),
    );
    return filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  },
);