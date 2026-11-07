(function () {

  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };



  /* Cache chaque lettre d'un texte (la mise en page ne bouge pas) */

  function mk(el) {

    var t = el.textContent.replace(/\s+/g, ' ').trim(), sp = [];

    el.textContent = '';

    Array.from(t).forEach(function (c) {

      var s = document.createElement('span');

      s.className = 'ch h'; s.textContent = c;

      el.appendChild(s); sp.push(s);

    });

    el.classList.add('pre');

    return { el: el, sp: sp };

  }

  function mkPh(el) {

    var t = el.placeholder; el.placeholder = '\u00a0'; el.classList.add('pre');

    return { el: el, ph: Array.from(t) };

  }

  var delay = function () { return 45 + Math.random() * 65 + (Math.random() < .08 ? 200 : 0); };



  /* Écriture « à peine » : lettre par lettre, hésitante, pâle puis qui s'allume */

  async function typeAll(items) {

    await wait(450);

    for (var k = 0; k < items.length; k++) {

      var it = items[k]; it.el.classList.add('on');

      if (it.ph) {

        var s = '';

        for (var j = 0; j < it.ph.length; j++) { s += it.ph[j]; it.el.placeholder = s; await wait(delay()); }

      } else {

        var prev = null;

        for (var i = 0; i < it.sp.length; i++) {

          it.sp[i].classList.remove('h');

          if (prev) prev.classList.remove('cur');

          it.sp[i].classList.add('cur'); prev = it.sp[i];

          await wait(delay());

        }

        if (prev) prev.classList.remove('cur');

      }

      it.el.classList.add('done'); await wait(90);

      it.el.classList.remove('done'); await wait(70);

      it.el.classList.add('done'); await wait(110);

      it.el.classList.remove('pre', 'on', 'done');

      await wait(150);

    }

  }



  var introItems = [mk(document.getElementById('iL1')), mk(document.getElementById('iL2')), mk(document.getElementById('enter'))];

  var cardItems = [

    mk(document.querySelector('.main-title')),

    mk(document.getElementById('title-hajun')),

    mk(document.querySelector('label[for="phone"]')),

    mkPh(document.getElementById('phone')),

    mk(document.querySelector('.check-btn')),

    mk(document.querySelector('.footer'))

  ];



  document.getElementById('enter').addEventListener('click', function () {

    document.getElementById('intro').classList.add('gone');

    typeAll(cardItems);

  });



  typeAll(introItems);

})();



