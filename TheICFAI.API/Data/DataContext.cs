using Microsoft.EntityFrameworkCore;
using TheICFAI.API.Models;

namespace TheICFAI.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        public DbSet<Value> Values{ get; set; }
    }
}