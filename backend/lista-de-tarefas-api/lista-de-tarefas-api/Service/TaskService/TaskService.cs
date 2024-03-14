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

        public async Task<ServiceResponse<List<TaskModel>>> CreateTask(TaskModel newTask)
        {
            ServiceResponse<List<TaskModel>> serviceResponse = new ServiceResponse<List<TaskModel>>();

            try
            {
                if (newTask == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "Informar dados!";
                    serviceResponse.Success = false;

                    return serviceResponse;
                }

                _context.Add(newTask);
                await _context.SaveChangesAsync();

                serviceResponse.Data = _context.Tasks.ToList();


            }
            catch (Exception ex)
            {
                serviceResponse.Message = ex.Message;
                serviceResponse.Success = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<TaskModel>> GetTaskById(int id)
        {
            ServiceResponse<TaskModel> serviceResponse = new ServiceResponse<TaskModel>();

            try
            {
                TaskModel funcionario = _context.Tasks.FirstOrDefault(x => x.Id == id);

                if (funcionario == null)
                {
                    serviceResponse.Data = null;
                    serviceResponse.Message = "Tarefa não localizada!";
                    serviceResponse.Success = false;
                }

                serviceResponse.Data = funcionario;

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
