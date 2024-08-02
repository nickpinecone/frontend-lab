<script>
    import "@picocss/pico";
    import "@picocss/pico/css/pico.colors.css";

    import paper from "./assets/paper.svg";
    import rock from "./assets/rock.svg";
    import scissors from "./assets/scissors.svg";

    const isPlayerWin = (player, computer) => {
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
    };

    const getAlt = (current) => {
        if (current == paper) {
            return "Paper hand symbol";
        } else if (current == rock) {
            return "Rock hand symbol";
        } else {
            return "Scissors hand symbol";
        }
    };

    const getRandomChoice = () => {
        var choices = [rock, paper, scissors];
        var index = Math.floor(Math.random() * choices.length);

        return choices[index];
    };

    const handleChoice = (choice) => {
        player = choice;
        computer = getRandomChoice();

        let result = isPlayerWin(player, computer);

        if (result == "win") {
            wins += 1;
        } else if (result == "lose") {
            loses += 1;
        }
    };

    const restart = () => {
        player = paper;
        computer = paper;

        wins = 0;
        loses = 0;
    };

    let player = paper;
    let computer = paper;

    let wins = 0;
    let loses = 0;
</script>

<header>
    <h1>Rock Paper Scissors</h1>
</header>

<main class="container grid">
    <article>
        <img src={player} alt={getAlt(player)} />

        <footer>
            <div class="grid">
                <button on:click={() => handleChoice(rock)}>Rock</button>
                <button on:click={() => handleChoice(paper)}>Paper</button>
                <button on:click={() => handleChoice(scissors)}>Scissors</button
                >
            </div>
        </footer>
    </article>

    <article>
        <img src={computer} alt={getAlt(computer)} />

        <footer>
            <div class="grid">
                <button class="outline">Won: {wins}</button>
                <button class="outline">Lost: {loses}</button>
                <button on:click={restart}>Restart</button>
            </div>
        </footer>
    </article>
</main>

<style>
    header {
        text-align: center;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    h1 {
        margin: 0;
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
