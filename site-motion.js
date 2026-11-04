(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) return;

    document.body.classList.add('motion-enabled');

    const targets = document.querySelectorAll([
        '.hero > *',
        '.hero-inner > *',
        'main > section',
        '.section-heading',
        '.waste-item',
        '.origin',
        '.origin-step',
        '.role',
        '.model-step',
        '.digital-card',
        '.action-card',
        '.audience-card',
        '.benefit',
        '.proof-item',
        '.program-image',
        '.program-layout > div:not(.program-image)',
        '.budget-card',
        '.faq-list details',
        '.donation-card',
        '.story-card',
        '.login-layout',
        '.wizard-card',
        '.path-dialog',
        '.plan-result',
        '.material-card',
        '.site-footer'
    ].join(','));

    targets.forEach((element, index) => {
        element.classList.add('motion-reveal');
        element.style.setProperty('--motion-delay', `${Math.min(index % 5, 3) * 75}ms`);
    });

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('motion-visible');
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });

    targets.forEach((element) => observer.observe(element));
})();
