document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('close-banner');

    // Function to check the current day and display the banner if it's Monday, Tuesday, or Wednesday
    function checkDayAndDisplayBanner() {
        const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
        if (today >= 1 && today <= 3) { // Monday, Tuesday, Wednesday
            banner.style.display = 'block';
        }
    }

    // Event listener to close the banner
    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });

    // Check the day and display the banner if applicable
    checkDayAndDisplayBanner();
});