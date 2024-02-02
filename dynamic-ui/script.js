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

            image.addEventListener("transitionend", () => {
                const pos = Number(image.getAttribute("data-pos"));
                if (pos === 0) {
                    interact = true;
                }
            });
        });

        function moveImages(direction, amount) {
            interact = false;

            images.forEach((image) => {
                const pos =
                    Number(image.getAttribute("data-pos")) - amount * direction;
                image.setAttribute("data-pos", pos);

                image.style.left = `${640 * pos}px`;
            });
        }

        function getBoundingImages() {
            let lastPosition = 0;
            let lastElement = null;

            let firstPosition = Infinity;
            let firstElement = null;

            images.forEach((image) => {
                const pos = Number(image.getAttribute("data-pos"));

                if (pos >= lastPosition) {
                    lastPosition = pos;
                    lastElement = image;
                }
                if (pos < firstPosition) {
                    firstPosition = pos;
                    firstElement = image;
                }
            });

            return { lastPosition, lastElement, firstPosition, firstElement };
        }

        function moveContainer(direction, amount) {
            const { lastPosition, lastElement, firstPosition, firstElement } =
                getBoundingImages();

            if (direction === Direction.Forward) {
                if (lastPosition === 0) {
                    firstElement.style.transitionDuration = "1ms";
                    firstElement.setAttribute("data-pos", 1);
                    firstElement.style.left = `${
                        lastElement.offsetLeft + 640
                    }px`;

                    let lambda = function () {
                        firstElement.style.transitionDuration = "500ms";
                        moveImages(direction, amount);
                        firstElement.removeEventListener(
                            "transitionend",
                            lambda
                        );
                    };

                    firstElement.addEventListener("transitionend", lambda);

                    return;
                }
            }
            if (direction === Direction.Back) {
                if (firstPosition === 0) {
                    lastElement.style.transitionDuration = "1ms";
                    lastElement.setAttribute("data-pos", -1);
                    lastElement.style.left = `${
                        firstElement.offsetLeft - 640
                    }px`;

                    let lambda = function () {
                        lastElement.style.transitionDuration = "500ms";
                        moveImages(direction, amount);
                        lastElement.removeEventListener(
                            "transitionend",
                            lambda
                        );
                    };

                    lastElement.addEventListener("transitionend", lambda);

                    return;
                }
            }
            moveImages(direction, amount);
        }

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
