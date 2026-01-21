document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const cover = document.getElementById("cover");
    const book = document.getElementById("book");
    const pages = document.querySelectorAll(".book-page");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const pageIndicator = document.getElementById("pageIndicator");
    const flipSound = document.getElementById("flipSound");

    // Music page controls
    const musik = document.getElementById("musik");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const stopBtn = document.getElementById("stopBtn");
    const slider = document.getElementById("volumeSlider");

    // Set default volume
    if (musik) musik.volume = slider.value / 100;

    let currentPage = 0;

    // Function to show page
    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active");
            if (i === index) page.classList.add("active");
        });

        pageIndicator.textContent = `${index + 1} / ${pages.length}`;

        // Play page flip sound
        if (flipSound) flipSound.currentTime = 0;
        if (flipSound) flipSound.play();

        // Stop music if leaving music page
        if (pages[index].classList.contains("music-page")) {
            // nothing, music page is active
        } else if (musik) {
            musik.pause();
            musik.currentTime = 0;
        }
    }

    // Open book
    openBtn.addEventListener("click", function() {
        cover.style.display = "none";
        book.style.display = "block";
        showPage(currentPage);
    });

    // Navigation
    nextBtn.addEventListener("click", function() {
        if (currentPage < pages.length -1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    prevBtn.addEventListener("click", function() {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Music controls
    if (playBtn) playBtn.addEventListener("click", () => musik.play());
    if (pauseBtn) pauseBtn.addEventListener("click", () => musik.pause());
    if (stopBtn) stopBtn.addEventListener("click", () => {
        musik.pause();
        musik.currentTime = 0;
    });

    if (slider) slider.addEventListener("input", () => {
        musik.volume = slider.value / 100;
    });
});