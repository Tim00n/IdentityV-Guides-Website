const hunters = [
    { name: "", url: "./hunters/identity-v-hell-ember-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Hell_Ember_Card_uyezls.png"  },
    { name: "", url: "./hunters/Smiley_Face.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Smiley_Card_frii66.png" },
    { name: "", url: "./hunters/Smiley_Face.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Gamekeeper_Card_roh9kp.png" },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Ripper_Card_qufit7.png"  },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Soul_Weaver_Card_p7tvgo.png"  },
    { name: "", url: "./hunters/Geisha.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Geisha_Card_mfbtd9.png" },
    { name: "", url: "./hunters/identity-v-wu-chang-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/WuChang_Card_r3gdgk.png" },
    { name: "", url: "./hunters/identity-v-photographer-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Photographer_Card_ipoqa8.png" },
    { name: "", url: "./hunters/Mad_Eyes.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Mad_Eyes_Card_y0m4mb.png" },
    { name: "", url: "./hunters/Feaster.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063349/Feaster_Card_nsxpa4.png" },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Dream_Witch_Card_cqalg2.png"  },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063344/Axe_Boy_Card_aecncd.png"  },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063348/Evil_Reptilian_Card_hiqwnp.png"  },
    { name: "", url: "./hunters/Bloody_Queen.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063347/Bloody_Queen_Card_rdalyl.png" },
    { name: "", url: "./hunters/Guard_26.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063352/Guard_26_Card_jklexq.png" },
    { name: "", url: "./hunters/Disciple.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063353/Disciple_Card_eu5ge4.png"},
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063353/Violinist_Card_zr9ses.png"  },
    { name: "", url: "./hunters/Sculptor.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/Sculptor_yqvi1v.png" },
    { name: "", url: "./hunters/identity-v-undead-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Undead_Card_wdqih5.webp"},
    { name: "", url: "./hunters/The_Breaking_Wheel.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/The_Breaking_Wheel_Card_hxjzod.png" },
    { name: "", url: "./hunters/Naiad.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063349/Naiad_Card_rdne8x.png" },
    { name: "", url: "./hunters/Wax_Artist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Wax_Artist_Card_fiy3oq.png" },
    { name: "", url: "./hunters/Hell_Ember.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Nightmare_Card_qrasfw.png"  },
    { name: "", url: "./hunters/Clerk.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063351/Clerk_Card_pejmze.png" },
    { name: "", url: "./hunters/identity-v-hermit-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063354/Hermit_Card_yczt48.png" },
    { name: "", url: "./hunters/Night_Watch.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Night_Watch_Card_ycnkdb.png" },
    { name: "", url: "./hunters/Opera_Singer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063346/Opera_Singer_Card_glwz9d.png" },
    { name: "", url: "./hunters/Fool's_Gold.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/FG_Card_kfxjjb.png" },
    { name: "", url: "./hunters/Shadow.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063345/Shadow_Card_ceozif.png" },
    { name: "", url: "./hunters/Goatman.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063350/Goatman_Card_jrfhwo.png" },
    { name: "", url: "./hunters/Hullabaloo.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Hullaballo_Card_mymbhx.png" },
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