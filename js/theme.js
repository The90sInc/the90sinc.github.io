(function () {
  const STORAGE_KEY = 'portfolio-theme';
  const toggleButton = document.getElementById('theme-toggle');
  const root = document.documentElement;

  if (!toggleButton) return;

  const label = toggleButton.querySelector('.switch-label');

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function setThemeAttribute(theme) {
    // Set your custom theme attribute
    document.documentElement.dataset.theme = theme;
    
    // Set Bootstrap's native theme attribute
    document.documentElement.setAttribute('data-bs-theme', theme === 'mechanical' ? 'dark' : 'light');
    
    if (document.body) {
      document.body.dataset.theme = theme;
    }
    root.dataset.theme = theme;
  }

    function applyTheme(theme, persist) {
        if (!theme) {
        theme = 'normal';
        }
        setThemeAttribute(theme);
        
        // Toggle stays active (true) when in mechanical mode
        toggleButton.setAttribute('aria-pressed', theme === 'mechanical' ? 'true' : 'false');
        
        if (label) {
        // FIX: Match the label text to the currently active theme
        label.textContent = theme === 'mechanical' ? 'Mechanical' : 'Normal';
        }
        
        if (persist) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (err) {
            /* localStorage unavailable */
        }
        }
    }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored || (prefersDark ? 'mechanical' : 'normal');
    applyTheme(initialTheme, false);
  }

  initTheme();

  toggleButton.addEventListener('click', function () {
    const next = root.dataset.theme === 'mechanical' ? 'normal' : 'mechanical';
    applyTheme(next, true);
  });
})();