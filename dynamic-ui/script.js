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
        const backButton = imageSlider.querySelector(".back");
        const forwardButton = imageSlider.querySelector(".forward");

        function setupImages() {
            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const copyBack = image.cloneNode(true);
                const copyFront = image.cloneNode(true);

                imageContainer.appendChild(copyBack);
                imageContainer.appendChild(copyFront);

                image.setAttribute("data-position", i);
                image.setAttribute("data-index", i);
                image.style.zIndex = 0;

                copyBack.setAttribute("data-position", -(4 - i));
                copyFront.setAttribute("data-position", i + 4);
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

            images.forEach((image) => {
                image.style.zIndex = -1;

                let position = Number(image.getAttribute("data-position"));
                position -= 1 * direction;
                image.setAttribute("data-position", position);

                if (position >= -1 && position <= 1) {
                    image.style.zIndex = 0;
                }

                image.style.left = `${position * 640}px`;
            });
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
