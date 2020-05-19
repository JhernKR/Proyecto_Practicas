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
    public class Manga_ComicController : ApiController
    {
        // GET: api/Manga_Comic
        public IEnumerable<Manga_Comic> Get()
        {
            var repo = new Manga_ComicRepository();
            List<Manga_Comic> mangas = repo.GetMangas();
            return mangas;
        }

        // GET: api/Serie/5
        public IEnumerable<Manga_Comic> Get(int id)
        {
            var repo = new Manga_ComicRepository();
            List<Manga_Comic> manga = repo.GetMangaUsuario(id);
            return manga;
        }

        // POST: api/Serie
        public string Post([FromBody]Manga_Comic manga)
        {
            var repo = new Manga_ComicRepository();
            string result = repo.Save(manga);
            return result;
        }

        // PUT: api/Manga_Comic/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Manga_Comic/5
        public void Delete(int id)
        {
        }
    }
}
