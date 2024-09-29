using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using NServiceBus;
using System.IO;
using Messages;
using System;

namespace Signal;

public static class Program
{
    static IHubContext<SignalHub> _hub = null;

    public static async Task Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddCors(
            options =>
            {
                options.AddDefaultPolicy(
                    policy =>
                    {
                        policy.WithOrigins(new string[] { "http://localhost:5173" }).AllowAnyHeader().AllowAnyMethod();
                    });
            });
        builder.Services.AddSignalR();

        var app = builder.Build();

        var endpointConfiguration = new EndpointConfiguration("Signal");
        endpointConfiguration.UseSerialization<SystemJsonSerializer>();
        var transport = endpointConfiguration.UseTransport<LearningTransport>();
        transport.StorageDirectory("/home/nick/Development/backend-lab/message-bot/server/messages");

        var endpointInstance = await NServiceBus.Endpoint.Start(endpointConfiguration);

        app.UseCors();
        app.MapHub<SignalHub>("/signal");

        _hub = app.Services.GetService<IHubContext<SignalHub>>();

        app.Run();

        await endpointInstance.Stop();
    }

    public class UpdateStudentsHandler : IHandleMessages<UpdateStudents>
    {
        public Task Handle(UpdateStudents message, IMessageHandlerContext context)
        {
            _hub.Clients.All.SendAsync("ReceiveMessage", message.StudentCount);

            return Task.CompletedTask;
        }
    }

    public class SignalHub : Hub
    {
    }
}
