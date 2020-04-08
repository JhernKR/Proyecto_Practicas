using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TrabajoPracticas.Migrations
{
    public partial class m1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    UsuarioId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Nombre = table.Column<string>(nullable: true),
                    Apellidos = table.Column<string>(nullable: true),
                    Nombreusuario = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.UsuarioId);
                });

            migrationBuilder.CreateTable(
                name: "Animes",
                columns: table => new
                {
                    AnimeId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    Num_cap = table.Column<int>(nullable: false),
                    Dur_cap = table.Column<string>(nullable: true),
                    Sinopsis = table.Column<string>(nullable: true),
                    Op_personal = table.Column<string>(nullable: true),
                    Val_personal = table.Column<int>(nullable: false),
                    Generos = table.Column<string>(nullable: true),
                    Productora = table.Column<string>(nullable: true),
                    Emision = table.Column<bool>(nullable: false),
                    UsuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Animes", x => x.AnimeId);
                    table.ForeignKey(
                        name: "FK_Animes_Usuario_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Mangas_Comics",
                columns: table => new
                {
                    Manga_ComicId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    Tomos = table.Column<int>(nullable: false),
                    Sinopsis = table.Column<string>(nullable: true),
                    Op_personal = table.Column<string>(nullable: true),
                    Val_personal = table.Column<int>(nullable: false),
                    Autor = table.Column<string>(nullable: true),
                    Editorial = table.Column<string>(nullable: true),
                    Generos = table.Column<string>(nullable: true),
                    Artistas = table.Column<string>(nullable: true),
                    Emision = table.Column<bool>(nullable: false),
                    UsuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mangas_Comics", x => x.Manga_ComicId);
                    table.ForeignKey(
                        name: "FK_Mangas_Comics_Usuario_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Peliculas",
                columns: table => new
                {
                    PeliculaId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    Duracion = table.Column<string>(nullable: true),
                    Sinopsis = table.Column<string>(nullable: true),
                    Reparto = table.Column<string>(nullable: true),
                    Op_personal = table.Column<string>(nullable: true),
                    Val_personal = table.Column<int>(nullable: false),
                    Generos = table.Column<string>(nullable: true),
                    UsuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Peliculas", x => x.PeliculaId);
                    table.ForeignKey(
                        name: "FK_Peliculas_Usuario_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Series",
                columns: table => new
                {
                    SerieId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    Num_capitulos = table.Column<int>(nullable: false),
                    Duracion_cap = table.Column<string>(nullable: true),
                    Sinopsis = table.Column<string>(nullable: true),
                    Op_personal = table.Column<string>(nullable: true),
                    Val_personal = table.Column<int>(nullable: false),
                    Reparto = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true),
                    Guion = table.Column<string>(nullable: true),
                    Productora = table.Column<string>(nullable: true),
                    Generos = table.Column<string>(nullable: true),
                    Emision = table.Column<bool>(nullable: false),
                    UsuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Series", x => x.SerieId);
                    table.ForeignKey(
                        name: "FK_Series_Usuario_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Videojuegos",
                columns: table => new
                {
                    VideojuegoId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Titulo = table.Column<string>(nullable: true),
                    Duracion_aprox = table.Column<string>(nullable: true),
                    Sinopsis = table.Column<string>(nullable: true),
                    Op_personal = table.Column<string>(nullable: true),
                    Val_personal = table.Column<int>(nullable: false),
                    Plataformas = table.Column<string>(nullable: true),
                    Requisitos = table.Column<string>(nullable: true),
                    Company = table.Column<string>(nullable: true),
                    Generos = table.Column<string>(nullable: true),
                    UsuarioId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Videojuegos", x => x.VideojuegoId);
                    table.ForeignKey(
                        name: "FK_Videojuegos_Usuario_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuario",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Usuario",
                columns: new[] { "UsuarioId", "Apellidos", "Correo", "Nombre", "Nombreusuario", "Password" },
                values: new object[] { 1, "Hernandez", "joheto@gmail.com", "Josep", "joheto", "1234" });

            migrationBuilder.InsertData(
                table: "Animes",
                columns: new[] { "AnimeId", "Dur_cap", "Emision", "Generos", "Num_cap", "Op_personal", "Productora", "Sinopsis", "Titulo", "UsuarioId", "Val_personal" },
                values: new object[] { 1, "20 min", false, "Aventura, Acción", 26, "Muy entretenido", "Banday Visual", "Las aventuras futuristas de un cazarrecompensas y sus compañeros en la búsqueda de criminales.", "Cowboy Bebop", 1, 9 });

            migrationBuilder.InsertData(
                table: "Mangas_Comics",
                columns: new[] { "Manga_ComicId", "Artistas", "Autor", "Editorial", "Emision", "Generos", "Op_personal", "Sinopsis", "Titulo", "Tomos", "UsuarioId", "Val_personal" },
                values: new object[] { 1, "Kentaro Miura", "Kentaro Miura", "Hakushenka", true, "Acción, aventura, demonios", "Maravilloso", "Ambientado en una tierra inspirada y con amplias similitudes a la Europa medieval, en el cual se cuenta la historia de Guts", "Berserk", 40, 1, 10 });

            migrationBuilder.InsertData(
                table: "Peliculas",
                columns: new[] { "PeliculaId", "Duracion", "Generos", "Op_personal", "Reparto", "Sinopsis", "Titulo", "UsuarioId", "Val_personal" },
                values: new object[] { 1, "139 min", "Drama, Thriller, Sátira", "Muy buena", "Edward Norton, Brad Pitt", "Un joven hastiado de su gris y monótona vida lucha contra el insomnio. En un viaje conoce a un carismático vendedor de jabón que sostiene una teoría muy particular", "El club de la lucha", 1, 10 });

            migrationBuilder.InsertData(
                table: "Series",
                columns: new[] { "SerieId", "Direccion", "Duracion_cap", "Emision", "Generos", "Guion", "Num_capitulos", "Op_personal", "Productora", "Reparto", "Sinopsis", "Titulo", "UsuarioId", "Val_personal" },
                values: new object[] { 1, "Dan Harmon", "20 min", false, "Comedia", "Dan Harmon", 35, "Muy divertida", "NBC", "Joel McHale, Danny Pudi, Gillian Jacobs, Chevy Chase, Alison Brie", "Un abogado que es revocado debe regresar a la universidad el grupo que junta comienza a reunirse y a aprender uno del otro.", "Community", 1, 9 });

            migrationBuilder.InsertData(
                table: "Videojuegos",
                columns: new[] { "VideojuegoId", "Company", "Duracion_aprox", "Generos", "Op_personal", "Plataformas", "Requisitos", "Sinopsis", "Titulo", "UsuarioId", "Val_personal" },
                values: new object[] { 1, "2K", "14/20 horas", "Shooter", "Muy interesante", "PC, PlayStation, Xbox", "Procesador de doble núcleo a 3 GHz, Memoria: 2 GB. Tarjeta de vídeo: Tarjeta de vídeo con 512 MB de RAM(NVidia(R) Geforce(R) 7900 GT o superior).", "Ambientado durante una ucronía del año 1960, en Rapture, una ciudad distópica/antiutópica ficticia en el fondo del océano Atlántico.", "Bioshock", 1, 9 });

            migrationBuilder.CreateIndex(
                name: "IX_Animes_UsuarioId",
                table: "Animes",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Mangas_Comics_UsuarioId",
                table: "Mangas_Comics",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Peliculas_UsuarioId",
                table: "Peliculas",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Series_UsuarioId",
                table: "Series",
                column: "UsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_Videojuegos_UsuarioId",
                table: "Videojuegos",
                column: "UsuarioId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Animes");

            migrationBuilder.DropTable(
                name: "Mangas_Comics");

            migrationBuilder.DropTable(
                name: "Peliculas");

            migrationBuilder.DropTable(
                name: "Series");

            migrationBuilder.DropTable(
                name: "Videojuegos");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
