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
    public class RecursoController : ApiController
    {
        dbOnboardingCCEntities db = new dbOnboardingCCEntities();

        [HttpGet]
        [Route("api/Recurso")]
        // GET: api/Recurso
        public IHttpActionResult Get()
        {
            db.Configuration.LazyLoadingEnabled = false;
            db.Configuration.ProxyCreationEnabled = false;
            List<OBTRecurso> Lista = db.OBTRecurso.Where(x => x.Activo == true && x.Eliminado == false).ToList();
            return Ok(Lista);
        }

        // GET: api/Recurso/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Recurso
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Recurso/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Recurso/5
        public void Delete(int id)
        {
        }
    }
}
