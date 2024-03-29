﻿using lista_de_tarefas_api.Models;
using lista_de_tarefas_api.Service.TaskService;
using Microsoft.AspNetCore.Mvc;

namespace lista_de_tarefas_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskInterface _taskInterface;

        public TaskController(ITaskInterface taskInterface)
        {
            _taskInterface = taskInterface;
        }

        [HttpGet]
        public async Task<ActionResult<ServiceResponse<List<TaskModel>>>> GetTasks()
        {
            return Ok(await _taskInterface.GetTasks());
        }

        [HttpPost]
        public async Task<ActionResult<ServiceResponse<List<TaskModel>>>> CreateTask(TaskModel newTask)
        {
            return Ok(await _taskInterface.CreateTask(newTask));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ServiceResponse<TaskModel>>> GetTaskById(int id)
        {
            ServiceResponse<TaskModel> serviceResponse = await _taskInterface.GetTaskById(id);

            return Ok(serviceResponse);
        }

        [HttpPut]
        public async Task<ActionResult<ServiceResponse<List<TaskModel>>>> UpdateTask(TaskModel taskToEdit)
        {
            ServiceResponse<List<TaskModel>> serviceResponse = await _taskInterface.UpdateTask(taskToEdit);

            return Ok(serviceResponse);
        }

        [HttpDelete]
        public async Task<ActionResult<ServiceResponse<List<TaskModel>>>> DeleteTask(int id)
        {
            ServiceResponse<List<TaskModel>> serviceResponse = await _taskInterface.DeleteTask(id);

            return Ok(serviceResponse);
        }
    }
}
