import { useState, useEffect } from 'react';

// Api
import Api from '../Api';

// session state from base
import { isPersistedState } from '../base';



export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( () => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);
                
                const movie = (await Api.fetchMovie(movieId)).data;
                
                const credits = (await Api.fetchCredit(movieId)).data;
                // console.log(movie)

                // Get director
                const directors = credits.crew.filter(crew => crew.job === 'Director');

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
                // console.log(directors)

                setLoading(false);


            } catch (error) {
                setError(true)
            }
        };

        const sessionState = isPersistedState(movieId)

        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;

        }



        fetchData();
    }, [movieId])
    

    // Write to session Storage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])

    return { state, loading, error };
}