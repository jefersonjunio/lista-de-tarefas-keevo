using lista_de_tarefas_api.Models;

namespace lista_de_tarefas_api.Service.TaskService
{
    public interface ITaskInterface
    {
        Task<ServiceResponse<List<TaskModel>>> GetTasks();
        Task<ServiceResponse<List<TaskModel>>> CreateTask(TaskModel newTask);
        Task<ServiceResponse<TaskModel>> GetTaskById(int id);

    }
}
