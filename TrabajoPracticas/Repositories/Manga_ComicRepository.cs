using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Repositories
{
    public class Manga_ComicRepository
    {
        internal List<Manga_Comic> GetMangas()
        {
            List<Manga_Comic> mangas = new List<Manga_Comic>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                mangas = context.Mangas_Comics.Include(v => v.Usuario).ToList();
            }
            return mangas;
        }

        internal List<Manga_Comic> GetMangaUsuario(int id_usuario)
        {

            List<Manga_Comic> manga = new List<Manga_Comic>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                manga = context.Mangas_Comics.Include(v => v.Usuario).Where(p => p.UsuarioId == id_usuario).ToList();
            }
            return manga;

        }

        internal string Save(Manga_Comic manga)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            ReviewZoneContext context = new ReviewZoneContext();
            context.Mangas_Comics.Add(manga);
            context.SaveChanges();
            return "Review creada, muchas gracias!";

        }
    }
}