using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using OnBoardingApi.Models;

namespace OnBoardingApi.Api
{
    [EnableCors("*", "*", "*")]
    public class PlantillaPuestoActividadPrioritariaController : ApiController
    {
        dbOnboardingCCEntities db = new dbOnboardingCCEntities();
        // GET: api/PlantillaPuestoActividadPrioritaria
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/PlantillaPuestoActividadPrioritaria/{id}")]
        // GET: api/PlantillaPuestoActividadPrioritaria/5
        public IHttpActionResult Get(string id)
        {
            db.Configuration.LazyLoadingEnabled = false;
            db.Configuration.ProxyCreationEnabled = false;
            List<OBPPlantillaConocimientoPorPuesto_Result1> Lista = db.OBPPlantillaConocimientoPorPuesto(id).ToList();
            return Ok(Lista);
        }

        // POST: api/PlantillaPuestoActividadPrioritaria
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PlantillaPuestoActividadPrioritaria/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PlantillaPuestoActividadPrioritaria/5
        public void Delete(int id)
        {
        }
    }
}
