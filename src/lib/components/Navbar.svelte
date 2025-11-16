<script lang="ts">
  import { onMount } from 'svelte';
  import { t, locale } from 'svelte-i18n';

  let scrolled = false;
  let mobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };

  const closeMenu = () => {
    mobileMenuOpen = false;
  };

  const setLang = (code: string) => {
    locale.set(code);
    try {
      localStorage.setItem('locale', code);
    } catch {}
  };
  let currentLocale: string = 'en-US';
  $: currentLocale = $locale ?? 'en-US';
</script>

<nav class:scrolled>
  <div class="nav-container">
    <a href="#home" class="logo" on:click={closeMenu}>
      <span class="logo-text">Óscar</span>
      <span class="logo-accent">Barahona</span>
    </a>

    <button class="mobile-toggle" on:click={toggleMobileMenu} aria-label={$t('toggleMenuAria')}>
      <span class="hamburger" class:open={mobileMenuOpen}></span>
    </button>

    <ul class="nav-links" class:open={mobileMenuOpen}>
      <li><a href="#home" on:click={closeMenu}>{$t('home')}</a></li>
      <li><a href="#about" on:click={closeMenu}>{$t('about')}</a></li>
      <li><a href="#skills" on:click={closeMenu}>{$t('skills')}</a></li>
      <li><a href="#projects" on:click={closeMenu}>{$t('projects')}</a></li>
      <li><a href="#contact" on:click={closeMenu}>{$t('contact')}</a></li>
      <li class="locale-switch">
        <select
          class="locale-select"
          aria-label="Language"
          bind:value={currentLocale}
          on:change={() => setLang(currentLocale)}
        >
          <option value="en-US">EN</option>
          <option value="es">ES</option>
        </select>
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: all 0.3s ease;
    background: transparent;
  }

  nav.scrolled {
    background: rgba(15, 13, 23, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
    display: flex;
    gap: 0.5rem;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .logo-text {
    color: var(--text);
  }

  .logo-accent {
    color: var(--primary);
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 2.5rem;
    align-items: center;
  }

  .nav-links a {
    color: var(--text);
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }

  .nav-links a:hover {
    color: var(--primary);
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  .locale-switch {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .locale-select {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--text);
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-weight: 600;
  }
  .locale-select:focus {
    outline: none;
    border-color: var(--primary);
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 1001;
  }

  .hamburger {
    display: block;
    width: 28px;
    height: 2px;
    background: var(--text);
    position: relative;
    transition: all 0.3s ease;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    position: absolute;
    width: 28px;
    height: 2px;
    background: var(--text);
    transition: all 0.3s ease;
  }

  .hamburger::before {
    top: -8px;
  }

  .hamburger::after {
    bottom: -8px;
  }

  .hamburger.open {
    background: transparent;
  }

  .hamburger.open::before {
    top: 0;
    transform: rotate(45deg);
  }

  .hamburger.open::after {
    bottom: 0;
    transform: rotate(-45deg);
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: block;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: -100%;
      flex-direction: column;
      width: 70%;
      max-width: 300px;
      height: 100vh;
      background: rgba(15, 13, 23, 0.98);
      backdrop-filter: blur(10px);
      padding: 6rem 2rem 2rem;
      gap: 2rem;
      transition: right 0.3s ease;
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
    }

    .nav-links.open {
      right: 0;
    }

    .nav-links a {
      font-size: 1.2rem;
      width: 100%;
      text-align: center;
    }
  }
</style>
