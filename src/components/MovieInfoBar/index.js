import React from 'react';

import PropTypes from 'prop-types';


// Converters from base.js file
import { calcTime, convCur } from '../../base';

// styles 
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>

        <Content>
            <div className='col'>
                <p>Running time: {calcTime( time)}</p>
            </div>
            <div className='col'>
                <p>Budget: {convCur(budget)}</p>
            </div>
            <div className='col'>
                <p>Revenue: {convCur(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}

export default MovieInfoBar;