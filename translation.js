document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-language");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    let isEnglish = true;

    function toggleLanguage() {
        isEnglish = !isEnglish; // Toggle between English and Bengali

        elementsToTranslate.forEach(element => {
            const translationKey = element.getAttribute("data-translate");
            const translation = isEnglish ? element.getAttribute("data-english") : element.getAttribute("data-bengali");

            if (translationKey && translation) {
                element.textContent = translation;
            } else {
                // Display a warning if attributes are missing
                alert(`Warning: Element with data-translate="${translationKey}" is missing required attributes.`);
            }
        });

        // Set session storage to remember the current language choice
        sessionStorage.setItem("language", isEnglish ? "english" : "bengali");
    }

    toggleButton.addEventListener("click", toggleLanguage);

    // Check session storage for the previously selected language
    const storedLanguage = sessionStorage.getItem("language");
    if (storedLanguage === "bengali") {
        toggleLanguage(); // Switch to Bengali if it was previously selected
    }
});