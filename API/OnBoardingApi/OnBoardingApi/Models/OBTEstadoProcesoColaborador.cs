//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnBoardingApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class OBTEstadoProcesoColaborador
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public OBTEstadoProcesoColaborador()
        {
            this.OBTProcesoColaborador = new HashSet<OBTProcesoColaborador>();
        }
    
        public int CodigoEstadoProcesoColaborador { get; set; }
        public string Descripcion { get; set; }
        public string AccionRealizada { get; set; }
        public bool Activo { get; set; }
        public bool Eliminado { get; set; }
        public string UsuarioInserto { get; set; }
        public System.DateTime FechaInserto { get; set; }
        public string UsuarioModifico { get; set; }
        public Nullable<System.DateTime> FechaModifico { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OBTProcesoColaborador> OBTProcesoColaborador { get; set; }
    }
}