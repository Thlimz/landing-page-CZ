// main.js — CzTechnology V1 Corporate Authority
// GSAP Animations + Chat Demo + Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // ============ 1. GSAP REVEAL ============
    document.querySelectorAll('.reveal').forEach(el => {
        const delay = parseInt(el.dataset.delay || '0', 10) / 1000;
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
        });
    });

    // ============ 2. CHAT DEMO ============
    const chatBody = document.getElementById('chatBody');
    if (chatBody) {
        const messages = [
            { from: 'user', text: 'Vocês entregam em SP capital?', t: 200 },
            { from: 'bot', text: 'Sim! Entregamos em SP capital com prazo de 24h. Posso já agendar?', t: 1400 },
            { from: 'user', text: 'Pode sim, amanhã de manhã', t: 2800 },
            { from: 'bot', text: 'Perfeito ✓ Agendado para amanhã 09h. Vou te enviar a confirmação por aqui.', t: 4000 },
        ];

        function runChat() {
            chatBody.innerHTML = '';
            const timers = [];

            messages.forEach((m, i) => {
                timers.push(setTimeout(() => {
                    if (m.from === 'bot') {
                        // Show typing
                        const typing = document.createElement('div');
                        typing.className = 'chat-typing';
                        typing.innerHTML = '<span></span><span></span><span></span>';
                        chatBody.appendChild(typing);
                        chatBody.scrollTop = chatBody.scrollHeight;

                        timers.push(setTimeout(() => {
                            typing.remove();
                            addMsg(m);
                        }, 700));
                    } else {
                        addMsg(m);
                    }
                }, m.t));
            });

            // Reset after full cycle
            timers.push(setTimeout(() => {
                chatBody.innerHTML = '';
            }, 7000));

            return timers;
        }

        function addMsg(m) {
            const div = document.createElement('div');
            div.className = `chat-msg ${m.from}`;
            div.textContent = m.text;
            chatBody.appendChild(div);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        // Initial run + loop
        let timers = runChat();
        setInterval(() => {
            timers.forEach(clearTimeout);
            timers = runChat();
        }, 8000);
    }

    // ============ 3. MOBILE MENU ============
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        // Close on link click
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // ============ 4. NAVBAR HIDE ON SCROLL ============
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 80 && currentScrollY > lastScrollY) {
                navbar.classList.add('navbar-hidden');
            } else {
                navbar.classList.remove('navbar-hidden');
            }
            navbar.style.boxShadow = currentScrollY > 50
                ? '0 4px 20px rgba(0,0,0,0.3)' : 'none';
            lastScrollY = currentScrollY;
        }, { passive: true });
    }
});
