// Display review details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Display form data
    document.getElementById('product-name').textContent = urlParams.get('product-name') || 'N/A';
    document.getElementById('rating').textContent = urlParams.get('rating') || 'N/A';
    document.getElementById('install-date').textContent = urlParams.get('install-date') || 'N/A';
    const features = urlParams.getAll('features');
    document.getElementById('features').textContent = features.length > 0 ? features.join(', ') : 'None';
    document.getElementById('written-review').textContent = urlParams.get('written-review') || 'N/A';
    document.getElementById('user-name').textContent = urlParams.get('user-name') || 'Anonymous';
    
    // Increment and display review count
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('count').textContent = count;
});