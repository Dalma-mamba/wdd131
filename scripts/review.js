document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById('package-name').textContent = urlParams.get('destination-package') || 'N/A';
    document.getElementById('group-size').textContent = urlParams.get('group-size') || 'N/A';
    document.getElementById('start-date').textContent = urlParams.get('start-date') || 'N/A';
    const interests = urlParams.getAll('interests');
    document.getElementById('interests').textContent = interests.length > 0 ? interests.join(', ') : 'None';
    document.getElementById('special-requests').textContent = urlParams.get('special-requests') || 'None';
    document.getElementById('user-name').textContent = urlParams.get('user-name') || 'Guest';
    document.getElementById('email').textContent = urlParams.get('email') || 'Not provided';

    const count = parseInt(localStorage.getItem('tripRequestCount')) || 0;
    document.getElementById('count').textContent = count;
});