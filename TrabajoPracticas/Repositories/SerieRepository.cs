using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Repositories
{
    public class SerieRepository
    {
        internal List<Serie> GetSeries()
        {
            List<Serie> series = new List<Serie>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                series = context.Series.Include(v => v.Usuario).ToList();
            }
            return series;
        }

        internal List<Serie> GetSerieUsuario(int id_usuario)
        {

            List<Serie> serie = new List<Serie>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                serie = context.Series.Include(v => v.Usuario).Where(p => p.UsuarioId == id_usuario).ToList();
            }
            return serie;

        }

        internal string Save(Serie serie)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            ReviewZoneContext context = new ReviewZoneContext();
            context.Series.Add(serie);
            context.SaveChanges();
            return "Review creada, muchas gracias!";

        }
    }
}