using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TrabajoPracticas.Models
{
    public class Serie
    {
        public Serie() {

        }

        public Serie(int serieId, string titulo, int num_capitulos, string duracion_cap, string sinopsis, string op_personal, 
            int val_personal, string reparto, string direccion, string guion, string productora, string generos, bool emision, int usuarioId) {

            SerieId = serieId;
            Titulo = titulo;
            Num_capitulos = num_capitulos;
            Duracion_cap = duracion_cap;
            Sinopsis = sinopsis;
            Op_personal = op_personal;
            Val_personal = val_personal;
            Reparto = reparto;
            Direccion = direccion;
            Guion = guion;
            Productora = productora;
            Generos = generos;
            Emision = emision;
            UsuarioId = usuarioId;

        }

        public int SerieId { get; set; }
        public string Titulo { get; set; }
        public int Num_capitulos { get; set; }
        public string Duracion_cap { get; set; }
        public string Sinopsis { get; set; }
        public string Op_personal { get; set; }
        public int Val_personal { get; set; }
        public string Reparto { get; set; }
        public string Direccion { get; set; }
        public string Guion { get; set; }
        public string Productora { get; set; }
        public string Generos { get; set; }
        public bool Emision { get; set; }

        public int UsuarioId { get; set; }
    }
}