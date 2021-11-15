import React from 'react';

// // API
// import Api from '../Api';

// // Config
import { imageBaseURL, backdropSize, posterSize, API_KEY } from '../config';

// Components
import Button from './Button';
import Grid from './Grid'
import HeroImage from './HeroImage';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Thumb from './Thumb';



// Hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// // Image
import noImage from '../images/no_image.jpg';
// import { backdropSize, imageBaseURL } from '../config';

const Home = () => {

    const {
        state,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        setIsLoadingMore
    } = useHomeFetch();

    // state.results[0] = null;
    // console.log(state.results[0]);
    // console.log(error);

    // if (error) return <div>Something is Wrong ...</div>;
    
    return (
        <>
            {!searchQuery && state.results[0] ? (
                <HeroImage
                    image={`${imageBaseURL}${backdropSize}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            ) : null}
            <SearchBar setSearchQuery={setSearchQuery} />
            <Grid header={!searchQuery ? 'Popular Movies' : 'Your Search Result'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        // clickable={true} or clickable  (either works just fine)
                        clickable
                        image={movie.poster_path ? imageBaseURL + posterSize + movie.poster_path : noImage}

                        movieId={movie.id}
                    />
                ))}
            </Grid>

            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && <Button text='load more' callback={() => setIsLoadingMore(true)} />}

        </>
    )
};


export default Home;