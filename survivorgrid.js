const survivors = [
    { name: "", url: "./survivors/Doctor/Doctor.html", img: "assets/Doctor.png" },
    { name: "", url: "./survivors/Lawyer/Lawyer.html", img: "assets/Lawyer.png" },
    { name: "", url: "./survivors/Thief/Thief.html", img: "assets/Thief.png" },
    { name: "", url: "./survivors/Gardener/Gardener.html", img: "assets/Gardener.png" },
    { name: "", url: "./survivors/Magician/Magician.html", img: "assets/Magician.png" },
    { name: "", url: "./survivors/Explorer/Explorer.html", img: "assets/Explorer.png" },
    { name: "", url: "./survivors/Mercenary/Mercenary.html", img: "assets/Merc.png" },
    { name: "", url: "./survivors/Coordinator/Coordinator.html", img: "assets/TheQueen.png" },
    { name: "", url: "./survivors/Priestess/Priestess.html", img: "assets/Roach.png" },
    { name: "", url: "./survivors/Mechanic/Mechanic.html", img: "assets/Mechanic.png" },
    { name: "", url: "./survivors/Forward/Forward.html", img: "assets/Forward.png" },
    { name: "", url: "./survivors/The Mind's Eye/The Mind's Eye.html", img: "assets/The Mind's Eye.png" },
    { name: "", url: "./survivors/Perfumer/Perfumer.html", img: "assets/Perfumer.png" },
    { name: "", url: "./survivors/Cowboy/Cowboy.html", img: "assets/Cowboy.png" },
    { name: "", url: "./survivors/Female Dancer/Female Dancer.html", img: "assets/Female Dancer.png" },
    { name: "", url: "./survivors/Seer/Seer.html", img: "assets/Seer.png" },
    { name: "", url: "./survivors/Embalmer/Embalmer.html", img: "assets/Embalmer.png" },
    { name: "", url: "./survivors/Prospector/Prospector.html", img: "assets/Prospector.png" },
    { name: "", url: "./survivors/Enchantress/Enchantress.html", img: "assets/Enchantress.png" },
    { name: "", url: "./survivors/Wildling/Wildling.html", img: "assets/Wildling.png" },
    { name: "", url: "./survivors/Acrobat/Acrobat.html", img: "assets/Acrobat.png" },
    { name: "", url: "./survivors/First Officer/First Officer.html", img: "assets/First Officer.png" },
    { name: "", url: "./survivors/Barmaid/Barmaid.html", img: "assets/Barmaid.png" },
    { name: "", url: "./survivors/Postman/Postman.html", img: "assets/Postman.png" },
    { name: "", url: "./survivors/Gravekeeper/Gravekeeper.html", img: "assets/Gravekeeper.png" },
    { name: "", url: "./survivors/Prisoner/Prisoner.html", img: "assets/Prisoner.png" },
    { name: "", url: "./survivors/Entomologist/Entomologist.html", img: "assets/Entomologist.png" },
    { name: "", url: "./survivors/Painter/Painter.html", img: "assets/Painter.png" },
    { name: "", url: "./survivors/Batter/Batter.html", img: "assets/Batter.png" },
    { name: "", url: "./survivors/Toy Merchant/Toy Merchant.html", img: "assets/Toy Merchant.png" },
    { name: "", url: "./survivors/Patient/Patient.html", img: "assets/Patient.png" },
    { name: "", url: "./survivors/Psychologist/Psychologist.html", img: "assets/Psychologist.png" },
    { name: "", url: "./survivors/Novelist/Novelist.html", img: "assets/Novelist.png" },
    { name: "", url: "./survivors/Little Girl/Little Girl.html", img: "assets/Little Girl.png" },
    { name: "", url: "./survivors/Weeping Clown/Weeping Clown.html", img: "assets/Weeping Clown.png" },
    { name: "", url: "./survivors/Professor/Professor.html", img: "assets/Professor.png" },
    { name: "", url: "./survivors/Antiquarian/Antiquarian.html", img: "assets/Antiquarian.png" },
    { name: "", url: "./survivors/Composer/Composer.html", img: "assets/Composer.png" },
    { name: "", url: "./survivors/Journalist/Journalist.html", img: "assets/Journalist.png" },
    { name: "", url: "./survivors/Aeroplanist/Aeroplanist.html", img: "assets/Aeroplanist.png" },
    { name: "", url: "./survivors/Cheerleader/Cheerleader.html", img: "assets/Cheerleader.png" },
    { name: "", url: "./survivors/Puppeteer/Puppeteer.html", img: "assets/Puppeteer.png" },
    { name: "", url: "./survivors/Fire Investigator/Fire Investigator.html", img: "assets/Fire Investigator.png" },
    { name: "", url: "./survivors/Faro Lady/Faro Lady.html", img: "assets/Faro Lady.png" },
    { name: "", url: "./survivors/Lucky Guy/Lucky Guy.html", img: "assets/Lucky Guy.png" },

    
];

let currentSurvivorPage = 0;
const survivorsPerPage = 18;

function loadSurvivors() {
    const grid1 = document.getElementById('survivorGrid1');
    const grid2 = document.getElementById('survivorGrid2');
    grid1.innerHTML = '';
    grid2.innerHTML = '';

    const start = currentSurvivorPage * survivorsPerPage;
    const end = start + survivorsPerPage;
    const paginatedSurvivors = survivors.slice(start, end);

    paginatedSurvivors.forEach((survivor, index) => {
        const survivorDiv = document.createElement('div');
        survivorDiv.className = 'survivor';
        survivorDiv.innerHTML = `
            <a href="${survivor.url}" target="_blank">
                <img src="${survivor.img}" alt="${survivor.name}">
                <p>${survivor.name}</p>
            </a>
        `;

        if (index < 9) {
            grid1.appendChild(survivorDiv);
        } else {
            grid2.appendChild(survivorDiv);
        }
    });

    updateSurvivorButtons();
}

function changeSurvivorPage(direction) {
    currentSurvivorPage += direction;
    loadSurvivors();
}

function updateSurvivorButtons() {
    document.getElementById('prevSurvivorBtn').disabled = currentSurvivorPage === 0;
    document.getElementById('nextSurvivorBtn').disabled = (currentSurvivorPage + 1) * survivorsPerPage >= survivors.length;
}

loadSurvivors(); // Initial load