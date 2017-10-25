

function fetchTrack(artistName, trackName) {

    let url = "";
    if (artistName === "") {
        url = "http://localhost:5000/spotify/album/" + trackName;
    }
    else {
        url = "http://localhost:5000/spotify/album/" + artistName + "/" + trackName;
    }

    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            throw error;
        });
}

export function getSpotifyTrack(artistName, trackName) {
    return dispatch => {
        return fetchTrack(artistName, trackName)
            .then(data => {
                dispatch(setSpotifyTrack(data));
                dispatch(setSpotifyTrackDetails(data));
            })
            .catch(error => {
                throw error;
            })
    }
}