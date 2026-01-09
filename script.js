
const eyeUnits = document.querySelectorAll('.eye-unit');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    eyeUnits.forEach((unit) => {
        const iris = unit.querySelector('.iris');
        const blob = unit.querySelector('.goo-blob');
        
        // 1. Find the local coordinate space
        const rect = unit.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 2. Trigonometry: Calculate angle in radians
        const angle = Math.atan2(clientY - centerY, clientX - centerX);
        
        // 3. Vector Projection: Limit movement to a 35px radius
        const radius = 35;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // 4. Update DOM with optimized transform performance
        iris.style.transform = `translate(${x}px, ${y}px)`;
        
        // 5. Apply "Lag" vector to the background blob for organic fluidity
        blob.style.transform = `translate(${x * 1.3}px, ${y * 1.3}px)`;
    });
});
