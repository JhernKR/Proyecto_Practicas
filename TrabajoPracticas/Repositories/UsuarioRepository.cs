using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TrabajoPracticas.Models;
using System.Globalization;

namespace TrabajoPracticas.Repositories
{
    public class UsuarioRepository
    {
        internal Usuario GetUsuario(string nombre_usuario) {

            Usuario usuario = new Usuario();
            using (ReviewZoneContext context = new ReviewZoneContext()) {
                usuario = context.Usuarios.Where(p => p.Nombreusuario == nombre_usuario).FirstOrDefault();
            }
            return usuario;

        }

        public UsuarioDTO ToDTO(Usuario usuario)
        {
            return new UsuarioDTO(usuario.Nombre, usuario.Nombreusuario);
        }

        /*internal List<UsuarioDTO> RetrieveDTO()
        {

            List<UsuarioDTO> usuarios = new List<UsuarioDTO>();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                usuarios = context.Usuarios.Select(m => ToDTO(m)).ToList();
            }

            return usuarios;
        }*/

        internal UsuarioDTO GetUsuarioDTO(string nombre_usuario)
        {

            UsuarioDTO usuario = new UsuarioDTO();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                usuario = context.Usuarios.Select(m => ToDTO(m)).Where(p => p.Nombreusuario == nombre_usuario).FirstOrDefault();
            }
            return usuario;

        }

        internal Usuario ComprobarUsuario(string correo, string pass)
        {
            Usuario usuario = new Usuario();
            using (ReviewZoneContext context = new ReviewZoneContext())
            {
                usuario = context.Usuarios.Where(p => p.Nombreusuario == correo && p.Password == pass).FirstOrDefault();
            }
            return usuario;
        }

        internal string Save(Usuario usu) {

            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            List<Usuario> usuarios = new List<Usuario>();
            using (ReviewZoneContext context = new ReviewZoneContext()) {
                usuarios = context.Usuarios.ToList();
            }

            for (int i = 0; i < usuarios.Count; i++) {
                if (usuarios[i].Nombreusuario == usu.Nombreusuario) {
                    return "Este nombre de usuario ya existe.";
                }
                if (usuarios[i].Correo == usu.Correo) {
                    return "Este correo ya existe.";
                }
            }

            ReviewZoneContext context2 = new ReviewZoneContext();
            context2.Usuarios.Add(usu);
            context2.SaveChanges();
            return "El usuario se ha creado correctamente.";

        }
    }
}