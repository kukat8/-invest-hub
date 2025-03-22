let points = 0;

function searchHub() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    // Mock search results (replace with API calls later)
    if (query === 'tesla') {
        results.innerHTML = `
            <p><strong>Gig:</strong> Tesla Social Media Promoter - $10/task</p>
            <p><strong>Invest:</strong> Tesla Stock - $150.50/share</p>
            <button onclick="addPoints(10)">Complete Gig</button>
        `;
    } else {
        results.innerHTML = '<p>Try names like "Tesla" or "Fiverr"!</p>';
    }
}

function showTab(tab) {
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (tab === 'zero') {
        results.innerHTML = `
            <p>Survey - $0.50 (5 mins)</p>
            <p>Tag Images - $0.10 (1 min)</p>
            <button onclick="addPoints(5)">Start Task</button>
        `;
    } else if (tab === 'invest') {
        results.innerHTML = `
            <p>Buy Crypto (ETH) - $10 min</p>
            <p>Fund Startup - $50 min</p>
            <button onclick="addPoints(20)">Invest $10</button>
        `;
    } else if (tab === 'hot') {
        results.innerHTML = `
            <p>AI Content Reviewer - $15/hr</p>
            <p>Virtual Assistant - $20/hr</p>
            <button onclick="addPoints(15)">Start Gig</button>
        `;
    }
}

function addPoints(amount) {
    points += amount;
    document.getElementById('points').textContent = `Gig Points: ${points}`;
    alert(`Earned ${amount} points!`);
}