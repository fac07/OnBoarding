import axios from "axios";

export function getPlantillaConocimientoPorPuesto(idPuesto){

    return axios.get(process.env.REACT_APP_API_URL+'PlantillaPuestoActividadPrioritaria/'+idPuesto)
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