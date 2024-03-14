using lista_de_tarefas_api.Enums;
using System.ComponentModel.DataAnnotations;

namespace lista_de_tarefas_api.Models
{
    public class TaskModel
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public StatusEnum Status { get; set; }
    }
}
