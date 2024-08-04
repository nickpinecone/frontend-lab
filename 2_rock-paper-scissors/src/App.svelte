<script>
    import "@picocss/pico";
    import "@picocss/pico/css/pico.colors.css";

    import paper from "./assets/paper.svg";
    import rock from "./assets/rock.svg";
    import scissors from "./assets/scissors.svg";

    let player = paper;
    let computer = paper;

    let message = "";
    let messageColor = "var(--pico-color)";
    let wins = 0;
    let loses = 0;

    function isPlayerWin(player, computer) {
        if (
            (player == rock && computer == scissors) ||
            (player == scissors && computer == paper) ||
            (player == paper && computer == rock)
        ) {
            return "win";
        } else if (player == computer) {
            return "draw";
        } else {
            return "lose";
        }
    }

    function getAlt(current) {
        if (current == paper) {
            return "Paper hand symbol";
        } else if (current == rock) {
            return "Rock hand symbol";
        } else {
            return "Scissors hand symbol";
        }
    }

    function getRandomChoice() {
        var choices = [rock, paper, scissors];
        var index = Math.floor(Math.random() * choices.length);

        return choices[index];
    }

    function handleChoice(choice) {
        player = choice;
        computer = getRandomChoice();

        let result = isPlayerWin(player, computer);

        if (result == "win") {
            wins += 1;
            message = "You Win";
            messageColor = "var(--pico-color-jade-500)";
        } else if (result == "lose") {
            loses += 1;
            message = "You Lose";
            messageColor = "var(--pico-color-pink-500)";
        } else {
            message = "Draw";
            messageColor = "var(--pico-color)";
        }
    }

    function restart() {
        player = paper;
        computer = paper;

        message = "";
        wins = 0;
        loses = 0;
    }
</script>

<header>
    <h1>Rock Paper Scissors</h1>
</header>

<main class="container">
    <div class="grid">
        <article>
            <header><h2>Player</h2></header>

            <img src={player} alt={getAlt(player)} />

            <footer>
                <div class="grid">
                    <button on:click={() => handleChoice(rock)}>Rock</button>
                    <button on:click={() => handleChoice(paper)}>Paper</button>
                    <button on:click={() => handleChoice(scissors)}
                        >Scissors</button
                    >
                </div>
            </footer>
        </article>

        <article>
            <header><h2>Computer</h2></header>

            <img src={computer} alt={getAlt(computer)} />

            <footer>
                <div class="grid">
                    <button class="outline">Won: {wins}</button>
                    <button class="outline">Lost: {loses}</button>
                    <button on:click={restart}>Restart</button>
                </div>
            </footer>
        </article>
    </div>

    <h3 style="color: {messageColor}">{message}</h3>
</main>

<style>
    header {
        text-align: center;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    h1,
    h2 {
        margin: 0;
    }

    h3 {
        text-align: center;
    }

    article {
        text-align: center;
    }

    img {
        width: 8rem;
    }

    button {
        text-wrap: nowrap;
    }
</style>
