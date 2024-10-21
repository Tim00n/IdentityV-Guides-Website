document.addEventListener('DOMContentLoaded', function() {
    const survivorSection = document.getElementById('survivor-section');
    const hunterSection = document.getElementById('hunter-section');
    const idvIDContainer = document.getElementById('idv-id-container');
    const buttonContainer = document.querySelector('.button-container');
    const roleSurvivor = document.getElementById('role-survivor');
    const roleHunter = document.getElementById('role-hunter');
    
    // Get all input elements in Survivor and Hunter sections
    const survivorInputs = survivorSection.querySelectorAll('input, select');
    const hunterInputs = hunterSection.querySelectorAll('input, select');
    const gameIDInput = document.getElementById('gameID-hunter');  // For game ID specifically

    // Track the last checked faction to clear inputs when switching
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
        // Hide everything initially
        survivorSection.classList.add('hidden');
        hunterSection.classList.add('hidden');
        idvIDContainer.classList.add('hidden');
        buttonContainer.classList.add('hidden');

        // Clear inputs for previously checked faction when switching
        if (roleSurvivor.checked && lastCheckedFaction === 'Hunter') {
            clearInputs(hunterInputs);  // Clear Hunter inputs when switching to Survivor
            gameIDInput.value = '';  // Clear Game ID when switching factions
        }

        if (roleHunter.checked && lastCheckedFaction === 'Survivor') {
            clearInputs(survivorInputs);  // Clear Survivor inputs when switching to Hunter
            gameIDInput.value = '';  // Clear Game ID when switching factions
        }

        // Show Survivor section if checked
        if (roleSurvivor.checked) {
            survivorSection.classList.remove('hidden');
            lastCheckedFaction = 'Survivor';  // Set the last checked faction to Survivor
        }

        // Show Hunter section if checked
        if (roleHunter.checked) {
            hunterSection.classList.remove('hidden');
            lastCheckedFaction = 'Hunter';  // Set the last checked faction to Hunter
        }

        // Show Game ID and Submit button if either checkbox is checked
        if (roleSurvivor.checked || roleHunter.checked) {
            idvIDContainer.classList.remove('hidden');
            buttonContainer.classList.remove('hidden');
        }
    }

    // Attach event listeners to the checkboxes
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
                items.style.display = 'none';  // Hide options after selection
            });
        });
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', function(e) {
        customSelects.forEach(select => {
            const items = select.querySelector('.select-items');
            if (!select.contains(e.target)) {
                items.style.display = 'none';  // Hide if clicked outside
            }
        });
    });
});
