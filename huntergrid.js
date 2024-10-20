const hunters = [
    { name: "", url: "./hunters/Hell Ember/Hell_Ember.html", img: "assets/Leo_Character_Select_Transparent.png" },
    { name: "", url: "./hunters/Smiley Face/Smiley_Face.html", img: "assets/Joker_Transparent.png" },
    { name: "", url: "./hunters/Gamekeeper/Gamekeeper.html", img: "assets/Bane_Transparent.png" },
    { name: "", url: "./hunters/Ripper/Ripper.html", img: "assets/JackTransparent.png" },
    { name: "", url: "./hunters/Soul Weaver/Soul_Weaver.html", img: "assets/Violetta_Transparent.png" },
    { name: "", url: "./hunters/Geisha/Geisha.html", img: "assets/Michiko_Transparent.png" },
    { name: "", url: "./hunters/Wu Chang/Wu_Chang.html", img: "assets/WuChang_Transparent.png" },
    { name: "", url: "./hunters/Photographer/Photographer.html", img: "assets/Joseph_Transparent.png" },
    { name: "", url: "./hunters/Mad Eyes/Mad_Eyes.html", img: "assets/Burke_Transparent.png" },
    { name: "", url: "./hunters/Feaster/Feaster.html", img: "assets/Hastur_Transparent.png" },
    { name: "", url: "./hunters/Dream Witch/Dream_Witch.html", img: "assets/Yidhra_Transparent.png" },
    { name: "", url: "./hunters/Axe Boy/Axe_Boy.html", img: "assets/Robbie_Transparent.png" },
    { name: "", url: "./hunters/Evil Reptilian/Evil_Reptilian.html", img: "assets/Luchino_Transparent.png" },
    { name: "", url: "./hunters/Bloody Queen/Bloody_Queen.html", img: "assets/Mary_Transparent.png" },
    { name: "", url: "./hunters/Guard 26/Guard_26.html", img: "assets/Bonbon_Transparent.png" },
    { name: "", url: "./hunters/Disciple/Disciple.html", img: "assets/Ann_Transparent_2.png"},
    { name: "", url: "./hunters/Violinist/Violinist.html", img: "assets/Antonio_Transparent.png" },
    { name: "", url: "./hunters/Sculptor/Sculptor.html", img: "assets/Galatea_Character_Select_Transparent.png" },
    { name: "", url: "./hunters/Undead/Undead.html", img: "assets/UndeadCard.png"},
    { name: "", url: "./hunters/The Breaking Wheel/The_Breaking_Wheel.html", img: "assets/Will_Brothers_Transparent.png" },
    { name: "", url: "./hunters/Naiad/Naiad.html", img: "assets/Grace_Profile_Transparent.png" },
    { name: "", url: "./hunters/Wax Artist/Wax_Artist.html", img: "assets/Philippe_Character_Select_Transparent.png" },
    { name: "", url: "./hunters/Nightmare/Nightmare.html", img: "assets/Nightmare_Transparent.png" },
    { name: "", url: "./hunters/Clerk/Clerk.html", img: "assets/Clerk_Transparent.png" },
    { name: "", url: "./hunters/Hermit/Hermit.html", img: "assets/Alva_Character_Select_Transparent.png" },
    { name: "", url: "./hunters/Night Watch/Night_Watch.html", img: "assets/NightWatchProfile.png" },
    { name: "", url: "./hunters/Opera Singer/Opera_Singer.html", img: "assets/OS_Transparent.png" },
    { name: "", url: "./hunters/Fool's Gold/Fool's_Gold.html", img: "assets/FG_Transparent.png" },
    { name: "", url: "./hunters/Shadow/Shadow.html", img: "assets/Shadow_Transparent.png" },
    { name: "", url: "./hunters/Goatman/Goatman.html", img: "assets/Goatman_Transparent.png" },
    { name: "", url: "./hunters/Hullabaloo/Hullabaloo.html", img: "assets/Placeholder.png" },


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