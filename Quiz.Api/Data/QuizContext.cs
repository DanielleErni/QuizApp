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
            new QuizEntity { QuizId = 1, QuizName = "Geography" },
            new QuizEntity { QuizId = 2, QuizName = "History" },
            new QuizEntity { QuizId = 3, QuizName = "Science" },
            new QuizEntity { QuizId = 4, QuizName = "Math" },
            new QuizEntity { QuizId = 5, QuizName = "Literature" },
            new QuizEntity { QuizId = 6, QuizName = "Sports" },
            new QuizEntity { QuizId = 7, QuizName = "Music" },
            new QuizEntity { QuizId = 8, QuizName = "Movies" },
            new QuizEntity { QuizId = 9, QuizName = "Technology" },
            new QuizEntity { QuizId = 10, QuizName = "Art" }
        );

        modelBuilder.Entity<QuestionEntity>().HasData(
            // Geography Quiz
            new QuestionEntity { QuestionId = 1, Question = "What is the capital of Philippines?", Answer = "Metro Manila", QuizId = 1 },
            new QuestionEntity { QuestionId = 2, Question = "Which country has the largest land area?", Answer = "Russia", QuizId = 1 },
            new QuestionEntity { QuestionId = 3, Question = "What is the longest river in the world?", Answer = "Nile", QuizId = 1 },
            new QuestionEntity { QuestionId = 4, Question = "Which continent is known as the 'Dark Continent'?", Answer = "Africa", QuizId = 1 },
            new QuestionEntity { QuestionId = 5, Question = "What is the smallest country in the world?", Answer = "Vatican City", QuizId = 1 },

            // History Quiz
            new QuestionEntity { QuestionId = 6, Question = "Who was the first President of the United States?", Answer = "George Washington", QuizId = 2 },
            new QuestionEntity { QuestionId = 7, Question = "In which year did World War II end?", Answer = "1945", QuizId = 2 },
            new QuestionEntity { QuestionId = 8, Question = "Who discovered America?", Answer = "Christopher Columbus", QuizId = 2 },
            new QuestionEntity { QuestionId = 9, Question = "What was the name of the ship that brought the Pilgrims to America?", Answer = "Mayflower", QuizId = 2 },
            new QuestionEntity { QuestionId = 10, Question = "Who was the first man to step on the moon?", Answer = "Neil Armstrong", QuizId = 2 },

            // Science Quiz
            new QuestionEntity { QuestionId = 11, Question = "What is the chemical symbol for water?", Answer = "H2O", QuizId = 3 },
            new QuestionEntity { QuestionId = 12, Question = "What planet is known as the Red Planet?", Answer = "Mars", QuizId = 3 },
            new QuestionEntity { QuestionId = 13, Question = "What is the hardest natural substance on Earth?", Answer = "Diamond", QuizId = 3 },
            new QuestionEntity { QuestionId = 14, Question = "What is the speed of light?", Answer = "299,792,458 meters per second", QuizId = 3 },
            new QuestionEntity { QuestionId = 15, Question = "What is the largest organ in the human body?", Answer = "Skin", QuizId = 3 },

            // Math Quiz
            new QuestionEntity { QuestionId = 16, Question = "What is the value of Pi to two decimal places?", Answer = "3.14", QuizId = 4 },
            new QuestionEntity { QuestionId = 17, Question = "What is the square root of 64?", Answer = "8", QuizId = 4 },
            new QuestionEntity { QuestionId = 18, Question = "What is the formula for the area of a circle?", Answer = "πr²", QuizId = 4 },
            new QuestionEntity { QuestionId = 19, Question = "What is the sum of the angles in a triangle?", Answer = "180 degrees", QuizId = 4 },
            new QuestionEntity { QuestionId = 20, Question = "What is the Fibonacci sequence?", Answer = "A series of numbers where each number is the sum of the two preceding ones", QuizId = 4 },

            // Literature Quiz
            new QuestionEntity { QuestionId = 21, Question = "Who wrote 'Romeo and Juliet'?", Answer = "William Shakespeare", QuizId = 5 },
            new QuestionEntity { QuestionId = 22, Question = "What is the first book of the Bible?", Answer = "Genesis", QuizId = 5 },
            new QuestionEntity { QuestionId = 23, Question = "Who wrote 'Pride and Prejudice'?", Answer = "Jane Austen", QuizId = 5 },
            new QuestionEntity { QuestionId = 24, Question = "Who is the author of 'Harry Potter' series?", Answer = "J.K. Rowling", QuizId = 5 },
            new QuestionEntity { QuestionId = 25, Question = "What is the longest novel ever written?", Answer = "In Search of Lost Time by Marcel Proust", QuizId = 5 },

            // Sports Quiz
            new QuestionEntity { QuestionId = 26, Question = "What sport is known as the 'king of sports'?", Answer = "Soccer", QuizId = 6 },
            new QuestionEntity { QuestionId = 27, Question = "How many players are there in a baseball team?", Answer = "9", QuizId = 6 },
            new QuestionEntity { QuestionId = 28, Question = "What is the highest score in a single game of bowling?", Answer = "300", QuizId = 6 },
            new QuestionEntity { QuestionId = 29, Question = "Which country has won the most World Cups in soccer?", Answer = "Brazil", QuizId = 6 },
            new QuestionEntity { QuestionId = 30, Question = "What is the national sport of Canada?", Answer = "Lacrosse", QuizId = 6 },

            // Music Quiz
            new QuestionEntity { QuestionId = 31, Question = "Who is known as the 'King of Pop'?", Answer = "Michael Jackson", QuizId = 7 },
            new QuestionEntity { QuestionId = 32, Question = "What is the highest female voice type?", Answer = "Soprano", QuizId = 7 },
            new QuestionEntity { QuestionId = 33, Question = "Who composed the 'Four Seasons'?", Answer = "Antonio Vivaldi", QuizId = 7 },
            new QuestionEntity { QuestionId = 34, Question = "What is the name of the Beatles' first album?", Answer = "Please Please Me", QuizId = 7 },
            new QuestionEntity { QuestionId = 35, Question = "Who is the lead singer of the Rolling Stones?", Answer = "Mick Jagger", QuizId = 7 },

            // Movies Quiz
            new QuestionEntity { QuestionId = 36, Question = "Who directed 'Titanic'?", Answer = "James Cameron", QuizId = 8 },
            new QuestionEntity { QuestionId = 37, Question = "What is the highest-grossing film of all time?", Answer = "Avatar", QuizId = 8 },
            new QuestionEntity { QuestionId = 38, Question = "Who played the Joker in 'The Dark Knight'?", Answer = "Heath Ledger", QuizId = 8 },
            new QuestionEntity { QuestionId = 39, Question = "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?", Answer = "Frodo Baggins", QuizId = 8 },
            new QuestionEntity { QuestionId = 40, Question = "Who directed 'Pulp Fiction'?", Answer = "Quentin Tarantino", QuizId = 8 },

            // Technology Quiz
            new QuestionEntity { QuestionId = 41, Question = "Who is the founder of Microsoft?", Answer = "Bill Gates", QuizId = 9 },
            new QuestionEntity { QuestionId = 42, Question = "What does 'HTTP' stand for?", Answer = "HyperText Transfer Protocol", QuizId = 9 },
            new QuestionEntity { QuestionId = 43, Question = "What is the name of the first electronic general-purpose computer?", Answer = "ENIAC", QuizId = 9 },
            new QuestionEntity { QuestionId = 44, Question = "What year was the first iPhone released?", Answer = "2007", QuizId = 9 },
            new QuestionEntity { QuestionId = 45, Question = "What does 'CPU' stand for?", Answer = "Central Processing Unit", QuizId = 9 },

            // Art Quiz
            new QuestionEntity { QuestionId = 46, Question = "Who painted the Mona Lisa?", Answer = "Leonardo da Vinci", QuizId = 10 },
            new QuestionEntity { QuestionId = 47, Question = "What is the art of paper folding called?", Answer = "Origami", QuizId = 10 },
            new QuestionEntity { QuestionId = 48, Question = "Who painted the ceiling of the Sistine Chapel?", Answer = "Michelangelo", QuizId = 10 },
            new QuestionEntity { QuestionId = 49, Question = "What is the most famous painting in the Louvre?", Answer = "Mona Lisa", QuizId = 10 },
            new QuestionEntity { QuestionId = 50, Question = "Who is the artist behind 'The Starry Night'?", Answer = "Vincent van Gogh", QuizId = 10 }
        );
    }
}
