using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Repositories
{
    public class PeliculaRepository
    {
        internal List<Pelicula> GetPeliculas()
        {
            List<Pelicula> peliculas = new List<Pelicula>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                peliculas = context.Peliculas.Include(v => v.Usuario).ToList();
            }
            return peliculas;
        }

        internal List<Pelicula> GetPeliculaUsuario(int id_usuario)
        {

            List<Pelicula> pelicula = new List<Pelicula>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                pelicula = context.Peliculas.Include(v => v.Usuario).Where(p => p.UsuarioId == id_usuario).ToList();
            }
            return pelicula;

        }

        internal string Save(Pelicula pelicula)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            ReviewZoneContext context = new ReviewZoneContext();
            context.Peliculas.Add(pelicula);
            context.SaveChanges();
            return "Review creada, muchas gracias!";

        }
    }
}