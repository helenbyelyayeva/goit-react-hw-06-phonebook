import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from "./Filter.module.css";

export function Filter() {
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.target.value));
      };

    return (
        <div className={css.search}>
            <label className={css.formLabel}>
                Find contact by name
            </label>
            <input
                name='filter'
                className={css.formInput}
                placeholder="Search for..."
                onChange={changeFilter} />
        </div>
    );
}