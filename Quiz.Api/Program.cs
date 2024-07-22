using DotNetEnv;
using Quiz.Api.Dto;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env file
Env.Load();

var FrontEndUrl = Environment.GetEnvironmentVariable("FrontEndUrl");

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins(FrontEndUrl!) // Replace with your frontend URL
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

var sample = new List<string> {"hello"};

// app.MapGet("/", () => {
//     return Results.Ok("hello world");
// });

app.MapGet("/", () => {
    return Results.Ok(sample);
});


app.Run();
