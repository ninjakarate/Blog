using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace BlogWebApi;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options)
        : base(options)
    {
    }

    public DbSet<BlogPost> Posts { get; set; } = null!;
}
