<script>
    import "@picocss/pico";
    import "@picocss/pico/css/pico.colors.css";

    import paper from "./assets/paper.svg";
    import rock from "./assets/rock.svg";
    import scissors from "./assets/scissors.svg";
    import utils from "./utils.js";

    let player = utils.type.paper;
    let computer = utils.type.paper;

    let message = "";
    let color = "var(--pico-color)";
    let wins = 0;
    let loses = 0;

    function getSvg(type) {
        if (type == utils.type.rock) {
            return rock;
        } else if (type == utils.type.paper) {
            return paper;
        } else {
            return scissors;
        }
    }

    function handleChoice(choice) {
        player = choice;
        computer = utils.getRandomChoice();

        let result = utils.isPlayerWin(player, computer);

        if (result == utils.result.win) {
            wins += 1;
            message = "You Win";
            color = "var(--pico-color-jade-500)";
        } else if (result == utils.result.lose) {
            loses += 1;
            message = "You Lose";
            color = "var(--pico-color-pink-500)";
        } else {
            message = "Draw";
            color = "var(--pico-color)";
        }
    }

    function restart() {
        player = utils.type.paper;
        computer = utils.type.paper;

        message = "";
        wins = 0;
        loses = 0;
    }
</script>

<header class="p-1r">
    <h1 class="text-center">Rock Paper Scissors</h1>
</header>

<main class="container">
    <div class="grid">
        <article class="text-center">
            <header><h2 class="mb-0">Player</h2></header>

            <img
                class="w-8r"
                src={getSvg(player)}
                alt={utils.getAltText(player)}
            />

            <footer>
                <div class="grid">
                    <button on:click={() => handleChoice(utils.type.rock)}
                        >Rock</button
                    >
                    <button on:click={() => handleChoice(utils.type.paper)}
                        >Paper</button
                    >
                    <button on:click={() => handleChoice(utils.type.scissors)}
                        >Scissors</button
                    >
                </div>
            </footer>
        </article>

        <article class="text-center">
            <header><h2 class="text-center mb-0">Computer</h2></header>

            <img
                class="w-8r"
                src={getSvg(computer)}
                alt={utils.getAltText(computer)}
            />

            <footer>
                <div class="grid">
                    <button class="outline">Won: {wins}</button>
                    <button class="outline">Lost: {loses}</button>
                    <button on:click={restart}>Restart</button>
                </div>
            </footer>
        </article>
    </div>

    <h3 class="text-center" style="color: {color}">{message}</h3>
</main>
