const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Loading Screen Logic
document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const hiddenElements = document.querySelectorAll('.scroll-text');
    
    if (!loadingScreen) {
        hiddenElements.forEach((el) => observer.observe(el));
        return;
    }
    
    // Minimum 2 seconds delay
    const minimumDelay = new Promise(resolve => setTimeout(resolve, 2000));
    
    // Window fully loaded
    const windowLoaded = new Promise(resolve => {
        if (document.readyState === "complete") {
            resolve();
        } else {
            window.addEventListener("load", resolve);
        }
    });

    // When both are ready, fade out
    Promise.all([minimumDelay, windowLoaded]).then(() => {
        loadingScreen.classList.add("fade-out");
        setTimeout(() => {
            loadingScreen.style.display = "none";
            // Start observing elements only AFTER loading screen is gone
            hiddenElements.forEach((el) => observer.observe(el));
            document.body.classList.add('loaded');
        }, 800);
    });
});