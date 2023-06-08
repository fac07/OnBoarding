import axios from "axios";

export function getActitud(){

    return axios.get(process.env.REACT_APP_API_URL+'Actitud')
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}