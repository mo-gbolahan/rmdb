import React from 'react';
import { useParams } from 'react-router-dom';

// Config
import { imageBaseURL, posterSize } from '../config';

// Components
import Actor from './Actor';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Spinner from './Spinner';

// Images
import NoImage from '../images/no_image.jpg';

// Hooks
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId)

    if (loading) return <Spinner />
    // if (error) return <div>Something is wrong ...</div>

    console.log(movie.actors)
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />

            <Grid header='Actors'>

                {movie.actors.map(actor => (
                    <Actor
                        key={actor.id}
                        name={actor.name}
                        character={actor.character}
                        imageURL={
                            actor.profile_path ?
                                imageBaseURL + posterSize + actor.profile_path :
                                NoImage
                        }
                    />
                ))}  
            </Grid> 
            
        </>
    )
}


export default Movie;