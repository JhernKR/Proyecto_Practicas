using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Pelicula
    {
        public Pelicula() {

        }

        public Pelicula(int peliculaId, string titulo, string duracion, string sinopsis, string reparto, string op_personal,
            int val_personal, string generos, int usuarioId) {

            PeliculaId = peliculaId;
            Titulo = titulo;
            Duracion = duracion;
            Sinopsis = sinopsis;
            Reparto = reparto;
            Op_personal = op_personal;
            Val_personal = val_personal;
            Generos = generos;
            UsuarioId = usuarioId;

        }

        public int PeliculaId { get; set; }
        public string Titulo { get; set; }
        public string Duracion { get; set; }
        public string Sinopsis { get; set; }
        public string Reparto { get; set; }
        public string Op_personal { get; set; }
        public int Val_personal { get; set; }
        public string Generos { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
    }
}