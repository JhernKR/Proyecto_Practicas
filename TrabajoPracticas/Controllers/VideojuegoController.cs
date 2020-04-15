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
    public class VideojuegoController : ApiController
    {
        // GET: api/Videojuego
        public IEnumerable<Videojuego> Get()
        {
            var repo = new VideojuegoRepository();
            List<Videojuego> videojuegos = repo.GetVideojuegos();
            return videojuegos;
        }

        // GET: api/Serie/5
        public Videojuego Get(int id)
        {
            var repo = new VideojuegoRepository();
            Videojuego videojuego = repo.GetVideojuegoUsuario(id);
            return videojuego;
        }

        // POST: api/Serie
        public string Post([FromBody]Videojuego videojuego)
        {
            var repo = new VideojuegoRepository();
            string result = repo.Save(videojuego);
            return result;
        }

        // PUT: api/Videojuego/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Videojuego/5
        public void Delete(int id)
        {
        }
    }
}
