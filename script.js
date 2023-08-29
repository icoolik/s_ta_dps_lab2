document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const acceptCookies = document.getElementById('acceptCookies');
    const closePopup = document.getElementById('closePopup');

    acceptCookies.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    closePopup.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });
});