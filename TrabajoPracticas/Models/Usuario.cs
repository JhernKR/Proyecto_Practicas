using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Usuario
    {
        public Usuario() {

        }

        public Usuario(int usuarioId, string nombre, string apellidos, string nombreusuario, string correo, string password) {
            UsuarioId = usuarioId;
            Nombre = nombre;
            Apellidos = apellidos;
            Nombreusuario = nombreusuario;
            Correo = correo;
            Password = password;
        }

        public int UsuarioId { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Nombreusuario { get; set; }
        public string Correo { get; set; }
        public string Password { get; set; }

        public List<Serie> Series { get; set; }
        public List<Pelicula> Peliculas { get; set; }
        public List<Videojuego> Videojuegos { get; set; }
        public List<Manga_Comic> Mangas_Comics { get; set; }
        public List<Anime> Animes { get; set; }
    }
}