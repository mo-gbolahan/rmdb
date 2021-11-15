// Convert time to hours and mintes
export const calcTime = time => {
    const hrs = Math.floor(time / 60);
    const mins = time % 60;
    return `${hrs}h ${mins}m`
};

// Convert a number to currency format
export const convCur = currency => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatter.format(currency);
}; 

export const isPersistedState = stateName => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState)
}