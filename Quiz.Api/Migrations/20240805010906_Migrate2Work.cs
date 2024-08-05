using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Quiz.Api.Migrations
{
    /// <inheritdoc />
    public partial class Migrate2Work : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("3124be2e-5230-4845-8dfa-7e57c36cd99e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("b4c8c590-0133-4400-ba9a-ab6261fa044e"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("c25a3fe0-8f0b-4176-a2d7-f86c63ebad6a"), "admin", "admin", "admin" },
                    { new Guid("cd1fc857-d6fa-4f5a-964d-c8e6e84d1e14"), "user", "user", "user" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("c25a3fe0-8f0b-4176-a2d7-f86c63ebad6a"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("cd1fc857-d6fa-4f5a-964d-c8e6e84d1e14"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("3124be2e-5230-4845-8dfa-7e57c36cd99e"), "admin", "admin", "admin" },
                    { new Guid("b4c8c590-0133-4400-ba9a-ab6261fa044e"), "user", "user", "user" }
                });
        }
    }
}
