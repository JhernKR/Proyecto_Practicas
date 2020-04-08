using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.EntityFrameworkCore;

namespace TrabajoPracticas.Models
{
    public class ReviewZoneContext : DbContext
    {
        public DbSet<Serie> Series { get; set; }
        public DbSet<Pelicula> Peliculas { get; set; }
        public DbSet<Videojuego> Videojuegos { get; set; }
        public DbSet<Manga_Comic> Mangas_Comics { get; set; }
        public DbSet<Anime> Animes { get; set; }

        public ReviewZoneContext() {

        }

        public ReviewZoneContext(DbContextOptions options) : base(options) {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            if (!optionsBuilder.IsConfigured) {
                optionsBuilder.UseMySql("Server=localhost;Database=ReviewZone;Uid=root;Pwd='';SslMode = none");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Usuario>().HasData(new Usuario(1, "Josep", "Hernandez", "joheto", "joheto@gmail.com", "1234"));
            modelBuilder.Entity<Serie>().HasData(new Serie(1, "Community", 35, "20 min", "Un abogado que es revocado debe regresar a la universidad el grupo que junta comienza a reunirse y a aprender uno del otro.",
                "Muy divertida", 9, "Joel McHale, Danny Pudi, Gillian Jacobs, Chevy Chase, Alison Brie", "Dan Harmon", "Dan Harmon", "NBC", "Comedia", false, 1));
            modelBuilder.Entity<Pelicula>().HasData(new Pelicula(1, "El club de la lucha", "139 min", "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje conoce a un carismático vendedor de jabón que sostiene una teoría muy particular",
                "Edward Norton, Brad Pitt", "Muy buena", 10, "Drama, Thriller, Sátira", 1));
            modelBuilder.Entity<Videojuego>().HasData(new Videojuego(1, "Bioshock", "14/20 horas", "Ambientado durante una ucronía del año 1960, en Rapture, una ciudad distópica/antiutópica ficticia en el fondo del océano Atlántico.",
                "Muy interesante", 9, "PC, PlayStation, Xbox", "Procesador de doble núcleo a 3 GHz, Memoria: 2 GB. Tarjeta de vídeo: Tarjeta de vídeo con 512 MB de RAM(NVidia(R) Geforce(R) 7900 GT o superior).",
                "2K", "Shooter", 1));
            modelBuilder.Entity<Manga_Comic>().HasData(new Manga_Comic(1, "Berserk", 40, "Ambientado en una tierra inspirada y con amplias similitudes a la Europa medieval, en el cual se cuenta la historia de Guts",
                "Maravilloso", 10, "Kentaro Miura", "Hakushenka", "Acción, aventura, demonios", "Kentaro Miura", true, 1));
            modelBuilder.Entity<Anime>().HasData(new Anime(1, "Cowboy Bebop", 26, "20 min", "Las aventuras futuristas de un cazarrecompensas y sus compañeros en la búsqueda de criminales.",
                "Muy entretenido", 9, "Aventura, Acción", "Banday Visual", false, 1));
        }
    }
}