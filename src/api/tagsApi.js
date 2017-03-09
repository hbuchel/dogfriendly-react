class TagsApi {
    static getAllTags() {
        return fetch('http://localhost:3000/api/v1/tags').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default TagsApi;