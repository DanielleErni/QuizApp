using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Quiz.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigrateV8 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("9bcfc4f0-5e96-4ac1-96a6-06b66a160e34"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("a15a3e7a-23a4-4a08-87ae-a22d36f3b9de"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("3b2af265-acb9-44be-b034-fb3b87d64641"), "user", "user", "user" },
                    { new Guid("7c9bd4ac-4b45-4403-82e4-cdf4217891e6"), "admin", "admin", "admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("3b2af265-acb9-44be-b034-fb3b87d64641"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("7c9bd4ac-4b45-4403-82e4-cdf4217891e6"));

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("9bcfc4f0-5e96-4ac1-96a6-06b66a160e34"), "admin", "admin", "admin" },
                    { new Guid("a15a3e7a-23a4-4a08-87ae-a22d36f3b9de"), "user", "user", "user" }
                });
        }
    }
}
