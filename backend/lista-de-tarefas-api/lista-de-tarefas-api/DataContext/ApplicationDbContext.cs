using lista_de_tarefas_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lista_de_tarefas_api.DataContext
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<TaskModel> Tasks { get; set; }

    }
}
