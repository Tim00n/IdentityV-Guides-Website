const hunters = [
    { name: "", url: "./hunters/Hell Ember/Hell_Ember.html", img: "assets/Hell Ember_Card.png"  },
    { name: "", url: "./hunters/Smiley Face/Smiley_Face.html", img: "assets/Smiley_Card.png" },
    { name: "", url: "./hunters/Gamekeeper/Gamekeeper.html", img: "assets/Gamekeeper_Card.png" },
    { name: "", url: "./hunters/Ripper/Ripper.html", img: "assets/Ripper_Card.png" },
    { name: "", url: "./hunters/Soul Weaver/Soul_Weaver.html", img: "assets/Soul Weaver_Card.png" },
    { name: "", url: "./hunters/Geisha/Geisha.html", img: "assets/Geisha_Card.png" },
    { name: "", url: "./hunters/Wu Chang/Wu_Chang.html", img: "assets/WuChang_Card.png" },
    { name: "", url: "./hunters/Photographer/Photographer.html", img: "assets/Photographer_Card.png" },
    { name: "", url: "./hunters/Mad Eyes/Mad_Eyes.html", img: "assets/Mad Eyes_Card.png" },
    { name: "", url: "./hunters/Feaster/Feaster.html", img: "assets/Feaster_Card.png" },
    { name: "", url: "./hunters/Dream Witch/Dream_Witch.html", img: "assets/Dream Witch_Card.png" },
    { name: "", url: "./hunters/Axe Boy/Axe_Boy.html", img: "assets/Axe Boy_Card.png" },
    { name: "", url: "./hunters/Evil Reptilian/Evil_Reptilian.html", img: "assets/Evil Reptilian_Card.png" },
    { name: "", url: "./hunters/Bloody Queen/Bloody_Queen.html", img: "assets/Bloody Queen_Card.png" },
    { name: "", url: "./hunters/Guard 26/Guard_26.html", img: "assets/Guard 26_Card.png" },
    { name: "", url: "./hunters/Disciple/Disciple.html", img: "assets/Disciple_Card.png"},
    { name: "", url: "./hunters/Violinist/Violinist.html", img: "assets/Violinist_Card.png" },
    { name: "", url: "./hunters/Sculptor/Sculptor.html", img: "assets/Sculptor.png" },
    { name: "", url: "./hunters/Undead/Undead.html", img: "assets/Undead_Card.png"},
    { name: "", url: "./hunters/The Breaking Wheel/The_Breaking_Wheel.html", img: "assets/The Breaking Wheel_Card.png" },
    { name: "", url: "./hunters/Naiad/Naiad.html", img: "assets/Naiad_Card.png" },
    { name: "", url: "./hunters/Wax Artist/Wax_Artist.html", img: "assets/Wax Artist_Card.png" },
    { name: "", url: "./hunters/Nightmare/Nightmare.html", img: "assets/Nightmare_Card.png" },
    { name: "", url: "./hunters/Clerk/Clerk.html", img: "assets/Clerk_Card.png" },
    { name: "", url: "./hunters/Hermit/Hermit.html", img: "assets/Hermit_Card.png" },
    { name: "", url: "./hunters/Night Watch/Night_Watch.html", img: "assets/Night  Watch_Card.png" },
    { name: "", url: "./hunters/Opera Singer/Opera_Singer.html", img: "assets/Opera Singer_Card.png" },
    { name: "", url: "./hunters/Fool's Gold/Fool's_Gold.html", img: "assets/FG_Card.png" },
    { name: "", url: "./hunters/Shadow/Shadow.html", img: "assets/Shadow_Card.png" },
    { name: "", url: "./hunters/Goatman/Goatman.html", img: "assets/Goatman_Card.png" },
];

let currentPage = 0;
const huntersPerPage = 18; // 18 hunters per page (two boxes)

function loadHunters() {
    const grid1 = document.getElementById('hunterGrid1');
    const grid2 = document.getElementById('hunterGrid2');
    grid1.innerHTML = '';
    grid2.innerHTML = '';

    const start = currentPage * huntersPerPage;
    const end = start + huntersPerPage;
    const paginatedHunters = hunters.slice(start, end);

    // Load hunters into the two boxes
    paginatedHunters.forEach((hunter, index) => {
        const hunterDiv = document.createElement('div');
        hunterDiv.className = 'hunter';
        hunterDiv.innerHTML = `
            <a href="${hunter.url}" target="_blank">
                <img src="${hunter.img}" alt="${hunter.name}">
                <p>${hunter.name}</p>
            </a>
        `;

        if (index < 9) {
            grid1.appendChild(hunterDiv); // First 9 in the first box
        } else {
            grid2.appendChild(hunterDiv); // Next 9 in the second box
        }
    });

    updateButtons();
}

function changePage(direction) {
    currentPage += direction;
    loadHunters();
}

function updateButtons() {
    document.getElementById('prevBtn').disabled = currentPage === 0;
    document.getElementById('nextBtn').disabled = (currentPage + 1) * huntersPerPage >= hunters.length;
}

loadHunters(); // Initial load