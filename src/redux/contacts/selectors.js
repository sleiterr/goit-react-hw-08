import { createSelector } from "@reduxjs/toolkit";

// Селектор для отримання всіх контактів зі стану
export const selectContacts = (state) => state.contacts.items;

// Селектор для отримання значення фільтра зі стану
export const selectFilter = (state) => state.contacts.filters.name;

// Селектор для отримання стану завантаження контактів
export const selectLoading = (state) => state.contacts.loading;

// Селектор для отримання повідомлення про помилку
export const selectError = (state) => state.contacts.error;

// Мемоізований селектор для отримання відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
