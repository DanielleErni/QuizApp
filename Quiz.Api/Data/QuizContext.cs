using Microsoft.EntityFrameworkCore;
using Quiz.Api.Models;

namespace Quiz.Api.Data;

public class QuizContext : DbContext
{
    public QuizContext(DbContextOptions<QuizContext> options) : base(options)
    {
    }

    public DbSet<UsersEntity> Users { get; set; }
    public DbSet<QuizEntity> Quiz { get; set; }
    public DbSet<QuestionEntity> Questions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<UsersEntity>().HasData(
            new UsersEntity
            {
                Id = Guid.NewGuid(),
                Username = "admin",
                Password = "admin",
                Role = "admin"
            },
            new UsersEntity
            {
                Id = Guid.NewGuid(),
                Username = "user",
                Password = "user",
                Role = "user"
            }
        );
    }
}
