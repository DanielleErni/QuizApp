using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Quiz.Api.Migrations
{
    /// <inheritdoc />
    public partial class SeedQuizData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("1a54a5ef-b73d-4f07-a7e0-f3c808d52647"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("1e4d9d82-f13d-486c-9de8-3c809c45cf24"));

            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 1,
                columns: new[] { "Answer", "Question" },
                values: new object[] { "Metro Manila", "What is the capital of Philippines?" });

            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 2,
                column: "QuizId",
                value: 1);

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "QuestionId", "Answer", "Question", "QuizId" },
                values: new object[,]
                {
                    { 5, "Vatican City", "What is the smallest country in the world?", 1 },
                    { 6, "George Washington", "Who was the first President of the United States?", 2 },
                    { 7, "1945", "In which year did World War II end?", 2 },
                    { 8, "Christopher Columbus", "Who discovered America?", 2 },
                    { 9, "Mayflower", "What was the name of the ship that brought the Pilgrims to America?", 2 },
                    { 10, "Neil Armstrong", "Who was the first man to step on the moon?", 2 }
                });

            migrationBuilder.UpdateData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 2,
                column: "QuizName",
                value: "History");

            migrationBuilder.InsertData(
                table: "Quiz",
                columns: new[] { "QuizId", "QuizName" },
                values: new object[,]
                {
                    { 3, "Science" },
                    { 4, "Math" },
                    { 5, "Literature" },
                    { 6, "Sports" },
                    { 7, "Music" },
                    { 8, "Movies" },
                    { 9, "Technology" },
                    { 10, "Art" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("1b3d5ad6-f7cf-4c90-83c6-b90e88c1196e"), "admin", "admin", "admin" },
                    { new Guid("47fec716-d074-4d63-912b-947a7015fc87"), "user", "user", "user" }
                });

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "QuestionId", "Answer", "Question", "QuizId" },
                values: new object[,]
                {
                    { 11, "H2O", "What is the chemical symbol for water?", 3 },
                    { 12, "Mars", "What planet is known as the Red Planet?", 3 },
                    { 13, "Diamond", "What is the hardest natural substance on Earth?", 3 },
                    { 14, "299,792,458 meters per second", "What is the speed of light?", 3 },
                    { 15, "Skin", "What is the largest organ in the human body?", 3 },
                    { 16, "3.14", "What is the value of Pi to two decimal places?", 4 },
                    { 17, "8", "What is the square root of 64?", 4 },
                    { 18, "πr²", "What is the formula for the area of a circle?", 4 },
                    { 19, "180 degrees", "What is the sum of the angles in a triangle?", 4 },
                    { 20, "A series of numbers where each number is the sum of the two preceding ones", "What is the Fibonacci sequence?", 4 },
                    { 21, "William Shakespeare", "Who wrote 'Romeo and Juliet'?", 5 },
                    { 22, "Genesis", "What is the first book of the Bible?", 5 },
                    { 23, "Jane Austen", "Who wrote 'Pride and Prejudice'?", 5 },
                    { 24, "J.K. Rowling", "Who is the author of 'Harry Potter' series?", 5 },
                    { 25, "In Search of Lost Time by Marcel Proust", "What is the longest novel ever written?", 5 },
                    { 26, "Soccer", "What sport is known as the 'king of sports'?", 6 },
                    { 27, "9", "How many players are there in a baseball team?", 6 },
                    { 28, "300", "What is the highest score in a single game of bowling?", 6 },
                    { 29, "Brazil", "Which country has won the most World Cups in soccer?", 6 },
                    { 30, "Lacrosse", "What is the national sport of Canada?", 6 },
                    { 31, "Michael Jackson", "Who is known as the 'King of Pop'?", 7 },
                    { 32, "Soprano", "What is the highest female voice type?", 7 },
                    { 33, "Antonio Vivaldi", "Who composed the 'Four Seasons'?", 7 },
                    { 34, "Please Please Me", "What is the name of the Beatles' first album?", 7 },
                    { 35, "Mick Jagger", "Who is the lead singer of the Rolling Stones?", 7 },
                    { 36, "James Cameron", "Who directed 'Titanic'?", 8 },
                    { 37, "Avatar", "What is the highest-grossing film of all time?", 8 },
                    { 38, "Heath Ledger", "Who played the Joker in 'The Dark Knight'?", 8 },
                    { 39, "Frodo Baggins", "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?", 8 },
                    { 40, "Quentin Tarantino", "Who directed 'Pulp Fiction'?", 8 },
                    { 41, "Bill Gates", "Who is the founder of Microsoft?", 9 },
                    { 42, "HyperText Transfer Protocol", "What does 'HTTP' stand for?", 9 },
                    { 43, "ENIAC", "What is the name of the first electronic general-purpose computer?", 9 },
                    { 44, "2007", "What year was the first iPhone released?", 9 },
                    { 45, "Central Processing Unit", "What does 'CPU' stand for?", 9 },
                    { 46, "Leonardo da Vinci", "Who painted the Mona Lisa?", 10 },
                    { 47, "Origami", "What is the art of paper folding called?", 10 },
                    { 48, "Michelangelo", "Who painted the ceiling of the Sistine Chapel?", 10 },
                    { 49, "Mona Lisa", "What is the most famous painting in the Louvre?", 10 },
                    { 50, "Vincent van Gogh", "Who is the artist behind 'The Starry Night'?", 10 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 46);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 47);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 48);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 49);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 50);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("1b3d5ad6-f7cf-4c90-83c6-b90e88c1196e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("47fec716-d074-4d63-912b-947a7015fc87"));

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 10);

            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 1,
                columns: new[] { "Answer", "Question" },
                values: new object[] { "metro manila", "What is the capital of Philippines" });

            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 2,
                column: "QuizId",
                value: 2);

            migrationBuilder.UpdateData(
                table: "Quiz",
                keyColumn: "QuizId",
                keyValue: 2,
                column: "QuizName",
                value: "GeographyV2");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("1a54a5ef-b73d-4f07-a7e0-f3c808d52647"), "admin", "admin", "admin" },
                    { new Guid("1e4d9d82-f13d-486c-9de8-3c809c45cf24"), "user", "user", "user" }
                });
        }
    }
}
