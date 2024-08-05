using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Quiz.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddCollationToUsersEntity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("c25a3fe0-8f0b-4176-a2d7-f86c63ebad6a"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("cd1fc857-d6fa-4f5a-964d-c8e6e84d1e14"));

            migrationBuilder.AlterDatabase(
                oldCollation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("92dfc5e6-0a8f-4881-9c19-e1c143139dc9"), "admin", "admin", "admin" },
                    { new Guid("a25f3f07-ef94-4ef4-9755-4f2bc2641b99"), "user", "user", "user" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("92dfc5e6-0a8f-4881-9c19-e1c143139dc9"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("a25f3f07-ef94-4ef4-9755-4f2bc2641b99"));

            migrationBuilder.AlterDatabase(
                collation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("c25a3fe0-8f0b-4176-a2d7-f86c63ebad6a"), "admin", "admin", "admin" },
                    { new Guid("cd1fc857-d6fa-4f5a-964d-c8e6e84d1e14"), "user", "user", "user" }
                });
        }
    }
}
