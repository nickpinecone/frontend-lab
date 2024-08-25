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
                                     options.AddDefaultPolicy(
                                         policy =>
                                         { policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod(); });
                                 });

        var app = builder.Build();

        app.UseCors();

        app.MapGet("/students", () => Results.Ok(1));
        app.MapGet("/courses", () => Results.Ok(1));

        app.Run();
    }
}
