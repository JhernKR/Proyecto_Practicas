using TrabajoPracticas.Models;
using TrabajoPracticas.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TrabajoPracticas.Controllers
{
    public class SerieController : ApiController
    {
        // GET: api/Serie
        public IEnumerable<Serie> Get()
        {
            var repo = new SerieRepository();
            List<Serie> series = repo.GetSeries();
            return series;
        }

        // GET: api/Serie/5
        public Serie Get(int id)
        {
            var repo = new SerieRepository();
            Serie serie = repo.GetSerieUsuario(id);
            return serie;
        }

        // POST: api/Serie
        public string Post([FromBody]Serie serie)
        {
            var repo = new SerieRepository();
            string result = repo.Save(serie);
            return result;
        }

        // PUT: api/Serie/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Serie/5
        public void Delete(int id)
        {
        }
    }
}
