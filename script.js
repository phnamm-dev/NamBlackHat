// ============================================
// RBLX H4CK3R SUITE - GOLD EDITION 
// ĐẸP + SỐNG ĐỘNG + TỐI ƯU
// ============================================

// [CONFIG] Link tải tool - THAY LINK CỦA BẠN VÀO ĐÂY
const TOOL_LINKS = {
    'exploit': 'https://store-namserver.vercel.app/',
    'view-source': '',

    'discord': 'https://discord.gg/robloxhackers',
    'telegram': 'https://t.me/phnammm',
    'github': 'https://github.com/phnamm-dev'
};

// ============================================
// 1. TERMINAL REAL-TIME (SỐNG ĐỘNG NHẤT)
// ============================================
class HackTerminal {
    constructor() {
        this.el = document.getElementById('advancedTerminal');
        if (!this.el) return;
        
        this.commands = [];
        this.init();
        this.startLiveFeed();
    }
    
    init() {
        // Xử lý input command
        const input = document.querySelector('.terminal-input-field');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && input.value.trim()) {
                    this.write(`> ${input.value}`);
                    this.processCommand(input.value.trim().toLowerCase());
                    input.value = '';
                }
            });
        }
        
        // Welcome message
        setTimeout(() => {
            this.write('SYSTEM ONLINE - ROBLOX EXPLOIT SUITE v3.0', 'success');
            this.write('Type "help" for commands', 'info');
        }, 100);
    }
    
    write(text, type = 'info') {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.innerHTML = `<span style="color: #00fff9;">[${this.getTime()}]</span> ${text}`;
        this.el.appendChild(line);
        this.el.scrollTop = this.el.scrollHeight;
        
        // Giữ 25 dòng là đủ
        while (this.el.children.length > 25) {
            this.el.removeChild(this.el.children[0]);
        }
    }
    
    getTime() {
        const d = new Date();
        return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
    }
    
    startLiveFeed() {
        // Live feed mỗi 15 giây - tạo cảm giác hacker thật
        const feeds = [
            'Proxy rotation: 192.168.1.45',
            'Anti-ban signature updated',
            'Byfron bypass: ACTIVE',
            'Injector ready',
            '2,847 users online',
            'Hyperion protection: BYPASSED',
            'Exploit database synced',
            'Aimbot AI model loaded'
        ];
        
        setInterval(() => {
            if (Math.random() > 0.6) {
                const msg = feeds[Math.floor(Math.random() * feeds.length)];
                this.write(msg, 'live');
            }
        }, 15000);
    }
    
    processCommand(cmd) {
        if (cmd === 'help') {
            this.write('AVAILABLE COMMANDS:', 'success');
            this.write('  help     - Show this help');
            this.write('  clear    - Clear terminal');
            this.write('  tools    - List all tools');
            this.write('  status   - System status');
            this.write('  hack     - Initiate hack');
            this.write('  exploit  - Run exploit');
        }
        else if (cmd === 'clear') {
            this.el.innerHTML = '';
            this.write('Terminal cleared', 'success');
        }
        else if (cmd === 'tools') {
            this.write('EXPLOIT TOOLS:', 'success');
            this.write('  • AUTO FARM - 98% success rate');
            this.write('  • AIMBOT PRO - 99% accuracy');
            this.write('  • WALLET GEN - 10K robux/h');
            this.write('  • BYPASS ULTRA - Undetected');
        }
        else if (cmd === 'status') {
            this.write('SYSTEM STATUS:', 'success');
            this.write('  • Version: 3.0.7_GOLD');
            this.write('  • Status: ONLINE');
            this.write('  • Users: 15.2K');
            this.write('  • Bypass: ACTIVE');
        }
        else if (cmd === 'hack' || cmd === 'exploit') {
            this.write('💉 Injecting exploit...');
            setTimeout(() => this.write('Injection successful!', 'success'), 400);
            setTimeout(() => this.write('Roblox bypassed!', 'success'), 800);
        }
        else {
            this.write(`Unknown command: ${cmd}`, 'error');
        }
    }
}

// ============================================
// 2. STATS COUNTER ĐẸP MẮT
// ============================================
function initStats() {
    const stats = document.querySelectorAll('.stat-number, .stat-value');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        if (isNaN(target)) return;
        
        let current = 0;
        const increment = Math.ceil(target / 40);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                stat.textContent = current.toLocaleString();
            }
        }, 30);
    });
}

// ============================================
// 3. NÚT DOWNLOAD - HIỆU ỨNG ĐẸP + CHUYỂN LINK
// ============================================
window.redirectToTool = function(toolId) {
    const link = TOOL_LINKS[toolId];
    if (!link) {
        console.error('No link for:', toolId);
        return;
    }
    
    // Hiệu ứng flash đẹp mắt
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #00fff9, #ff00e6);
        opacity: 0.2;
        pointer-events: none;
        z-index: 9999;
        animation: flashOut 0.5s;
    `;
    document.body.appendChild(flash);
    
    // Thông báo
    showNotification(`🔗 Accessing ${toolId}...`);
    
    // Ghi log vào terminal
    const terminal = new HackTerminal();
    terminal.write(`📥 Downloading: ${toolId}`, 'success');
    
    // Mở link sau 300ms
    setTimeout(() => {
        window.open(link, '_blank');
        flash.remove();
    }, 300);
    
    setTimeout(() => {
        terminal.write(`✅ Download link opened`, 'success');
    }, 600);
}

// ============================================
// 4. NOTIFICATION ĐẸP NHẸ
// ============================================
function showNotification(msg) {
    const noti = document.createElement('div');
    noti.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(0, 0, 0, 0.9);
        border: 1px solid #00fff9;
        border-left: 5px solid #00fff9;
        color: #fff;
        padding: 15px 25px;
        font-family: 'Share Tech Mono', monospace;
        z-index: 10000;
        animation: slideInRight 0.3s;
        box-shadow: 0 0 20px rgba(0, 255, 249, 0.3);
        backdrop-filter: blur(5px);
    `;
    noti.innerHTML = `
        <span style="color: #00fff9;">[SYSTEM]</span> ${msg}
    `;
    document.body.appendChild(noti);
    
    setTimeout(() => {
        noti.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => noti.remove(), 300);
    }, 2500);
}

// ============================================
// 5. MATRIX RAIN NHẸ - CHỈ 1 LỚP
// ============================================
class MatrixEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.active = false;
    }
    
    start() {
        if (this.active) return;
        this.active = true;
        
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        document.body.appendChild(this.canvas);
        
        // Chỉ dùng 2 ký tự cho nhẹ
        const chars = '01';
        const fontSize = 16;
        const columns = Math.floor(this.canvas.width / fontSize);
        const drops = new Array(columns).fill(1);
        
        setInterval(() => {
            if (!this.active) return;
            
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#0f0';
            this.ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                this.ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > this.canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }, 100);
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}

// ============================================
// 6. HOVER EFFECT - NHẸ NHÀNG
// ============================================
function initHoverEffects() {
    // Tool cards hover
    document.querySelectorAll('.tool-card-premium').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 0 30px rgba(0, 255, 249, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Buttons hover
    document.querySelectorAll('.download-btn-glow, .portal-button').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 0 20px currentColor';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

// ============================================
// 7. GLITCH TEXT NGẪU NHIÊN
// ============================================
function initGlitchEffect() {
    const glitchText = document.querySelector('.cyber-glitch');
    if (!glitchText) return;
    
    // Thỉnh thoảng glitch nhẹ
    setInterval(() => {
        if (Math.random() > 0.7) {
            glitchText.style.animation = 'none';
            glitchText.offsetHeight; // Force reflow
            glitchText.style.animation = 'glitch 725ms infinite';
        }
    }, 3000);
}

// ============================================
// 8. EMOJI ANIMATION NHẸ
// ============================================
function initEmojiAnimation() {
    const icons = document.querySelectorAll('.tool-icon-3d span, .hologram-icon');
    icons.forEach(icon => {
        setInterval(() => {
            if (Math.random() > 0.8) {
                icon.style.transform = 'scale(1.2)';
                setTimeout(() => icon.style.transform = 'scale(1)', 200);
            }
        }, 2000);
    });
}

// ============================================
// 9. KONAMI CODE - EASTER EGG
// ============================================
function initKonami() {
    let keys = [];
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        keys.push(e.key);
        if (keys.length > code.length) keys.shift();
        
        if (keys.join() === code.join()) {
            showNotification('🎮 KONAMI CODE ACTIVATED! ULTRA MODE!');
            
            // Flash màu
            document.body.style.animation = 'rainbow 2s';
            setTimeout(() => document.body.style.animation = '', 2000);
            
            // Unlock all badges
            document.querySelectorAll('.badge-premium, .badge-rare, .badge-legendary').forEach(b => {
                b.style.animation = 'pulse 0.5s infinite';
            });
        }
    });
}

// ============================================
// 10. INIT TẤT CẢ - GỌN NHẸ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[SYSTEM] Booting RBLX H4CK3R GOLD...');
    
    // Khởi động các module
    const terminal = new HackTerminal();
    const matrix = new MatrixEffect();
    
    initStats();
    initHoverEffects();
    initGlitchEffect();
    initEmojiAnimation();
    initKonami();
    
    // Matrix chỉ bật trên desktop, opacity thấp
    if (window.innerWidth > 768) {
        matrix.start();
    }
    
    // Gán sự kiện cho tất cả nút download
    document.querySelectorAll('[onclick^="redirectToTool"]').forEach(btn => {
        // Giữ nguyên onclick attribute
    });
    
    // Xử lý mirror links
    document.querySelectorAll('.mirror-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.toLowerCase().replace(/[\[\]]/g, '');
            window.redirectToTool(text);
        });
    });
    
    // Smooth scroll cho nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Thông báo ready
    setTimeout(() => {
        showNotification('🚀 System ready - Welcome, hacker!');
    }, 500);
    
    console.log('[SYSTEM] RBLX H4CK3R GOLD is ready!');
});

// ============================================
// CSS ANIMATIONS - THÊM VÀO HEAD
// ============================================
const animStyle = document.createElement('style');
animStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes flashOut {
        0% { opacity: 0.3; }
        100% { opacity: 0; }
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .terminal-line.live {
        color: #888;
        font-style: italic;
    }
    
    .terminal-line.success {
        color: #00fff9;
        text-shadow: 0 0 5px #00fff9;
    }
    
    .terminal-line.error {
        color: #ff00e6;
        text-shadow: 0 0 5px #ff00e6;
    }
`;
document.head.appendChild(animStyle);