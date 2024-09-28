let currentSlideIndex = 0;

        function showSlide(index) {
            const slides = document.getElementsByClassName('slide');
            const totalSlides = slides.length;

            if (index >= totalSlides) {
                currentSlideIndex = 0;
            } else if (index < 0) {
                currentSlideIndex = totalSlides - 1;
            } else {
                currentSlideIndex = index;
            }

            const offset = -currentSlideIndex * 100;
            const slidesContainer = document.getElementsByClassName('slides')[0];
            slidesContainer.style.transform = 'translateX(' + offset + '%)';
        }

        function nextSlide() {
            showSlide(currentSlideIndex + 1);
        }

        function prevSlide() {
            showSlide(currentSlideIndex - 1);
        }

        document.getElementById('nextBtn').addEventListener('click', nextSlide);
        document.getElementById('prevBtn').addEventListener('click', prevSlide);

        showSlide(currentSlideIndex);