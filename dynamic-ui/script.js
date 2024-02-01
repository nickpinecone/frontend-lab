(function () {
    const Direction = {
        Forward: 1,
        Back: -1,
    };

    const imageSliders = document.querySelectorAll(".image-slider");

    imageSliders.forEach((imageSlider) => {
        const imageContainer = imageSlider.querySelector(".image-container");
        const images = Array.from(imageContainer.querySelectorAll("img"));
        const backButton = imageSlider.querySelector(".back");
        const forwardButton = imageSlider.querySelector(".forward");
        let interact = true;

        let count = 0;
        images.forEach((image) => {
            image.setAttribute("data-pos", count);
            image.style.left = `${640 * count}px`;
            count += 1;
        });

        function moveContainer(direction, amount) {
            if (direction === 1) {
                let maxPos = 0;
                let maxEl = null;

                let minPos = Infinity;
                let minEl = null;

                images.forEach((image) => {
                    const pos = Number(image.getAttribute("data-pos"));

                    if (pos >= maxPos) {
                        maxPos = pos;
                        maxEl = image;
                    }
                    if (pos < minPos) {
                        minPos = pos;
                        minEl = image;
                    }
                });
                if (maxPos === 0) {
                    minEl.setAttribute("data-pos", 1);
                    minEl.style.left = `${maxEl.offsetLeft + 640}px`;
                }
            }

            imageContainer.style.left = `${
                imageContainer.offsetLeft - amount * 640 * direction
            }px`;

            images.forEach((image) => {
                let pos =
                    Number(image.getAttribute("data-pos")) - amount * direction;
                image.setAttribute("data-pos", pos);
            });

            interact = false;
        }

        imageContainer.addEventListener("transitionend", () => {
            interact = true;
        });

        backButton.addEventListener("click", (event) => {
            if (interact) {
                moveContainer(Direction.Back, 1);
            }
        });
        forwardButton.addEventListener("click", (event) => {
            if (interact) {
                moveContainer(Direction.Forward, 1);
            }
        });
    });
})();
