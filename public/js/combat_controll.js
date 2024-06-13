console.log("Hello World!")
function alterHP(current, total) {
    let hp_fill = document.querySelector('.hp_fill');
    let hp_count = document.querySelector('.hp');
    let hp_percent = (current / total) * 10;
    hp_fill.style.width = hp_percent + '%';
    hp_count.innerHTML = current + '/' + total;
}

function alterMana(current, total) {
    let mana_fill = document.querySelector('.mana_fill');
    let mana_count = document.querySelector('.mana_count');
    let mana_percent = (current / total) * 100;
    mana_fill.style.width = mana_percent + '%';
    mana_count.innerHTML = current + '/' + total;
}

function alterXP(current, need){
    let xp_full = document.querySelector('.xp_full');
    let xp_count = document.querySelector('.count');
    let xp_percent = (current / need) * 100;
    xp_full.style.heigth = xp_percent + '%';
    xp_count.innerHTML = current + '/' + need;
}