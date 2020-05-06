using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Repositories
{
    public class VideojuegoRepository
    {
        internal List<Videojuego> GetVideojuegos()
        {
            List<Videojuego> videojuegos = new List<Videojuego>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                videojuegos = context.Videojuegos.Include(v => v.Usuario).ToList();
            }
            return videojuegos;
        }

        internal Videojuego GetVideojuegoUsuario(int id_usuario)
        {

            Videojuego videojuego = new Videojuego();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                videojuego = context.Videojuegos.Where(p => p.UsuarioId == id_usuario).FirstOrDefault();
            }
            return videojuego;

        }

        internal string Save(Videojuego videojuego)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            ReviewZoneContext context = new ReviewZoneContext();
            context.Videojuegos.Add(videojuego);
            context.SaveChanges();
            return "Review creada, muchas gracias!";

        }
    }
}