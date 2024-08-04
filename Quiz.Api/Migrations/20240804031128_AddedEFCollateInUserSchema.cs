using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Quiz.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddedEFCollateInUserSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("3b2af265-acb9-44be-b034-fb3b87d64641"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("7c9bd4ac-4b45-4403-82e4-cdf4217891e6"));

            migrationBuilder.AlterDatabase(
                collation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("81031452-2577-4104-b1ab-248d064093c7"), "admin", "admin", "admin" },
                    { new Guid("ed138b45-c11a-4940-b330-ac46cb649c5e"), "user", "user", "user" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("81031452-2577-4104-b1ab-248d064093c7"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("ed138b45-c11a-4940-b330-ac46cb649c5e"));

            migrationBuilder.AlterDatabase(
                oldCollation: "SQL_Latin1_General_CP1_CI_AS");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Password", "Role", "Username" },
                values: new object[,]
                {
                    { new Guid("3b2af265-acb9-44be-b034-fb3b87d64641"), "user", "user", "user" },
                    { new Guid("7c9bd4ac-4b45-4403-82e4-cdf4217891e6"), "admin", "admin", "admin" }
                });
        }
    }
}
