// Code made using tutorials by Chris Courses (https://www.youtube.com/@ChrisCourses)

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
};

// Determine circle settings based on screen size
var circleCount = window.innerWidth > 768 ? 300 : 100; // Fewer circles on mobile
var maxRadius = window.innerWidth > 768 ? 5 : 3; // Smaller max radius on mobile

var colorArray = [
    '#344e41',
    '#3a5a40',
    '#588157',
    '#a3b18a',
    '#dad7cd',
];

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Update circle settings on resize
    circleCount = window.innerWidth > 768 ? 300 : 100;
    maxRadius = window.innerWidth > 768 ? 5 : 3;

    init();
});

// Circle Factory Function
function createCircle(x, y, dx, dy, radius) {
    const minRadius = radius;
    const color = colorArray[Math.floor(Math.random() * colorArray.length)];

    function draw() {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
    }

    function update() {
        if (x + radius > innerWidth || x - radius < 0) {
            dx = -dx;
        }

        if (y + radius > innerHeight || y - radius < 0) {
            dy = -dy;
        }

        x += dx;
        y += dy;

        // Interactivity
        if (mouse.x - x < 50 && mouse.x - x > -50 && mouse.y - y < 50 && mouse.y - y > -50) {
            if (radius < maxRadius) {
                radius += 1;
            }
        } else if (radius > minRadius) {
            radius -= 1;
        }

        draw();
    }

    return { update };
}

var circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < circleCount; i++) {
        var radius = Math.random() * 3 + 1;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);
        circleArray.push(createCircle(x, y, dx, dy, radius));
    }
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animate();

//Typing Animation

const textElement = document.querySelector('.text');
        const texts = ["Coding", "Design", "Functionality"];  
        let textIndex = 0;
        let charIndex = 0;
        let typingSpeed = 100;  
        let deletingSpeed = 50;  
        let delayBetweenTexts = 1500;

        function typeText() {
            if (charIndex < texts[textIndex].length) {
                textElement.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed); 
            } else {
                setTimeout(deleteText, delayBetweenTexts);
            }
        }

        function deleteText() {
            if (charIndex > 0) {
                textElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(deleteText, deletingSpeed); 
            } else {
                textIndex = (textIndex + 1) % texts.length; 
                setTimeout(typeText, typingSpeed); 
            }
        }
        
        typeText();


//Nav Bar
        function toggleMenu() {
            const navMenu = document.getElementById("navMenu");
            navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
};


// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',        // Adjust distance of the reveal
    duration: 800,           // Duration of animation (in ms)
    easing: 'ease-in-out',   // Animation easing
    reset: true             // Animations only happen once
});

// Apply effects to elements
sr.reveal('.about-container', { origin: 'top' });
sr.reveal('.about-text', { origin: 'bottom', interval: 200 });
sr.reveal('.projects-container', { origin: 'bottom', delay: 300 });
sr.reveal('.contact-container', { origin: 'bottom', delay: 200 });