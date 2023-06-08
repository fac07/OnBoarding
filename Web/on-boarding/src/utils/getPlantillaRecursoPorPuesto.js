import axios from "axios";

export function getPlantillaRecursoPorPuesto(idPuesto){

    return axios.get(process.env.REACT_APP_API_URL+'PlantillaPuestoRecurso/'+idPuesto)
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