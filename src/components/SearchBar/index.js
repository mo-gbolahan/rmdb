import React, { useState, useEffect, useRef } from "react";

import PropTypes from 'prop-types';

// styles
import { Wrapper, Content } from './SerachBar.styles';

// Image
import searchIcon from '../../images/search-icon.svg';


const SerachBar = ({ setSearchQuery }) => {
    const [query, setQuery] = useState('');

    
    // using useRef to block useEffect cause useEffect always trigger on intial render and we only want to truigger something when the user has typed something in.

    const initial = useRef(true);
    // initial.current holds the value, in this case the value 'true'




    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchQuery(query);
                
        }, 500)
        return () => clearTimeout(timer)

    }, [setSearchQuery, query])

    return (
        <Wrapper>
            <Content>
                < img src={searchIcon} alt='Serach Icon' />
                <input type='text' placeholder='Search Movie'
                    onChange={event => setQuery(event.currentTarget.value)}
                    value={query}
                />
            </Content>
        </Wrapper>
    );
};

SerachBar.propTypes = {
    setSearchQuery: PropTypes.func,

}

export default SerachBar;

