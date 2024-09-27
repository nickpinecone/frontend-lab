using System;
using System.Net.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Core;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddCors(options =>
                                 {
                                     options.AddDefaultPolicy(policy =>
                                                              { policy.AllowAnyOrigin(); });
                                 });

        var app = builder.Build();

        app.UseCors();

        HttpClient studentsHttp = new()
        {
            BaseAddress = new Uri("http://localhost:5155/"),
        };

        HttpClient coursesHttp = new()
        {
            BaseAddress = new Uri("http://localhost:5000/"),
        };

        app.MapGet("/students", async () =>
                                {
                                    var response = await studentsHttp.GetAsync("students");
                                    var result = await response.Content.ReadAsStringAsync();

                                    return result;
                                });

        app.MapGet("/courses", async () =>
                               {
                                   var response = await studentsHttp.GetAsync("courses");
                                   var result = await response.Content.ReadAsStringAsync();

                                   return result;
                               });

        app.Run();
    }
}
