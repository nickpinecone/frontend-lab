(function () {
    const Direction = {
        Forward: 1,
        Back: -1,
    };

    const imageSliders = document.querySelectorAll(".image-slider");

    imageSliders.forEach((imageSlider) => {
        const navigation = imageSlider.querySelector(".navigation");
        const imageContainer = imageSlider.querySelector(".image-container");
        const images = Array.from(imageContainer.querySelectorAll("img"));
        const backButton = imageSlider.querySelector(".back");
        const forwardButton = imageSlider.querySelector(".forward");

        let cycle = 0;

        function addRadioNavigation(image, index) {
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "index";
            radio.setAttribute("data-index", index);
            if (index === 0) {
                radio.checked = true;
            }

            radio.addEventListener("click", () => {
                const position = Number(image.getAttribute("data-position"));

                moveImages(Math.sign(position), Math.abs(position));
            });

            navigation.appendChild(radio);
        }

        let count = 0;
        images.forEach((image) => {
            addRadioNavigation(image, count);

            image.setAttribute("data-position", count);
            image.setAttribute("data-index", count);
            image.style.left = `${640 * count}px`;
            count += 1;
        });

        function moveImages(direction, amount) {
            images.forEach((image) => {
                const position =
                    Number(image.getAttribute("data-position")) -
                    amount * direction;
                image.setAttribute("data-position", position);

                if (position === 0) {
                    const radio = navigation.querySelector(
                        `input[data-index="${image.getAttribute("data-index")}"`
                    );

                    radio.checked = true;
                }

                image.style.left = `${640 * position}px`;
            });
        }

        function getBoundingImages() {
            let lastPosition = 0;
            let lastElement = null;

            let firstPosition = Infinity;
            let firstElement = null;

            images.forEach((image) => {
                const position = Number(image.getAttribute("data-position"));

                if (position >= lastPosition) {
                    lastPosition = position;
                    lastElement = image;
                }
                if (position < firstPosition) {
                    firstPosition = position;
                    firstElement = image;
                }
            });

            return { lastPosition, lastElement, firstPosition, firstElement };
        }

        function moveImageInstant(image, position) {
            image.setAttribute("data-position", position);
            image.style.left = `${position * 640}px`;
        }

        function moveContainer(direction, amount) {
            const { lastPosition, lastElement, firstPosition, firstElement } =
                getBoundingImages();

            let rearElement = null;
            let frontElement = null;
            let frontPosition = 0;

            if (direction === Direction.Forward) {
                frontElement = lastElement;
                frontPosition = lastPosition;
                rearElement = firstElement;
            } else if (direction === Direction.Back) {
                frontElement = firstElement;
                frontPosition = firstPosition;
                rearElement = lastElement;
            }

            if (frontPosition === 0) {
                cycle = direction;

                rearElement.setAttribute("data-position", direction);
                rearElement.style.left = `${
                    frontElement.offsetLeft + 640 * amount * direction
                }px`;

                moveImages(direction, amount);

                images.forEach((image) => {
                    const position = Number(
                        image.getAttribute("data-position")
                    );
                    if (position !== 0) {
                        const newPosition = position + images.length * cycle;
                        moveImageInstant(image, newPosition);
                    }
                });

                return;
            }
            moveImages(direction, amount);
        }

        backButton.addEventListener("click", (event) => {
            moveContainer(Direction.Back, 1);
        });
        forwardButton.addEventListener("click", (event) => {
            moveContainer(Direction.Forward, 1);
        });
    });
})();
