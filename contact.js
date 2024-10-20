document.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.querySelector('.form-container main');
    const survivorSection = document.getElementById('survivor-section');
    const hunterSection = document.getElementById('hunter-section');
    const buttonContainer = document.querySelector('.button-container');

    const roleSurvivor = document.getElementById('role-survivor');
    const roleHunter = document.getElementById('role-hunter');

    // Show the faction selection prompt initially
    mainSection.classList.remove('hidden');

    // Show the relevant section when a radio button is selected
    document.querySelectorAll('input[name="faction"]').forEach(radio => {
        radio.addEventListener('change', function() {
            // Reset and hide all sections first
            survivorSection.classList.add('hidden');
            hunterSection.classList.add('hidden');
            buttonContainer.classList.add('hidden'); // Hide button initially

            // Show relevant sections based on selected radio button
            if (roleSurvivor.checked) {
                survivorSection.classList.remove('hidden');
            }
            if (roleHunter.checked) {
                hunterSection.classList.remove('hidden');
            }

            // Show the button container if either section is visible
            if (roleSurvivor.checked || roleHunter.checked) {
                buttonContainer.classList.remove('hidden');
            }
        });
    });

    const badgeSelects = document.querySelectorAll('.custom-select');

    badgeSelects.forEach(select => {
        const selected = select.querySelector('.select-selected');
        const items = select.querySelector('.select-items');

        selected.addEventListener('click', function() {
            items.style.display = items.style.display === 'block' ? 'none' : 'block';
        });

        const options = items.querySelectorAll('div');

        options.forEach(option => {
            option.addEventListener('click', function() {
                selected.textContent = this.textContent; // Update selected text
                selected.dataset.value = this.dataset.value; // Store selected value
                items.style.display = 'none'; // Hide the options
                
                // Update hidden input field if necessary
                const hiddenInput = select.querySelector('input[type="hidden"]');
                hiddenInput.value = this.dataset.value; // Set the value of the hidden input
            });
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', function(e) {
        badgeSelects.forEach(select => {
            const items = select.querySelector('.select-items');
            if (!select.contains(e.target)) {
                items.style.display = 'none'; // Hide if clicked outside
            }
        });
    });
});
