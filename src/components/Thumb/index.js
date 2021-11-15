import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

// styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ?  (
                <Link to={`/${movieId}`} >
                    <Image src={image} alt='movie-thumbnaill'/>
                </Link>
            ) : (
                <Image src={image} alt='movie-thumbnaill' />
            ) 
        }

    </div> 
);

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default Thumb;