function updateClock() {  
    const now = new Date();  
    let hours = now.getHours();  
    const minutes = String(now.getMinutes()).padStart(2, '0');  
    const seconds = String(now.getSeconds()).padStart(2, '0');  

    const timeFormat = document.getElementById('timeFormat').value;  

    if (timeFormat === "12") {  
        hours = hours % 12 || 12; // Convert to 12-hour format  
    }  
    hours = String(hours).padStart(2, '0');  
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;  
    document.getElementById('date').textContent = now.toLocaleDateString();  
}  

function applySettings() {  
    const bgColor = document.getElementById('bgColor').value;  
    document.body.style.backgroundColor = bgColor;  
    localStorage.setItem('bgColor', bgColor);  
}  

function changeTheme() {  
    const theme = document.getElementById('themeSelect').value;  
    switch (theme) {  
        case 'dark':  
            document.body.style.backgroundColor = '#1a1a1a';  
            document.body.style.color = 'white';  
            document.getElementById('formContainer').style.background = 'rgba(0, 0, 0, 0.7)';  
            break;  
        case 'light':  
            document.body.style.backgroundColor = '#f0f0f0';  
            document.body.style.color = '#000';  
            document.getElementById('formContainer').style.background = 'rgba(255, 255, 255, 0.9)';  
            break;  
        case 'colorful':  
            // The colorful background and form animation are handled by CSS  
            return;  
        default:  
            document.body.style.backgroundColor = localStorage.getItem('bgColor') || '#282c34';  
            document.body.style.color = '#fff';  
            document.getElementById('formContainer').style.background = 'rgba(255, 255, 255, 0.8)';  
            break;  
    }  
}  

document.addEventListener('DOMContentLoaded', () => {  
    const savedBgColor = localStorage.getItem('bgColor');  
    if (savedBgColor) {  
        document.body.style.backgroundColor = savedBgColor;  
        document.getElementById('bgColor').value = savedBgColor;  
    }  
    changeTheme(); // Apply saved theme on load  

    // Show form with animation  
    const formContainer = document.getElementById('formContainer');  
    formContainer.classList.add('active');  
});  

setInterval(updateClock, 1000);  
updateClock(); // Initial call to display the clock immediately  