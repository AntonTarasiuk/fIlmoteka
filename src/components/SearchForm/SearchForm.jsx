import PropTypes from 'prop-types';
import { SearchForm, SearchField, SearchFormButton } from './SearchForm.styled';
import sprite from "../../images/sprite.svg"
import { useState } from 'react';

export const MovieSearch = ({ size }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChacge = e => {
        const { value } = e.currentTarget;

        setSearchValue(value)
    }

    const handlerSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(searchValue);
    }

    return (
        <SearchForm onSubmit={handlerSubmit}>
            <SearchField
                type="text"
                name='searchValue'
                value={searchValue}
                onChange={handleChacge}
                autocomplete="off"
                placeholder="Search movies" />
            <SearchFormButton>
                <svg width={size} height={size}>
                    <use xlinkHref={`${sprite}#icon-search`} />
                </svg>
            </SearchFormButton>
        </SearchForm>
    )
}

MovieSearch.propTypes = {
    size: PropTypes.number.isRequired,
}