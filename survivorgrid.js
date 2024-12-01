const survivors = [
    { name: "", url: "./survivors/Doctor/Doctor.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063343/Doctor_rguooy.webp" },
    { name: "", url: "./survivors/Lawyer/Lawyer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Lawyer_dck7nk.webp" },
    { name: "", url: "./survivors/Thief/Thief.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Thief_n1ekng.webp" },
    { name: "", url: "./survivors/Gardener/Gardener.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Gardener_cguzzh.webp" },
    { name: "", url: "./survivors/Magician/Magician.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Magician_lfmsol.webp" },
    { name: "", url: "./survivors/Explorer/Explorer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063342/Explorer_qfa1aw.webp" },
    { name: "", url: "./survivors/identity-v-mercenary-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063341/Merc_erwomx.webp" },
    { name: "", url: "./survivors/identity-v-coordinator-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/TheQueen_jdrwxk.webp" },
    { name: "", url: "./survivors/Priestess/Priestess.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Roach_kqjv9c.webp" },
    { name: "", url: "./survivors/Mechanic/Mechanic.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Mechanic_wqgpvo.png" },
    { name: "", url: "./survivors/Forward/Forward.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Forward_zk7veo.png" },
    { name: "", url: "./survivors/The Mind's Eye/The Mind's Eye.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/The_Mind_s_Eye_bfn1ro.png" },
    { name: "", url: "./survivors/Perfumer/Perfumer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Perfumer_p3dwrj.png" },
    { name: "", url: "./survivors/Cowboy/Cowboy.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Cowboy_b39jav.png" },
    { name: "", url: "./survivors/Female Dancer/Female Dancer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Female_Dancer_stt7bm.png" },
    { name: "", url: "./survivors/Seer/Seer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Seer_cyqwes.png" },
    { name: "", url: "./survivors/Embalmer/Embalmer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Embalmer_gtl99o.png" },
    { name: "", url: "./survivors/Prospector/Prospector.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Prospector_zmjubd.png" },
    { name: "", url: "./survivors/Enchantress/Enchantress.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Enchantress_y2od19.png" },
    { name: "", url: "./survivors/Wildling/Wildling.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Wildling_kmrmse.png" },
    { name: "", url: "./survivors/Acrobat/Acrobat.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063333/Acrobat_aqoo5o.png" },
    { name: "", url: "./survivors/First Officer/First Officer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/First_Officer_bdgjta.png" },
    { name: "", url: "./survivors/Barmaid/Barmaid.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Barmaid_ge43jj.png" },
    { name: "", url: "./survivors/Postman/Postman.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Postman_mceqzv.png" },
    { name: "", url: "./survivors/identity-v-gravekeeper-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Gravekeeper_oik2gh.png" },
    { name: "", url: "./survivors/Prisoner/Prisoner.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Prisoner_evqz9d.png" },
    { name: "", url: "./survivors/Entomologist/Entomologist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Entomologist_peqy8b.png" },
    { name: "", url: "./survivors/Painter/Painter.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Painter_cerl8g.png" },
    { name: "", url: "./survivors/Batter/Batter.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Batter_cz5zrg.png" },
    { name: "", url: "./survivors/Toy Merchant/Toy Merchant.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Toy_Merchant_njpesc.png" },
    { name: "", url: "./survivors/Patient/Patient.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Patient_xhmxcm.png" },
    { name: "", url: "./survivors/Psychologist/Psychologist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Psychologist_lkvosm.png" },
    { name: "", url: "./survivors/Novelist/Novelist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Novelist_vxaxyi.png" },
    { name: "", url: "./survivors/Little Girl/Little Girl.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063337/Little_Girl_xkacyx.png" },
    { name: "", url: "./survivors/Weeping Clown/Weeping Clown.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Weeping_Clown_les825.png" },
    { name: "", url: "./survivors/Professor/Professor.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Professor_ymhnav.png" },
    { name: "", url: "./survivors/Antiquarian/Antiquarian.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Antiquarian_t3vgjp.png" },
    { name: "", url: "./survivors/Composer/Composer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Composer_ydhlzf.png" },
    { name: "", url: "./survivors/Journalist/Journalist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063340/Journalist_yvrz6v.png" },
    { name: "", url: "./survivors/Aeroplanist/Aeroplanist.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063335/Aeroplanist_jcqwkf.png" },
    { name: "", url: "./survivors/Cheerleader/Cheerleader.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Cheerleader_ofh8xb.png" },
    { name: "", url: "./survivors/Puppeteer/Puppeteer.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063334/Puppeteer_zgdcw3.png" },
    { name: "", url: "./survivors/Fire Investigator/Fire Investigator.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063338/Fire_Investigator_pxeoge.png" },
    { name: "", url: "./survivors/identity-v-faro-lady-guide.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063339/Faro_Lady_zk781a.png" },
    { name: "", url: "./survivors/Knight/Knight.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063332/Knight_zb012f.png" },
    { name: "", url: "./survivors/Lucky Guy/Lucky Guy.html", img: "https://res.cloudinary.com/dsim8rimy/image/upload/v1733063336/Lucky_Guy_nsazr0.png" },

    
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