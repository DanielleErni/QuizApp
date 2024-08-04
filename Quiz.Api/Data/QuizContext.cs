using Microsoft.EntityFrameworkCore;
using Quiz.Api.Models;

namespace Quiz.Api.Data;

public class QuizContext(DbContextOptions<QuizContext> options) : DbContext(options)
{
    public DbSet<UsersEntity> Users { get; set; }
    public DbSet<QuizEntity> Quiz { get; set; }
    public DbSet<QuestionEntity> Questions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("SQL_Latin1_General_CP1_CI_AS");

        modelBuilder.Entity<UsersEntity>(entity=>{
            entity.Property(e => e.Username).UseCollation("SQL_Latin1_General_CP1_CI_AS");
            entity.Property(e => e.Password).UseCollation("SQL_Latin1_General_CP1_CI_AS");
        });
            
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

        modelBuilder.Entity<QuizEntity>().HasData(
            new QuizEntity
            {
                QuizId = 1,
                QuizName = "Geography"
            },
            new QuizEntity
            {
                QuizId = 2,
                QuizName = "GeographyV2"
            }
        );

        modelBuilder.Entity<QuestionEntity>().HasData(
            new QuestionEntity
            {
                QuestionId = 1,
                Question = "What is the capital of Philippines",
                Answer = "metro manila",
                QuizId = 1 
            },
            new QuestionEntity
            {
                QuestionId = 2,
                Question = "Which country has the largest land area?",
                Answer = "Russia",
                QuizId = 2 
            },
            new QuestionEntity
            {
                QuestionId = 3,
                Question = "What is the longest river in the world?",
                Answer = "Nile",
                QuizId = 1 
            },
            new QuestionEntity
            {
                QuestionId = 4,
                Question = "Which continent is known as the 'Dark Continent'?",
                Answer = "Africa",
                QuizId = 1 
            }
        );
    }
}
