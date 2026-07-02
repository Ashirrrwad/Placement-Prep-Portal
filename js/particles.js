/**
 * particles.js — Interactive constellation background
 * Arankerzz Placement Prep Portal
 * Auto-injects a canvas behind every page body
 */
(function () {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.id = 'particleCanvas';
  Object.assign(canvas.style, {
    position: 'fixed', top: '0', left: '0',
    width: '100%', height: '100%',
    zIndex: '-1', pointerEvents: 'none',
    display: 'block'
  });
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  const mouse = { x: null, y: null };
  let W = 0, H = 0, particles = [];

  // ── Resize ──────────────────────────────────────────
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // ── Mouse tracking ──────────────────────────────────
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  // ── Particle class ──────────────────────────────────
  const COLORS = ['#ffa116', '#3b82f6', '#2cbb5d', '#a78bfa'];
  class Particle {
    constructor() { this.init(); }
    init() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 1.8 + 0.8;
      this.base_opacity = Math.random() * 0.45 + 0.15;
      this.opacity = this.base_opacity;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Mouse repulsion
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const d  = Math.hypot(dx, dy);
        if (d < 110) {
          const f = (110 - d) / 110;
          this.x += dx * f * 0.025;
          this.y += dy * f * 0.025;
          this.opacity = Math.min(1, this.base_opacity + f * 0.6);
        } else {
          this.opacity += (this.base_opacity - this.opacity) * 0.05;
        }
      }

      // Wrap edges
      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.restore();
    }
  }

  // ── Init particles ──────────────────────────────────
  function initParticles() {
    const count = Math.min(80, Math.floor((W * H) / 12000));
    particles = Array.from({ length: count }, () => new Particle());
  }
  window.addEventListener('resize', initParticles);
  initParticles();

  // ── Draw connections ────────────────────────────────
  function drawConnections() {
    const maxD = 140;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.hypot(dx, dy);
        if (d < maxD) {
          const alpha = (1 - d / maxD) * 0.12;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(255,161,22,1)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
          ctx.restore();
        }
      }
      // Mouse connection
      if (mouse.x !== null) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const d  = Math.hypot(dx, dy);
        if (d < 160) {
          const alpha = (1 - d / 160) * 0.25;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#ffa116';
          ctx.lineWidth = 0.8;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  // ── Animation loop ──────────────────────────────────
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
})();
