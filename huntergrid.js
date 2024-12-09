const hunters = [
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Hell_Ember_Card_uyezls.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Smiley_Card_frii66.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Gamekeeper_Card_roh9kp.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Ripper_Card_qufit7.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Soul_Weaver_Card_p7tvgo.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Geisha_Card_mfbtd9.png", type:"chase", exists:false },
    { name: "", url: "./hunters/identity-v-wu-chang-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/WuChang_Card_r3gdgk.png", type:"control"},
    { name: "", url: "./hunters/identity-v-photographer-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Photographer_Card_ipoqa8.png", type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Mad_Eyes_Card_y0m4mb.png", type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063349/Feaster_Card_nsxpa4.png", type:"camp", exists:false},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Dream_Witch_Card_cqalg2.png", type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Axe_Boy_Card_aecncd.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Evil_Reptilian_Card_hiqwnp.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063347/Bloody_Queen_Card_rdalyl.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Guard_26_Card_jklexq.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063353/Disciple_Card_eu5ge4.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063353/Violinist_Card_zr9ses.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/Sculptor_yqvi1v.png", type:"camp"},
    { name: "", url: "./hunters/identity-v-undead-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Undead_Card_wdqih5.webp", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/The_Breaking_Wheel_Card_hxjzod.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063349/Naiad_Card_rdne8x.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Wax_Artist_Card_fiy3oq.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Nightmare_Card_qrasfw.png" , type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063351/Clerk_Card_pejmze.png", type:"control"},
    { name: "", url: "./hunters/identity-v-hermit-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063354/Hermit_Card_yczt48.png", type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Night_Watch_Card_ycnkdb.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Opera_Singer_Card_glwz9d.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/FG_Card_kfxjjb.png", type:"camp"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Shadow_Card_ceozif.png", type:"control"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/Goatman_Card_jrfhwo.png", type:"chase"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Hullaballo_Card_mymbhx.png", type:"chase"},
];

let currentFilter = null;
let currentPage = 0;
const huntersPerPage = 18; // 18 hunters per page (two boxes)


async function checkFileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok; 
    } catch (error) {
        console.error(`File not found ${url}:`, error);
        return false; 
    }
}




async function loadHunters() {
    const grid1 = document.getElementById('hunterGrid1');
    const grid2 = document.getElementById('hunterGrid2');
    grid1.innerHTML = '';
    grid2.innerHTML = '';

    const filteredHunters = currentFilter
        ? hunters.filter(hunter => hunter.type === currentFilter)
        : hunters;

    const start = currentPage * huntersPerPage;
    const end = start + huntersPerPage;
    const paginatedHunters = filteredHunters.slice(start, end);

    // Load hunters into the two boxes
    for (const [index, hunter] of paginatedHunters.entries()) {
        
        const fileExists = await checkFileExists(hunter.url);

        const hunterDiv = document.createElement('div');
        hunterDiv.className = `hunter ${fileExists ? '' : 'grayscale'}`;
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
    }

    updateButtons();
}

//sort either by camp, control, chase, or reset filter
function sortBy(option){
    if (option === 'reset') {
        currentFilter = null;
    } else {
        currentFilter = option;
    }
    currentPage = 0;
    loadHunters();
}


function changePage(direction) {
    currentPage += direction;
    loadHunters();
}

function updateButtons() {
    const filteredHunters = currentFilter
        ? hunters.filter(hunter => hunter.type === currentFilter)
        : hunters;

    document.getElementById('prevBtn').disabled = currentPage === 0;
    const listLength = currentFilter ? filteredHunters.length : hunters.length; 
    document.getElementById('nextBtn').disabled = (currentPage + 1) * huntersPerPage >= listLength;
}

loadHunters(); // Initial load