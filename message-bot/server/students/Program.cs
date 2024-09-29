using System.IO;
using System.Threading.Tasks;
using Messages;
using Microsoft.AspNetCore.Builder;
using NServiceBus;

namespace Students;

public static class Program
{
    private static int _students = 0;

    public static async Task Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        var app = builder.Build();

        var endpointConfiguration = new EndpointConfiguration("Students");
        endpointConfiguration.UseSerialization<SystemJsonSerializer>();

        var transport = endpointConfiguration.UseTransport<LearningTransport>();
        transport.StorageDirectory("/home/nick/Development/backend-lab/message-bot/server/messages");

        var routing = transport.Routing();
        routing.RouteToEndpoint(typeof(UpdateStudents), "Signal");

        var endpointInstance = await NServiceBus.Endpoint.Start(endpointConfiguration);

        app.MapGet("/students", () => _students);
        app.MapGet("/addStudent", async () =>
                                  {
                                      _students++;

                                      await endpointInstance.Send(new UpdateStudents() { StudentCount = students });

                                      return _students;
                                  });

        app.Run();

        await endpointInstance.Stop();
    }
}
