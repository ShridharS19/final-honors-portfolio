// Floating dust particles
const particles = document.createElement('canvas');
particles.width = window.innerWidth;
particles.height = window.innerHeight;
particles.style.position = 'fixed';
particles.style.top = 0;
particles.style.left = 0;
particles.style.zIndex = 0;
particles.style.pointerEvents = 'none';
document.body.appendChild(particles);

const ctx = particles.getContext('2d');
let dots = Array.from({ length: 100 }, () => ({
  x: Math.random() * particles.width,
  y: Math.random() * particles.height,
  r: Math.random() * 1.5 + 0.5,
  dx: Math.random() * 0.5 - 0.25,
  dy: Math.random() * 0.5 - 0.25
}));

function animateDust() {
  ctx.clearRect(0, 0, particles.width, particles.height);
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  dots.forEach(dot => {
    dot.x += dot.dx;
    dot.y += dot.dy;

    if (dot.x < 0 || dot.x > particles.width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > particles.height) dot.dy *= -1;

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(animateDust);
}
animateDust();
