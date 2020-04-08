using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Videojuego
    {
        public Videojuego() {

        }

        public Videojuego(int videojuegoId, string titulo, string duracion_aprox, string sinopsis, string op_personal, int val_personal,
            string plataformas, string requisitos, string company, string generos, int usuarioId) {

            VideojuegoId = videojuegoId;
            Titulo = titulo;
            Duracion_aprox = duracion_aprox;
            Sinopsis = sinopsis;
            Op_personal = op_personal;
            Val_personal = val_personal;
            Plataformas = plataformas;
            Requisitos = requisitos;
            Company = company;
            Generos = generos;
            UsuarioId = usuarioId;

        }

        public int VideojuegoId { get; set; }
        public string Titulo { get; set; }
        public string Duracion_aprox { get; set; }
        public string Sinopsis { get; set; }
        public string Op_personal { get; set; }
        public int Val_personal { get; set; }
        public string Plataformas { get; set; }
        public string Requisitos { get; set; }
        public string Company { get; set; }
        public string Generos { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
    }
}