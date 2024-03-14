using lista_de_tarefas_api.Enums;

namespace lista_de_tarefas_api.Models
{
    public class TaskModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public StatusEnum Status { get; set; }
    }
}
