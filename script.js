var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');
    
    document.addEventListener('DOMContentLoaded', function() {
        
        function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    changeColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = getRandomColor();
    });
});