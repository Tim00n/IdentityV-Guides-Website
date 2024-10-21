document.addEventListener('DOMContentLoaded', function() {
    const survivorSection = document.getElementById('survivor-section');
    const hunterSection = document.getElementById('hunter-section');
    const idvIDContainer = document.getElementById('idv-id-container');
    const buttonContainer = document.querySelector('.button-container');
    const roleSurvivor = document.getElementById('role-survivor');
    const roleHunter = document.getElementById('role-hunter');
    
    // Inputs and selects for Survivor and Hunter sections
    const survivorBadge = document.getElementById('highest-survivor-badge-hidden');
    const hunterBadge = document.getElementById('highest-hunter-badge-hidden');
    const survivorRank = document.getElementById('survivor-rank');
    const hunterRank = document.getElementById('hunter-rank');
    const survivorWins = document.getElementById('wins-survivor');
    const hunterWins = document.getElementById('wins-hunter');
    const gameID = document.getElementById('gameID-hunter');

    // Track the last checked faction
    let lastCheckedFaction = null;

    // Function to clear inputs
    function clearInputs(inputs) {
        inputs.forEach(input => {
            if (input.tagName === 'SELECT') {
                input.selectedIndex = 0;  // Reset dropdowns
            } else {
                input.value = '';  // Clear input fields
            }
        });
    }

    // Function to update form visibility and clear inputs based on checkboxes
    function updateForm() {
        survivorSection.classList.add('hidden');
        hunterSection.classList.add('hidden');
        idvIDContainer.classList.add('hidden');
        buttonContainer.classList.add('hidden');

        // Show Survivor section if checked, clear inputs if unchecked
        if (roleSurvivor.checked && lastCheckedFaction === 'Hunter') {
            clearInputs(hunterSection.querySelectorAll('input, select'));
        }

        if (roleHunter.checked && lastCheckedFaction === 'Survivor') {
            clearInputs(survivorSection.querySelectorAll('input, select'));
        }

        if (roleSurvivor.checked) {
            survivorSection.classList.remove('hidden');
            lastCheckedFaction = 'Survivor';
        }

        if (roleHunter.checked) {
            hunterSection.classList.remove('hidden');
            lastCheckedFaction = 'Hunter';
        }

        if (roleSurvivor.checked || roleHunter.checked) {
            idvIDContainer.classList.remove('hidden');
            buttonContainer.classList.remove('hidden');
        }
    }

    // Attach event listeners to checkboxes
    roleSurvivor.addEventListener('change', updateForm);
    roleHunter.addEventListener('change', updateForm);

    // Initial form state on page load
    updateForm();

    // Custom dropdown functionality
    const customSelects = document.querySelectorAll('.custom-select');
    customSelects.forEach(select => {
        const selected = select.querySelector('.select-selected');
        const items = select.querySelector('.select-items');

        // Handle dropdown selection toggle
        selected.addEventListener('click', function() {
            items.style.display = items.style.display === 'block' ? 'none' : 'block';
        });

        // Handle click on an option
        const options = items.querySelectorAll('div');
        options.forEach(option => {
            option.addEventListener('click', function() {
                selected.textContent = this.textContent;
                selected.dataset.value = this.dataset.value;

                // Update hidden input field
                const hiddenInput = select.querySelector('input[type="hidden"]');
                hiddenInput.value = this.dataset.value;
                items.style.display = 'none';
            });
        });
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function(e) {
        customSelects.forEach(select => {
            const items = select.querySelector('.select-items');
            if (!select.contains(e.target)) {
                items.style.display = 'none';
            }
        });
    });

    // Validation function for form submission
    function validateForm(e) {
        let errors = [];

        // Check if Survivor or Hunter badge and rank are selected (not default)
        if (roleSurvivor.checked) {
            if (survivorBadge.value === "" || survivorRank.value === "") {
                errors.push("Please fill out all fields.");
            } else if (
                survivorBadge.value !== 'A' &&
                survivorBadge.value !== 'S' ||
                survivorRank.value < 6 ||
                survivorRank.value > 8 ||
                parseInt(survivorWins.value) < 100 ||
                isNaN(survivorWins.value)
            ) {
                errors.push('Insufficient experience. Please come back later.');
            }
        }

        if (roleHunter.checked) {
            if (hunterBadge.value === "" || hunterRank.value === "") {
                errors.push("Please fill out all fields.");
            } else if (
                hunterBadge.value !== 'A' &&
                hunterBadge.value !== 'S' ||
                hunterRank.value < 6 ||
                hunterRank.value > 8 ||
                parseInt(hunterWins.value) < 100 ||
                isNaN(hunterWins.value)
            ) {
                errors.push('Insufficient experience. Please come back later.');
            }
        }

        // Validate IDV ID
        if (!/^\d{8}$/.test(gameID.value)) {
            errors.push('Game ID must be exactly 8 digits long.');
        }

        // Prevent form submission if there are errors
        if (errors.length > 0) {
            e.preventDefault(); // Prevent submission
            alert(errors.join('\n')); // Show errors in an alert
        }
    }

    // Attach the validation function to the form's submit event
    document.querySelector('form').addEventListener('submit', validateForm);
});
