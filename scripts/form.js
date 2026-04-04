const packages = [
    { id: 1, name: "Cultural Weekend", region: "Central" },
    { id: 2, name: "Wildlife Safari", region: "Lubombo" },
    { id: 3, name: "Waterfall Walk", region: "Hhohho" },
    { id: 4, name: "Family Adventure", region: "All Regions" }
];

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('destination-package');
    packages.forEach(pkg => {
        const option = document.createElement('option');
        option.value = pkg.name;
        option.textContent = `${pkg.name} — ${pkg.region}`;
        select.appendChild(option);
    });

    const form = document.getElementById('travel-form');
    form.addEventListener('submit', event => {
        const email = document.getElementById('email').value.trim();
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }
        const requestCount = parseInt(localStorage.getItem('tripRequestCount')) || 0;
        localStorage.setItem('tripRequestCount', requestCount + 1);
    });
});