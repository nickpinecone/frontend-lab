using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Connections;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;

namespace Students;

public static class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddSignalR();
        builder.Services.AddCors(
            options =>
            {
                options.AddDefaultPolicy(
                    policy =>
                    {
                        policy.WithOrigins(new string[] { "http://localhost:5173", "http://localhost:5001" })
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

        var app = builder.Build();

        app.UseCors();
        app.MapHub<ChatHub>("/hub");

        int students = 0;

        app.MapGet("/students", () => students);
        app.MapGet("/addStudent", async (IHubContext<ChatHub> hub) =>
                                  {
                                      students++;

                                      await hub.Clients.All.SendAsync("ReceiveMessage", students);

                                      return students;
                                  });

        app.Run();
    }

    public class ChatHub : Hub
    {
        public async Task SendMessage(int students)
        {
            await Clients.All.SendAsync("ReceiveMessage", students);
        }
    }
}
