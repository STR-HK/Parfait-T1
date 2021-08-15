let scroll = 10000;

function profileInit() {
    // profile initialization
    let profiles = document.getElementsByTagName('user-profile');
    for (let idx = 0; idx < profiles.length; idx++) {
        profiles.item(idx).className += 'header'
        profiles.item(idx).innerHTML = `
            <img src="${profiles.item(idx).attributes.src.value}" class='profile'>
            <div class="name">${profiles.item(idx).attributes.user.value}</div>
            <div class="description">${profiles.item(idx).attributes.desc.value}</div>
        `
    }
    // user container initialization
    let userContainer = document.getElementsByTagName('user-container').item(0);
    let div = document.createElement('div');
    // insert after userContainer
    userContainer.parentNode.insertBefore(div, userContainer.nextSibling);
    // 350 per one profile
    if (userContainer.children.length * 350 > document.body.clientWidth) {
        div.className = 'scrollbar';
        let len = userContainer.children.length;
        for (let idx2 = 0; idx2 < len; idx2++) {
            // focus into needed profile
            div.innerHTML += `
                <div class="dot" onclick="document.getElementsByTagName('user-container').item(0).children.item(${idx2}).scrollIntoView({ behavior: 'smooth', inline: 'center' });"></div>
            `
        }
    }
    else {
        div.style.backgroundColor = '#e0e0e0'
        userContainer.style.justifyContent = 'center';
        div.style.height = '25px';
    }
}




window.onload = profileInit;