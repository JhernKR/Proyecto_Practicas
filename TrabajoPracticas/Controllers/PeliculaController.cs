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
    public class PeliculaController : ApiController
    {
        // GET: api/Pelicula
        public IEnumerable<Pelicula> Get()
        {
            var repo = new PeliculaRepository();
            List<Pelicula> peliculas = repo.GetPeliculas();
            return peliculas;
        }

        // GET: api/Serie/5
        public Pelicula Get(int id)
        {
            var repo = new PeliculaRepository();
            Pelicula pelicula = repo.GetPeliculaUsuario(id);
            return pelicula;
        }

        // POST: api/Serie
        public string Post([FromBody]Pelicula pelicula)
        {
            var repo = new PeliculaRepository();
            string result = repo.Save(pelicula);
            return result;
        }

        // PUT: api/Pelicula/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Pelicula/5
        public void Delete(int id)
        {
        }
    }
}
