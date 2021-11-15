import React from 'react';

// proptypes
import PropTypes from 'prop-types';

// styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

// Components
import Thumb from '../Thumb';

// Config
import { imageBaseURL, posterSize } from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path ?
                        imageBaseURL + posterSize + movie.poster_path
                        : NoImage
                }
                clickable={false}
            />

            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>

                <div className='rating-directors'>
                    <div>
                        <h3>Rating</h3>
                        <div className='score'>{movie.vote_average}</div>
                    </div>
                    <div className='director'>
                            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(d => (
                                <p key={d.credit_id}>{ d.name}</p>
                            ))}                     
                    </div>

                </div>
            </Text>

        </Content>

    </Wrapper>
);

MovieInfo.propTypes = {
    movie: PropTypes.object,
}

export default MovieInfo;