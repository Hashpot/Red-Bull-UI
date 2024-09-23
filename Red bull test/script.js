// Function to fetch and display driver standings
function fetchDriverStandings() {
    fetch('https://pitwall.redbullracing.com/api/stats/drivers/2023', {
        headers: {
            'x-api-key': '7303c8ef-d91a-4964-a7e7-78c26ee17ec4' 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`API call failed with status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data); // Log fetched data for debugging
        const tableBody = document.getElementById('standings-body');
        tableBody.innerHTML = ''; // Clear existing content

        data.forEach((driver, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td> <!-- Position -->
                <td>${driver.first_name} ${driver.last_name}</td> <!-- Driver Name -->
                <td>${driver.season_team_name}</td> <!-- Constructor (Team) -->
                <td>${driver.season_points}</td> <!-- Points -->
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching driver standings:', error);
    });
}


document.addEventListener('DOMContentLoaded', fetchDriverStandings);


window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;  
    const background = document.querySelector('.parallax-background');
    const foreground = document.querySelector('.parallax-foreground');
    const driverStandingsScreen = document.querySelector('.driver-standings-screen');

   
    background.style.transform = `translateY(${scrollTop * 0.3}px)`;
    foreground.style.transform = `translateY(${scrollTop * 0.6}px)`;

    
});
