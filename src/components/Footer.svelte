<footer class="footer" aria-label="Pie de página">
  <div class="container">
    <div class="brand">
      <a href="/" class="logo" aria-label="Inicio">ÓB</a>
      <p class="copyright">&copy; {new Date().getFullYear()} Óscar Barahona</p>
    </div>

    <nav class="links" aria-label="Enlaces">
      <a href="#projects">Proyectos</a>
      <a href="#skills">Skills</a>
      <a href="#about">Sobre mí</a>
      <a href="#contact">Contacto</a>
    </nav>

    <div class="social" aria-label="Redes sociales">
      <a
        class="social-link"
        href="https://github.com/Hidekii1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">GitHub</a
      >
      <a
        class="social-link"
        href="https://www.linkedin.com/in/oscar-barahona-del-real-711b47382/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">LinkedIn</a
      >
      <a
        class="social-link"
        href="mailto:oscarbarahona2006@gmail.com"
        aria-label="Enviar correo">Email</a
      >
    </div>
  </div>

  <p class="note">Hecho con Svelte, con ❤️</p>
</footer>

<style>
  .footer {
    padding: 2.5rem 0 1.25rem;
    border-top: 1px solid rgba(212, 165, 165, 0.2);
    color: var(--text-secondary);
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(255, 255, 255, 0.02)
    );
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid rgba(212, 165, 165, 0.3);
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    color: inherit;
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      background 0.2s ease;
  }

  .logo:hover {
    transform: translateY(-2px);
    border-color: rgba(212, 165, 165, 0.5);
    background: rgba(212, 165, 165, 0.08);
  }

  .copyright {
    margin: 0;
  }

  .links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .links a {
    text-decoration: none;
    color: var(--text-secondary);
    transition:
      color 0.2s ease,
      opacity 0.2s ease;
  }

  .links a:hover,
  .links a:focus-visible {
    color: inherit;
    opacity: 0.9;
    outline: none;
  }

  .social {
    display: flex;
    gap: 0.5rem;
  }

  .social-link {
    text-decoration: none;
    color: var(--text-secondary);
    border: 1px solid rgba(212, 165, 165, 0.2);
    padding: 0.35rem 0.6rem;
    border-radius: 10px;
    transition:
      transform 0.2s ease,
      background 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;
  }

  .social-link:hover,
  .social-link:focus-visible {
    transform: translateY(-2px);
    background: rgba(212, 165, 165, 0.08);
    border-color: rgba(212, 165, 165, 0.35);
    color: inherit;
    outline: none;
  }

  .note {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.7;
    margin-top: 1rem;
  }

  @media (max-width: 860px) {
    .container {
      justify-content: center;
      gap: 1.25rem;
    }
  }

  @media (max-width: 640px) {
    .social-link {
      padding: 0.3rem 0.5rem;
    }
  }
</style>
