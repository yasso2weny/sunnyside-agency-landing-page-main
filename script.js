document.addEventListener('DOMContentLoaded', function() {
    var menuLines = document.getElementById('hamburger-menu-lines');
    var hamburgerMenu = document.getElementById('hamburger-menu-container');

    menuLines.addEventListener('click', function() {
        if (hamburgerMenu.style.display === 'block') {
            hamburgerMenu.style.display = 'none';
        } else {
            hamburgerMenu.style.display = 'block';
        }
    });
});
