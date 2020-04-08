using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Manga_Comic
    {
        public Manga_Comic() {

        }

        public Manga_Comic(int manga_comicId, string titulo, int tomos, string sinopsis, string op_personal, int val_personal,
            string autor, string editorial, string generos, string artistas, bool emision, int usuarioId) {

            Manga_ComicId = manga_comicId;
            Titulo = titulo;
            Tomos = tomos;
            Sinopsis = sinopsis;
            Op_personal = op_personal;
            Val_personal = val_personal;
            Autor = autor;
            Editorial = editorial;
            Generos = generos;
            Artistas = artistas;
            UsuarioId = usuarioId;
            Emision = emision;
        }

        public int Manga_ComicId { get; set; }
        public string Titulo { get; set; }
        public int Tomos { get; set; }
        public string Sinopsis { get; set; }
        public string Op_personal { get; set; }
        public int Val_personal { get; set; }
        public string Autor { get; set; }
        public string Editorial { get; set; }
        public string Generos { get; set; }
        public string Artistas { get; set; }
        public bool Emision { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
    }
}