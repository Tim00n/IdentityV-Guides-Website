document.addEventListener('DOMContentLoaded', function() {
    const survivorSection = document.getElementById('survivor-section');
    const hunterSection = document.getElementById('hunter-section');
    const roleSurvivor = document.getElementById('role-survivor');
    const roleHunter = document.getElementById('role-hunter');
    const survivorSelect = document.getElementById('survivor-select');
    const hunterSelect = document.getElementById('hunter-select');
    const winsSurvivor = document.getElementById('wins-survivor');
    const winsHunter = document.getElementById('wins-hunter');
    
    document.querySelectorAll('input[name="faction"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Hide both sections and remove 'required' from all fields first
            survivorSection.classList.add('hidden');
            hunterSection.classList.add('hidden');
            survivorSelect.removeAttribute('required');
            winsSurvivor.removeAttribute('required');
            hunterSelect.removeAttribute('required');
            winsHunter.removeAttribute('required');

            // Show the relevant section and add 'required' where necessary
            if (roleSurvivor.checked) {
                survivorSection.classList.remove('hidden');
                survivorSelect.setAttribute('required', true);
                winsSurvivor.setAttribute('required', true);
            }

            if (roleHunter.checked) {
                hunterSection.classList.remove('hidden');
                hunterSelect.setAttribute('required', true);
                winsHunter.setAttribute('required', true);
            }
        });
    });
});
