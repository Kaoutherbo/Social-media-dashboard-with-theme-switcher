
const toggle = document.querySelector('.toggle');
    const toggleBtn = document.querySelector('.toggle > div');
    const stylesheetLink = document.getElementById("stylesheet");
    let isClicked = true;

    toggleBtn.addEventListener('click', () => {
        if (isClicked) {
            toggleBtn.style.right = null;
            toggleBtn.style.left = '0px';
            stylesheetLink.setAttribute("href", "darkMode.css");
        } else {
            toggleBtn.style.right = '0px';
            toggleBtn.style.left = null;
            stylesheetLink.setAttribute("href", "lightMode.css");
        }
        isClicked = !isClicked;
    });


