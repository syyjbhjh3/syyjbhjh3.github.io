document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = document.querySelectorAll('#mobile-menu a');
  var accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
  var typingText = document.getElementById('typing-text');
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var syncMobileMenuState = function () {
    if (!menuButton || !mobileMenu) {
      return;
    }

    var expanded = !mobileMenu.classList.contains('hidden');
    menuButton.setAttribute('aria-controls', 'mobile-menu');
    menuButton.setAttribute('aria-expanded', String(expanded));
    menuButton.setAttribute('aria-label', expanded ? '메뉴 닫기' : '메뉴 열기');
    mobileMenu.setAttribute('aria-hidden', String(!expanded));
  };

  if (menuButton && mobileMenu) {
    syncMobileMenuState();

    menuButton.addEventListener('click', function () {
      window.requestAnimationFrame(syncMobileMenuState);
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        window.requestAnimationFrame(syncMobileMenuState);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
      }

      syncMobileMenuState();
    });
  }

  accordionTriggers.forEach(function (trigger) {
    var panelId = trigger.getAttribute('aria-controls');
    var panel = panelId ? document.getElementById(panelId) : null;
    var icon = trigger.querySelector('.icon-arrow-down');

    if (!panel) {
      return;
    }

    panel.classList.remove('hidden');
    trigger.setAttribute('aria-expanded', 'true');

    if (icon) {
      icon.classList.add('rotate-180');
    }
  });

  if (typingText) {
    var roles = ['Backend Engineer', 'DevOps Engineer'];
    var roleIndex = 0;
    var charIndex = 0;
    var isDeleting = false;

    if (prefersReducedMotion) {
      typingText.textContent = roles[0];
      return;
    }

    var tick = function () {
      var currentRole = roles[roleIndex];

      if (isDeleting) {
        charIndex -= 1;
      } else {
        charIndex += 1;
      }

      typingText.textContent = currentRole.slice(0, charIndex);

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        window.setTimeout(tick, 1400);
        return;
      }

      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        window.setTimeout(tick, 260);
        return;
      }

      window.setTimeout(tick, isDeleting ? 42 : 82);
    };

    typingText.textContent = '';
    tick();
  }
});
