<footer class="footer">
  <div class="footer-content">
    <p>&copy; 2025 Óscar Barahona.</p>
    <p class="footer-note">Built with Svelte, with ❤️.</p>
  </div>
</footer>

<style>
  .footer {
    margin-top: 6rem;
    padding: 3rem 0;
    border-top: 1px solid rgba(212, 165, 165, 0.2);
  }

  .footer-content {
    text-align: center;
    color: var(--text-secondary);
  }

  .footer-content p {
    margin-bottom: 0.5rem;
  }

  .footer-note {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  @media (max-width: 640px) {
    .footer {
      margin-top: 4rem;
    }
  }
</style>
