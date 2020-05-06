using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Repositories
{
    public class AnimeRepository
    {
        internal List<Anime> GetAnimes()
        {
            List<Anime> animes = new List<Anime>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                animes = context.Animes.Include(v => v.Usuario).ToList();
            }
            return animes;
        }

        internal Anime GetAnimeUsuario(int id_usuario)
        {

            Anime anime = new Anime();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                anime = context.Animes.Where(p => p.UsuarioId == id_usuario).FirstOrDefault();
            }
            return anime;

        }

        internal string Save(Anime anime)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            ReviewZoneContext context = new ReviewZoneContext();
            context.Animes.Add(anime);
            context.SaveChanges();
            return "Review creada, muchas gracias!";

        }
    }
}