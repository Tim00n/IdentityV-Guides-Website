const survivors = [
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Doctor_rguooy.webp", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Lawyer_dck7nk.webp", type:"decode"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Thief_n1ekng.webp", type:"contain" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Gardener_cguzzh.webp", type:"contain"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Magician_lfmsol.webp", type:"contain" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Explorer_qfa1aw.webp", type:"decode" },
    { name: "", url: "./survivors/identity-v-mercenary-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Merc_erwomx.webp", type:"rescue"},
    { name: "", url: "./survivors/identity-v-coordinator-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/TheQueen_jdrwxk.webp", type:"rescue"},
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Roach_kqjv9c.webp", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Mechanic_wqgpvo.png", type:"decode" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Forward_zk7veo.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/The_Mind_s_Eye_bfn1ro.png", type:"decode" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Perfumer_p3dwrj.png", type:"contain" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Cowboy_b39jav.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Female_Dancer_stt7bm.png", type:"contain" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Seer_cyqwes.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Embalmer_gtl99o.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Prospector_zmjubd.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Enchantress_y2od19.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Wildling_kmrmse.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063333/Acrobat_aqoo5o.png", type:"contain" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/First_Officer_bdgjta.png", type:"rescue" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Barmaid_ge43jj.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Postman_mceqzv.png", type:"assist" },
    { name: "", url: "./survivors/identity-v-gravekeeper-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Gravekeeper_oik2gh.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Prisoner_evqz9d.png", type:"decode" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Entomologist_peqy8b.png", type:"contain"  },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Painter_cerl8g.png", type:"assist"  },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Batter_cz5zrg.png", type:"assist"  },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Toy_Merchant_njpesc.png", type:"contain"  },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Patient_xhmxcm.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Psychologist_lkvosm.png", type:"assist"  },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Novelist_vxaxyi.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Little_Girl_xkacyx.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Weeping_Clown_les825.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Professor_ymhnav.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Antiquarian_t3vgjp.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Composer_ydhlzf.png", type:"decode" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Journalist_yvrz6v.png", type:"rescue" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Aeroplanist_jcqwkf.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Cheerleader_ofh8xb.png", type:"assist" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Puppeteer_zgdcw3.png" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Fire_Investigator_pxeoge.png" },
    { name: "", url: "./survivors/identity-v-faro-lady-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Faro_Lady_zk781a.png", type:"decode" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Knight_zb012f.png", type:"rescue" },
    { name: "", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Lucky_Guy_nsazr0.png" },

    
];

let currentFilter = null;
let currentSurvivorPage = 0;
const survivorsPerPage = 18;

async function checkFileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok; 
    } catch (error) {
        console.error(`File not found ${url}:`, error);
        return false; 
    }
}

async function loadSurvivors() {
    const grid1 = document.getElementById('survivorGrid1');
    const grid2 = document.getElementById('survivorGrid2');
    grid1.innerHTML = '';
    grid2.innerHTML = '';

    const filteredSurvivors = currentFilter
        ? survivors.filter(survivor => survivor.type === currentFilter)
        : survivors;

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
