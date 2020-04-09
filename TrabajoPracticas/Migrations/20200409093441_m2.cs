using Microsoft.EntityFrameworkCore.Migrations;

namespace TrabajoPracticas.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animes_Usuario_UsuarioId",
                table: "Animes");

            migrationBuilder.DropForeignKey(
                name: "FK_Mangas_Comics_Usuario_UsuarioId",
                table: "Mangas_Comics");

            migrationBuilder.DropForeignKey(
                name: "FK_Peliculas_Usuario_UsuarioId",
                table: "Peliculas");

            migrationBuilder.DropForeignKey(
                name: "FK_Series_Usuario_UsuarioId",
                table: "Series");

            migrationBuilder.DropForeignKey(
                name: "FK_Videojuegos_Usuario_UsuarioId",
                table: "Videojuegos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario");

            migrationBuilder.RenameTable(
                name: "Usuario",
                newName: "Usuarios");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animes_Usuarios_UsuarioId",
                table: "Animes",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Mangas_Comics_Usuarios_UsuarioId",
                table: "Mangas_Comics",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Peliculas_Usuarios_UsuarioId",
                table: "Peliculas",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Series_Usuarios_UsuarioId",
                table: "Series",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Videojuegos_Usuarios_UsuarioId",
                table: "Videojuegos",
                column: "UsuarioId",
                principalTable: "Usuarios",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animes_Usuarios_UsuarioId",
                table: "Animes");

            migrationBuilder.DropForeignKey(
                name: "FK_Mangas_Comics_Usuarios_UsuarioId",
                table: "Mangas_Comics");

            migrationBuilder.DropForeignKey(
                name: "FK_Peliculas_Usuarios_UsuarioId",
                table: "Peliculas");

            migrationBuilder.DropForeignKey(
                name: "FK_Series_Usuarios_UsuarioId",
                table: "Series");

            migrationBuilder.DropForeignKey(
                name: "FK_Videojuegos_Usuarios_UsuarioId",
                table: "Videojuegos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Usuarios",
                table: "Usuarios");

            migrationBuilder.RenameTable(
                name: "Usuarios",
                newName: "Usuario");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Usuario",
                table: "Usuario",
                column: "UsuarioId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animes_Usuario_UsuarioId",
                table: "Animes",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Mangas_Comics_Usuario_UsuarioId",
                table: "Mangas_Comics",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Peliculas_Usuario_UsuarioId",
                table: "Peliculas",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Series_Usuario_UsuarioId",
                table: "Series",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Videojuegos_Usuario_UsuarioId",
                table: "Videojuegos",
                column: "UsuarioId",
                principalTable: "Usuario",
                principalColumn: "UsuarioId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
