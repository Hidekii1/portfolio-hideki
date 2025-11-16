<script lang="ts">
  import { onMount } from "svelte";
  import { t } from "svelte-i18n";

  let visible = false;

  onMount(() => {
    setTimeout(() => {
      visible = true;
    }, 100);
  });
</script>

<section id="home" class="hero">
  <div class="hero-content" class:visible>
    <div class="hero-text">
      <p class="greeting">{$t('greeting')}</p>
      <h1 class="name">Óscar Barahona</h1>
      <p class="title">{$t('heroTitle')}</p>
      <p class="subtitle">{$t('heroSubtitle')}</p>

      <div class="cta-buttons">
        <a href="#projects" class="btn primary">{$t('ctaWork')}</a>
        <a href="#contact" class="btn secondary">{$t('ctaContact')}</a>
      </div>

      <div class="social-links">
        <a
          href="https://github.com/Hidekii1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={$t('githubLabel')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a
          href="https://portfolio-hideki.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={$t('portfolioLabel')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            />
            <path
              d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="hero-image">
      <div class="image-container">
        <div class="glow-effect"></div>
        <img
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg"
          alt="Mai Sakurajima inspired aesthetic"
        />
      </div>
    </div>
  </div>

  <div class="scroll-indicator">
    <div class="mouse">
      <div class="wheel"></div>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(212, 165, 165, 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  .hero-content {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s ease;
  }

  .hero-content.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-text {
    z-index: 2;
  }

  .greeting {
    color: var(--text-secondary);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    animation: fadeInUp 0.8s ease 0.2s both;
  }

  .name {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text) 0%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.8s ease 0.4s both;
  }

  .title {
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 1rem;
    font-weight: 500;
    animation: fadeInUp 0.8s ease 0.6s both;
  }

  .subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    animation: fadeInUp 0.8s ease 0.8s both;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    animation: fadeInUp 0.8s ease 1s both;
  }

  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn.primary {
    background: var(--primary);
    color: var(--dark);
    border: 2px solid var(--primary);
  }

  .btn.primary:hover {
    background: transparent;
    color: var(--primary);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 165, 165, 0.3);
  }

  .btn.secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn.secondary:hover {
    background: var(--primary);
    color: var(--dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 165, 165, 0.3);
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    animation: fadeInUp 0.8s ease 1.2s both;
  }

  .social-links a {
    color: var(--text-secondary);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(212, 165, 165, 0.1);
  }

  .social-links a:hover {
    color: var(--primary);
    background: rgba(212, 165, 165, 0.2);
    transform: translateY(-3px);
  }

  .hero-image {
    position: relative;
    z-index: 2;
    animation: fadeInRight 1s ease 0.5s both;
  }

  .image-container {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  .glow-effect {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(212, 165, 165, 0.3) 0%,
      transparent 70%
    );
    animation: float 8s ease-in-out infinite;
    z-index: 1;
  }

  .image-container img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    z-index: 2;
    transition: transform 0.3s ease;
  }

  .image-container:hover img {
    transform: scale(1.05);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInUp 0.8s ease 1.4s both;
  }

  .mouse {
    width: 26px;
    height: 40px;
    border: 2px solid var(--primary);
    border-radius: 20px;
    position: relative;
  }

  .wheel {
    width: 4px;
    height: 8px;
    background: var(--primary);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 1.5s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      top: 8px;
    }
    100% {
      opacity: 0;
      top: 20px;
    }
  }

  @media (max-width: 968px) {
    .hero-content {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }

    .name {
      font-size: 3rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .cta-buttons {
      justify-content: center;
      flex-wrap: wrap;
    }

    .social-links {
      justify-content: center;
    }

    .hero-image {
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .hero {
      padding: 5rem 1.5rem 3rem;
    }

    .name {
      font-size: 2.5rem;
    }

    .title {
      font-size: 1.3rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .btn {
      padding: 0.8rem 1.5rem;
      font-size: 0.95rem;
    }
  }
</style>
