using lista_de_tarefas_api.DataContext;
using lista_de_tarefas_api.Models;

namespace lista_de_tarefas_api.Service.TaskService
{
    public class TaskService : ITaskInterface
    {
        private readonly ApplicationDbContext _context;

        public TaskService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<ServiceResponse<List<TaskModel>>> GetTasks()
        {
            ServiceResponse<List<TaskModel>> serviceResponse = new ServiceResponse<List<TaskModel>>();

            try
            {
                serviceResponse.Data = _context.Tasks.ToList();

                if (serviceResponse.Data.Count == 0)
                {
                    serviceResponse.Message = "Nenhuma tarefa encontrada!";
                }

            }
            catch (Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }
    }
}
