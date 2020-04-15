using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;

namespace TrabajoPracticas.Repositories
{
    public class PeliculaRepository
    {
        internal List<Pelicula> GetPeliculas()
        {
            List<Pelicula> peliculas = new List<Pelicula>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                peliculas = context.Peliculas.ToList();
            }
            return peliculas;
        }

        internal Pelicula GetPeliculaUsuario(int id_usuario)
        {

            Pelicula pelicula = new Pelicula();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                pelicula = context.Peliculas.Where(p => p.UsuarioId == id_usuario).FirstOrDefault();
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