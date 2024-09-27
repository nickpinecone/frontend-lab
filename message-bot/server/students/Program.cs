using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace Students;

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

        app.MapGet("/students", () => "1");

        app.Run();
    }
}
