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
    public class PlantillaPuestoRecursoController : ApiController
    {
        dbOnboardingCCEntities db = new dbOnboardingCCEntities();
        // GET: api/PlantillaPuestoRecurso
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/PlantillaPuestoRecurso/{id}")]
        // GET: api/PlantillaPuestoRecurso/5
        public IHttpActionResult Get(string id)
        {
            db.Configuration.LazyLoadingEnabled = false;
            db.Configuration.ProxyCreationEnabled = false;
            List<OBPPlantillaRecursosPorPuesto_Result> Lista = db.OBPPlantillaRecursosPorPuesto(id).ToList();
            return Ok(Lista);
        }

        // POST: api/PlantillaPuestoRecurso
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PlantillaPuestoRecurso/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PlantillaPuestoRecurso/5
        public void Delete(int id)
        {
        }
    }
}
