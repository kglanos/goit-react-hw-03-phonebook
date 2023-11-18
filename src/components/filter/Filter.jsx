import React from "react";
import PropTypes from "prop-types";
import css from "./filter.module.css";

export const Filter = ({ value, onChange }) => (
    <label className={css.label}>
        Find contacts by name
        <input
            className={css.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};