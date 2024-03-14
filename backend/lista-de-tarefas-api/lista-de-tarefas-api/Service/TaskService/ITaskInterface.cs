using lista_de_tarefas_api.Models;

namespace lista_de_tarefas_api.Service.TaskService
{
    public interface ITaskInterface
    {
        Task<ServiceResponse<List<TaskModel>>> GetTasks();
       
    }
}
