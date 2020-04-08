using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Anime
    {
        public Anime() {

        }

        public Anime(int animeId, string titulo, int num_cap, string dur_cap, string sinopsis, string op_personal,
            int val_personal, string generos, string productora, bool emision, int usuarioId) {

            AnimeId = animeId;
            Titulo = titulo;
            Num_cap = num_cap;
            Dur_cap = dur_cap;
            Sinopsis = sinopsis;
            Op_personal = op_personal;
            Val_personal = val_personal;
            Generos = generos;
            Productora = productora;
            UsuarioId = usuarioId;
            Emision = emision;
        }

        public int AnimeId { get; set; }
        public string Titulo { get; set; }
        public int Num_cap { get; set; }
        public string Dur_cap { get; set; }
        public string Sinopsis { get; set; }
        public string Op_personal { get; set; }
        public int Val_personal { get; set; }
        public string Generos { get; set; }
        public string Productora { get; set; }
        public bool Emision { get; set; }

        public int UsuarioId { get; set; }

        public Usuario Usuario { get; set; }
    }
}