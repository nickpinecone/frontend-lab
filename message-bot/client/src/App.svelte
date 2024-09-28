<script>
    import { onMount } from "svelte";
    import * as signalR from "@microsoft/signalr";

    let students = 0;
    let courses = "";

    onMount(async () => {
        let result = await fetch("http://localhost:5001/students");
        let text = await result.text();

        students = Number(text);

        result = await fetch("http://localhost:5001/courses");
        text = await result.text();

        courses = text;

        var connection = new signalR.HubConnectionBuilder()
            .withUrl("http://localhost:5002/hub", {
                transport: signalR.HttpTransportType.ServerSentEvents,
                withCredentials: false,
            })
            .build();

        connection.on("ReceiveMessage", function (count) {
            students = count;
        });

        connection.start();
    });
</script>

<main>
    <table>
        <tr>
            <th>Студенты</th>
            <th>Курсы</th>
        </tr>
        <tr>
            <td>{students}</td>
            <td>{courses}</td>
        </tr>
    </table>
</main>

<style>
    th,
    td {
        padding: 1rem;
        text-align: center;
    }
</style>
