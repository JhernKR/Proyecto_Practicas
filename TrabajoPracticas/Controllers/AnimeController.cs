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
    public class AnimeController : ApiController
    {
        // GET: api/Anime
        public IEnumerable<Anime> Get()
        {
            var repo = new AnimeRepository();
            List<Anime> animes = repo.GetAnimes();
            return animes;
        }

        // GET: api/Serie/5
        public IEnumerable<Anime> Get(int id)
        {
            var repo = new AnimeRepository();
            List<Anime> anime = repo.GetAnimeUsuario(id);
            return anime;
        }

        // POST: api/Serie
        public string Post([FromBody]Anime anime)
        {
            var repo = new AnimeRepository();
            string result = repo.Save(anime);
            return result;
        }

        // PUT: api/Anime/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Anime/5
        public void Delete(int id)
        {
        }
    }
}
