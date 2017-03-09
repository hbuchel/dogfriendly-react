class LocationApi {
    static getAllLocations() {
        return fetch('http://localhost:3000/api/v1/cats').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default LocationApi;