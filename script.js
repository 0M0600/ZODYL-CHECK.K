// Textes de bannissement par place

const banMessages = {

  hajun: " ᴛ’ᴀᴜʀᴀɪᴤ ᴊᴀᴍᴀɪᴤ ᴅÛ ᴄʀᴏɪᴤᴇʀ ᴍᴀ ʀᴏᴜᴛᴇ…ᴍᴀɪɴᴛᴇɴᴀɴᴛ ᴅᴏʀᴤ ᴘᴏᴜʀ ᴛᴏᴜᴊᴏᴜʀᴤ…👣ʙᴀᴊɪ•ᴅ•ᴊᴀᴘ ⚖️…ʟ’ᴀɴɢᴇ ᴤᴀɴᴤ ᴛÊᴛᴇ",

  empereur: " 𝑷𝑨𝑹 𝑴𝑶𝑵 𝑵𝑶𝑴 : 𝑩𝑨𝑱𝑰•𝑫•𝑱𝑨𝑷 ⚖️…𝑳’𝑨𝑵𝑮𝑬 𝑺𝑨𝑵𝑺 𝑻Ê𝑻𝑬… 𝑻𝑼 𝑬𝑺 𝑴𝑰𝑺𝑬 À ",

  esdeath: "𝑪𝒐𝒏𝒕𝒊𝒏𝒖𝒆𝒛 𝒅𝒆 𝒓𝒂𝒎𝒑𝒆𝒓, 𝒍𝒂 𝒗𝒖𝒆 𝒆𝒔𝒕 𝒃𝒆𝒍𝒍𝒆 𝒒𝒖𝒂𝒏𝒅 𝒋𝒆 𝒗𝒐𝒖𝒔 𝒓𝒆𝒗𝒂𝒓𝒊𝒄𝒆… 𝒂𝒍𝒊𝒂𝒔 𝒍’𝒂𝒏𝒈𝒆 𝒔𝒂𝒏𝒔 𝒕ê𝒕𝒆…"

};



let currentPlace = 'hajun';



function toggleMenu() {

  document.getElementById('menuDropdown').classList.toggle('show');

}



window.onclick = function (event) {

  if (!event.target.matches('.menu-dots')) {

    var dropdowns = document.getElementsByClassName("menu-dropdown");

    for (var i = 0; i < dropdowns.length; i++) {

      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {

        openDropdown.classList.remove('show');

      }

    }

  }

};



function selectPlace(placeId) {

  currentPlace = placeId;

  toggleMenu();



  const items = document.querySelectorAll('.menu-item');

  items.forEach(item => item.classList.remove('active'));

  event.target.classList.add('active');



  const titles = document.querySelectorAll('.sub-title');

  titles.forEach(title => title.classList.remove('active'));



  document.getElementById('title-' + placeId).classList.add('active');



  const box = document.getElementById('statusBox');

  box.style.display = "none";

  box.innerHTML = "";

}



async function checkStatus() {

  const phoneInput = document.getElementById('phone').value.replace(/[^0-9]/g, '');

  const box = document.getElementById('statusBox');



  if (!phoneInput || phoneInput.length < 8) {

    box.className = "status banned";

    box.innerText = "❌ ERREUR SYSTÈME : NUMÉRO INVALIDE. INDICATIF OBLIGATOIRE (EX: 237...).";

    box.style.display = "block";

    return;

  }



  box.className = "status loading";

  box.innerText = "⏳ INJECTION DES PROTOCOLES... ANALYSE PAR KILLIAN D";

  box.style.display = "block";



  await new Promise(resolve => setTimeout(resolve, 2000));



  // Logique factice : banni si le dernier chiffre est impair

  const isBanned = parseInt(phoneInput.slice(-1)) % 2 !== 0;



  if (!isBanned) {

    box.className = "status active";

    box.innerText = "✅ STATUT : CONTINNUE DE FUIR ET MANGE DU POULET";

  } else {

    box.className = "status banned";

    box.innerText = banMessages[currentPlace];

  }

}



