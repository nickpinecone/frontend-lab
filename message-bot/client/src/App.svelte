<script>
    import { onMount } from "svelte";

    let students = 0;
    let courses = 0;

    onMount(async () => {
        let result = await fetch("http://localhost:5096/students");
        let text = await result.text();

        students = Number(text);

        result = await fetch("http://localhost:5096/courses");
        text = await result.text();

        courses = Number(text);
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
