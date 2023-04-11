var ckBox = document.querySelector('#checkbox-color');


ckBox.addEventListener('change', () => {
    if (ckBox.checked) {
        document.body.style.setProperty('--white', '#000000');
        document.body.style.setProperty('--bgDarkColor1', '#f8f9fe');
        document.body.style.setProperty('--bgDarkColor2', '#ffffff');
        document.body.style.setProperty('--divInfDarkColor', '#f0f3fa');
        document.body.style.setProperty('--divInfoDarkSelected', '#e1e3f0');

    } else {
        document.body.style.setProperty('--white', '#fff');
        document.body.style.setProperty('--bgDarkColor1', '#20222f');
        document.body.style.setProperty('--bgDarkColor2', '#1d2029');
        document.body.style.setProperty('--divInfDarkColor', '#252b43');
        document.body.style.setProperty('--divInfoDarkSelected', '#333a56');
    }
})


