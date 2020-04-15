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
    public class UsuarioController : ApiController
    {
        // GET: api/Usuario
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Usuario/5
        public Usuario Get(string nom_usuario)
        {
            var repo = new UsuarioRepository();
            Usuario usuario = repo.GetUsuario(nom_usuario);
            return usuario;
        }

        public UsuarioDTO GetDTO(string nom_usu)
        {
            var repo = new UsuarioRepository();
            UsuarioDTO usuario = repo.GetUsuarioDTO(nom_usu);
            return usuario;
        }

        public Usuario Get(string nom_usu, string pass)
        {
            var repo = new UsuarioRepository();
            Usuario usuario = repo.ComprobarUsuario(nom_usu, pass);
            return usuario;
        }

        // POST: api/Usuario
        public string Post([FromBody]Usuario usuario)
        {
            var repo = new UsuarioRepository();
            string result = repo.Save(usuario);
            return result;
        }

        // PUT: api/Usuario/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuario/5
        public void Delete(int id)
        {
        }
    }
}
