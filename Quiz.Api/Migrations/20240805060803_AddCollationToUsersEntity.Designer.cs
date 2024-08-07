﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Quiz.Api.Data;

#nullable disable

namespace Quiz.Api.Migrations
{
    [DbContext(typeof(QuizContext))]
    [Migration("20240805060803_AddCollationToUsersEntity")]
    partial class AddCollationToUsersEntity
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Quiz.Api.Models.QuestionEntity", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QuestionId"));

                    b.Property<string>("Answer")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Question")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QuizId")
                        .HasColumnType("int");

                    b.HasKey("QuestionId");

                    b.HasIndex("QuizId");

                    b.ToTable("Questions");

                    b.HasData(
                        new
                        {
                            QuestionId = 1,
                            Answer = "metro manila",
                            Question = "What is the capital of Philippines",
                            QuizId = 1
                        },
                        new
                        {
                            QuestionId = 2,
                            Answer = "Russia",
                            Question = "Which country has the largest land area?",
                            QuizId = 2
                        },
                        new
                        {
                            QuestionId = 3,
                            Answer = "Nile",
                            Question = "What is the longest river in the world?",
                            QuizId = 1
                        },
                        new
                        {
                            QuestionId = 4,
                            Answer = "Africa",
                            Question = "Which continent is known as the 'Dark Continent'?",
                            QuizId = 1
                        });
                });

            modelBuilder.Entity("Quiz.Api.Models.QuizEntity", b =>
                {
                    b.Property<int>("QuizId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("QuizId"));

                    b.Property<string>("QuizName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("QuizId");

                    b.ToTable("Quiz");

                    b.HasData(
                        new
                        {
                            QuizId = 1,
                            QuizName = "Geography"
                        },
                        new
                        {
                            QuizId = 2,
                            QuizName = "GeographyV2"
                        });
                });

            modelBuilder.Entity("Quiz.Api.Models.UsersEntity", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)")
                        .UseCollation("SQL_Latin1_General_CP1_CI_AS");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = new Guid("92dfc5e6-0a8f-4881-9c19-e1c143139dc9"),
                            Password = "admin",
                            Role = "admin",
                            Username = "admin"
                        },
                        new
                        {
                            Id = new Guid("a25f3f07-ef94-4ef4-9755-4f2bc2641b99"),
                            Password = "user",
                            Role = "user",
                            Username = "user"
                        });
                });

            modelBuilder.Entity("Quiz.Api.Models.QuestionEntity", b =>
                {
                    b.HasOne("Quiz.Api.Models.QuizEntity", "Quiz")
                        .WithMany("Questions")
                        .HasForeignKey("QuizId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Quiz");
                });

            modelBuilder.Entity("Quiz.Api.Models.QuizEntity", b =>
                {
                    b.Navigation("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
