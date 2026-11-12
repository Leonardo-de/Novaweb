document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  toggleBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Alterar Ã­cone (simplificado para manter o mesmo SVG, mas em um app real trocaria o path)
    const svg = toggleBtn.querySelector('svg');
    if (type === 'text') {
      svg.innerHTML = '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>';
    } else {
      svg.innerHTML = '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>';
    }
  });

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // SimulaÃ§Ã£o de login
    const btn = form.querySelector('.btn-primary');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Entrando...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1500);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => { bar.style.width = width; }, 100);
    });
  }, 200);

  // Chart hover effect
  const chartSvg = document.querySelector('.chart-svg');
  if (chartSvg) {
    const tooltip = document.createElement('div');
    tooltip.style.cssText = 'position:absolute; background:#0F172A; color:white; padding:8px 12px; border-radius:8px; font-size:12px; font-weight:600; pointer-events:none; opacity:0; transition:opacity 0.2s; transform:translate(-50%, -100%); white-space:nowrap; z-index:10;';
    document.querySelector('.chart-container').appendChild(tooltip);
    
    chartSvg.addEventListener('mousemove', function(e) {
      const rect = chartSvg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const day = Math.floor((x / rect.width) * 30) + 1;
        const value = (Math.random() * 5000 + 10000).toFixed(2);
        tooltip.textContent = `Dia ${day}: R$ ${value}`;
        tooltip.style.left = x + 'px';
        tooltip.style.top = (y - 10) + 'px';
        tooltip.style.opacity = '1';
      } else {
        tooltip.style.opacity = '0';
      }
    });
    
    chartSvg.addEventListener('mouseleave', function() {
      tooltip.style.opacity = '0';
    });
  }

  // Sidebar navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') return;
      e.preventDefault();
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Store selector toggle
const storeSelector = document.querySelector('.store-selector');
if (storeSelector) {
  storeSelector.addEventListener('click', function() {
    this.style.borderColor = this.style.borderColor === 'var(--accent)' ? 'var(--border)' : 'var(--accent)';
  });
}
