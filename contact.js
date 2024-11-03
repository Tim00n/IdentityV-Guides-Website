document.addEventListener("DOMContentLoaded", function() {
    const formSlides = document.querySelectorAll(".form-slide");
    const progressBar = document.getElementById("progress-bar");
    let currentSlide = 0;
    let selectedSurvivor = '';
    let selectedHunter = '';
    let selectedSurvivorBadge = '';
    let selectedHunterBadge = '';
    let selectedSurvivorTier = '';
    let selectedHunterTier = '';

    // Progress Bar Update Function
    function updateProgressBar() {
        const totalSlides = formSlides.length;
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    updateProgressBar(); // Initialize progress bar

    // Slide Navigation Function
    function goToSlide(slideIndex) {
        formSlides[currentSlide].classList.remove("active");
        currentSlide = slideIndex;
        formSlides[currentSlide].classList.add("active");
        updateProgressBar();
    }

    // Slide 1: Faction Selection
    const checkboxes = document.querySelectorAll("input[name='faction']");
    const factionNextButton = document.querySelector("#faction-selection .next-button");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            factionNextButton.disabled = !Array.from(checkboxes).some(checkbox => checkbox.checked);
        });
    });

    factionNextButton.addEventListener("click", () => {
        const survivorChecked = document.getElementById("survivor").checked;
        const hunterChecked = document.getElementById("hunter").checked;

        if (survivorChecked && !hunterChecked) {
            goToSlide(1); // Survivor character selection
            document.querySelector("#survivor-character-slide .next-button").disabled = true;
        } else if (!survivorChecked && hunterChecked) {
            goToSlide(2); // Hunter character selection
            document.querySelector("#hunter-character-slide .next-button").disabled = true;
        } else if (survivorChecked && hunterChecked) {
            goToSlide(3); // Both character selection
            document.querySelector("#both-character-slide .next-button").disabled = true;
        }
    });

    // Slide 2: Character Selection
    const survivorSelect = document.getElementById("survivor-select");
    const survivorCharacterNextButton = document.querySelector("#survivor-character-slide .next-button");

    survivorSelect.addEventListener("change", function() {
        selectedSurvivor = this.value;
        survivorCharacterNextButton.disabled = !selectedSurvivor;
    });

    survivorCharacterNextButton.addEventListener("click", () => {
        document.getElementById("survivor-badge-question").textContent = `What's the highest badge you've obtained with ${selectedSurvivor}?`;
        goToSlide(4); // Survivor badge selection
        document.querySelector("#survivor-badge-slide .next-button").disabled = true;
    });

    const hunterSelect = document.getElementById("hunter-select");
    const hunterCharacterNextButton = document.querySelector("#hunter-character-slide .next-button");

    hunterSelect.addEventListener("change", function() {
        selectedHunter = this.value;
        hunterCharacterNextButton.disabled = !selectedHunter;
    });

    hunterCharacterNextButton.addEventListener("click", () => {
        document.getElementById("hunter-badge-question").textContent = `What's the highest badge you've obtained with ${selectedHunter}?`;
        goToSlide(5); // Hunter badge selection
        document.querySelector("#hunter-badge-slide .next-button").disabled = true;
    });

    const bothSurvivorSelect = document.getElementById("both-survivor-select");
    const bothHunterSelect = document.getElementById("both-hunter-select");
    const bothCharacterNextButton = document.querySelector("#both-character-slide .next-button");

    function updateBothCharacterNextButton() {
        bothCharacterNextButton.disabled = !(bothSurvivorSelect.value && bothHunterSelect.value);
    }

    bothSurvivorSelect.addEventListener("change", function() {
        selectedSurvivor = this.value;
        updateBothCharacterNextButton();
    });

    bothHunterSelect.addEventListener("change", function() {
        selectedHunter = this.value;
        updateBothCharacterNextButton();
    });

    bothCharacterNextButton.addEventListener("click", () => {
        document.getElementById("both-survivor-badge-question").textContent = `What's the highest badge you've obtained with ${selectedSurvivor}?`;
        document.getElementById("both-hunter-badge-question").textContent = `What's the highest badge you've obtained with ${selectedHunter}?`;
        goToSlide(6); // Both badge selection
        document.querySelector("#both-badge-slide .next-button").disabled = true;
    });

    function setupBadgeDropdown(dropdownId, errorId, nextButtonSelector, isBoth = false) {
        const dropdown = document.getElementById(dropdownId);
        const selected = dropdown.querySelector(".dropdown-selected");
        const options = dropdown.querySelectorAll(".dropdown-option");
        const errorMessage = document.getElementById(errorId);
        const nextButton = document.querySelector(nextButtonSelector);
        let selectedValue = '';

        selected.addEventListener("click", () => {
            dropdown.classList.toggle("active");
        });

        options.forEach(option => {
            option.addEventListener("click", () => {
                selected.innerHTML = option.innerHTML;
                selectedValue = option.getAttribute("data-value");
                dropdown.classList.remove("active");

                if (dropdownId.includes("survivor")) {
                    selectedSurvivorBadge = selectedValue;
                } else {
                    selectedHunterBadge = selectedValue;
                }

                const validBadge = (value) => ["A Badge", "S Badge"].includes(value);

                if (isBoth) {
                    const validBoth = validBadge(selectedSurvivorBadge) && validBadge(selectedHunterBadge);
                    errorMessage.textContent = validBoth ? "" : "Please select at least an A or S badge for both.";
                    nextButton.disabled = !validBoth;
                } else {
                    const isValid = validBadge(selectedValue);
                    errorMessage.textContent = isValid ? "" : "Please select at least an A or S badge.";
                    nextButton.disabled = !isValid;
                }
            });
        });
    }

    setupBadgeDropdown("survivor-badge-dropdown", "survivor-badge-error", "#survivor-badge-slide .next-button");
    setupBadgeDropdown("hunter-badge-dropdown", "hunter-badge-error", "#hunter-badge-slide .next-button");
    setupBadgeDropdown("both-survivor-badge-dropdown", "both-survivor-badge-error", "#both-badge-slide .next-button", true);
    setupBadgeDropdown("both-hunter-badge-dropdown", "both-hunter-badge-error", "#both-badge-slide .next-button", true);

    document.querySelector("#survivor-badge-slide .next-button").addEventListener("click", () => {
        goToSlide(7); // Survivor tier selection
    });

    document.querySelector("#hunter-badge-slide .next-button").addEventListener("click", () => {
        goToSlide(8); // Hunter tier selection
    });

    document.querySelector("#both-badge-slide .next-button").addEventListener("click", () => {
        goToSlide(9); // Both tier selection
    });

// Rank (Tier) Dropdown Validation for Survivor, Hunter, and Both Factions
function setupTierDropdown(dropdownId, errorId, nextButtonSelector, isBoth = false) {
    const dropdown = document.getElementById(dropdownId);
    const selected = dropdown.querySelector(".dropdown-selected");
    const options = dropdown.querySelectorAll(".dropdown-option");
    const errorMessage = document.getElementById(errorId);
    const nextButton = document.querySelector(nextButtonSelector);
    let selectedValue = '';

    nextButton.disabled = true; // Disable button by default

    selected.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.innerHTML;
            selectedValue = option.getAttribute("data-value");
            dropdown.classList.remove("active");

            // Check if the selected value is a valid tier (6, 7, or 8)
            const validTier = (value) => ["6", "7", "8"].includes(value);

            if (dropdownId.includes("survivor")) {
                selectedSurvivorTier = selectedValue;
            } else {
                selectedHunterTier = selectedValue;
            }

            if (isBoth) {
                const validBoth = validTier(selectedSurvivorTier) && validTier(selectedHunterTier);
                errorMessage.textContent = validBoth ? "" : "Please select Tier 6, 7, or 8 for both factions.";
                nextButton.disabled = !validBoth;
            } else {
                const isValid = validTier(selectedValue);
                errorMessage.textContent = isValid ? "" : "Please select Tier 6, 7, or 8.";
                nextButton.disabled = !isValid;
            }
        });
    });
}

// Setup calls for Survivor, Hunter, and Both Factions with Rank (Tier) Dropdowns
setupTierDropdown("survivor-tier-dropdown", "survivor-tier-error", "#survivor-tier-slide .next-button");
setupTierDropdown("hunter-tier-dropdown", "hunter-tier-error", "#hunter-tier-slide .next-button");
setupTierDropdown("both-survivor-tier-dropdown", "both-survivor-tier-error", "#both-tier-slide .next-button", true);
setupTierDropdown("both-hunter-tier-dropdown", "both-hunter-tier-error", "#both-tier-slide .next-button", true);



    document.querySelector("#survivor-tier-slide .next-button").addEventListener("click", () => {
        goToSlide(10); // Wins slide for Survivor
    });
    
    document.querySelector("#hunter-tier-slide .next-button").addEventListener("click", () => {
        goToSlide(10); // Wins slide for Hunter
    });
    
    document.querySelector("#both-tier-slide .next-button").addEventListener("click", () => {
        goToSlide(10); // Wins slide for Both factions
    });

    // Wins Slide Validation
    const winsInput = document.getElementById("wins-input");
    const winsNextButton = document.querySelector("#wins-slide .next-button");
    const winsError = document.getElementById("wins-error");

    winsInput.addEventListener("input", function() {
        const winsValue = parseInt(winsInput.value, 10);
        if (winsValue >= 100) {
            winsError.textContent = "";
            winsNextButton.disabled = false;
        } else {
            winsError.textContent = "Wins must be 100 or more.";
            winsNextButton.disabled = true;
        }
    });

    winsNextButton.addEventListener("click", () => {
        goToSlide(11); // Game ID Slide
    });

    // Game ID Slide Validation and Submit Button Activation
    const gameIdInput = document.getElementById("game-id-input");
    const submitButton = document.querySelector("#game-id-slide .submit-button");
    const gameIdError = document.getElementById("game-id-error");

    gameIdInput.addEventListener("input", function() {
        if (/^\d{8}$/.test(gameIdInput.value)) {
            gameIdError.textContent = "";
            submitButton.disabled = false;
        } else {
            gameIdError.textContent = "Please enter exactly 8 digits for your ID.";
            submitButton.disabled = true;
        }
    });
});