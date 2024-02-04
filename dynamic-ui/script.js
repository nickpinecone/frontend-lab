(function () {
    const Direction = {
        Forward: 1,
        Back: -1,
    };

    const imageSliders = document.querySelectorAll(".image-slider");

    imageSliders.forEach((imageSlider) => {
        const navigation = imageSlider.querySelector(".navigation");
        const imageContainer = imageSlider.querySelector(".image-container");
        let images = Array.from(imageContainer.querySelectorAll("img"));
        let originalLength = 0;
        const backButton = imageSlider.querySelector(".back");
        const forwardButton = imageSlider.querySelector(".forward");

        function addRadioNavigation(index) {
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "index";
            radio.setAttribute("data-index", index);
            if (index === 0) {
                radio.checked = true;
            }

            radio.addEventListener("click", () => {
                let image = imageContainer.querySelector(
                    `img[data-index="${radio.getAttribute("data-index")}"]`
                );
                let position = Number(image.getAttribute("data-position"));

                moveImages(Math.sign(position), Math.abs(position));
            });

            navigation.appendChild(radio);
        }

        function setupImages() {
            originalLength = images.length;

            for (let i = 0; i < originalLength; i++) {
                const image = images[i];
                const copyBack = image.cloneNode(true);
                const copyFront = image.cloneNode(true);

                imageContainer.appendChild(copyBack);
                imageContainer.appendChild(copyFront);

                image.setAttribute("data-position", i);
                image.setAttribute("data-index", i);

                copyBack.setAttribute("data-position", -(originalLength - i));
                copyFront.setAttribute("data-position", i + originalLength);

                addRadioNavigation(i);
            }

            images = Array.from(imageContainer.querySelectorAll("img"));

            images.forEach((image) => {
                const position = Number(image.getAttribute("data-position"));
                image.style.left = `${640 * position}px`;
            });
        }

        function getBoundingImages() {
            const last = { position: 0, element: null };
            const first = { position: Infinity, element: null };

            images.forEach((image) => {
                const position = Number(image.getAttribute("data-position"));

                if (position >= last.position) {
                    last.position = position;
                    last.element = image;
                }
                if (position < first.position) {
                    first.position = position;
                    first.element = image;
                }
            });

            return { first, last };
        }

        function moveImages(direction, amount) {
            for (let i = 0; i < amount; i++) {
                const boundingInfo = getBoundingImages();

                let rear = { position: 0, element: null };
                let front = { position: 0, element: null };

                if (direction === Direction.Forward) {
                    rear = boundingInfo.first;
                    front = boundingInfo.last;
                } else {
                    rear = boundingInfo.last;
                    front = boundingInfo.first;
                }

                rear.element.setAttribute(
                    "data-position",
                    front.position + 1 * direction
                );
                rear.element.style.left = `${front.element.offsetLeft + 640}px`;
            }

            let cycle = false;
            images.forEach((image) => {
                image.style.zIndex = -1;

                let position = Number(image.getAttribute("data-position"));
                position -= 1 * direction * amount;
                image.setAttribute("data-position", position);

                image.style.left = `${position * 640}px`;

                if (position === 0 && !image.hasAttribute("data-index")) {
                    cycle = true;
                }

                if (position >= -1 && position <= 1) {
                    image.style.zIndex = 0;
                }
            });

            if (cycle) {
                if (direction === Direction.Forward) {
                    images.forEach((image) => {
                        let position = Number(
                            image.getAttribute("data-position")
                        );
                        if (position >= -originalLength && position <= -1) {
                            image.removeAttribute("data-index");
                        } else if (
                            position >= 0 &&
                            position <= originalLength - 1
                        ) {
                            image.setAttribute("data-index", position);
                        }
                    });
                } else {
                    images.forEach((image) => {
                        let position = Number(
                            image.getAttribute("data-position")
                        );
                        if (position >= 1 && position <= originalLength) {
                            image.removeAttribute("data-index");
                        } else if (
                            position <= 0 &&
                            position >= -originalLength + 1
                        ) {
                            image.setAttribute(
                                "data-index",
                                originalLength + position - 1
                            );
                        }
                    });
                }
            }

            let image = imageContainer.querySelector(`img[data-position="0"`);
            let radio = navigation.querySelector(
                `input[data-index="${image.getAttribute("data-index")}"]`
            );
            radio.checked = true;
        }

        setupImages();

        backButton.addEventListener("click", (event) => {
            moveImages(Direction.Back, 1);
        });
        forwardButton.addEventListener("click", (event) => {
            moveImages(Direction.Forward, 1);
        });
    });
})();
