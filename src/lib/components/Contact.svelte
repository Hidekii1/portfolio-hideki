<script lang="ts">
  import { t } from "svelte-i18n";
  let formData = {
    name: "",
    email: "",
    message: "",
  };

  let status: "idle" | "success" | "error" = "idle";

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    status = "success";
    formData = { name: "", email: "", message: "" };

    setTimeout(() => {
      status = "idle";
    }, 3000);
  };
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-header reveal">
      <h2>{$t('contactTitle')}</h2>
      <div class="divider"></div>
      <p class="section-subtitle">{$t('contactSubtitle')}</p>
    </div>

    <div class="contact-content">
      <div class="contact-info reveal">
        <h3>{$t('contactConnect')}</h3>
        <p class="contact-description">
          {$t('contactDescription')}
        </p>

        <div class="contact-methods">
          <div class="contact-method">
            <div class="method-icon">
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
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div class="method-content">
              <h4>{$t('emailLabel')}</h4>
              <p>oscarbarahona2006@gmail.com</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="method-icon">
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
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div class="method-content">
              <h4>{$t('locationLabel')}</h4>
              <p>Madrid, Spain</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="method-icon">
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
            </div>
            <div class="method-content">
              <h4>{$t('githubLabel')}</h4>
              <a
                href="https://github.com/Hidekii1"
                target="_blank"
                rel="noopener noreferrer">@Hidekii1</a
              >
            </div>
          </div>
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

      <form class="contact-form reveal" on:submit={handleSubmit}>
        <div class="form-group">
          <label for="name">{$t('nameLabel')}</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            placeholder={$t('namePlaceholder')}
            required
          />
        </div>

        <div class="form-group">
          <label for="email">{$t('emailLabel')}</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            placeholder={$t('emailPlaceholder')}
            required
          />
        </div>

        <div class="form-group">
          <label for="message">{$t('messageLabel')}</label>
          <textarea
            id="message"
            bind:value={formData.message}
            placeholder={$t('messagePlaceholder')}
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">
          {$t('sendMessage')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>

        {#if status === "success"}
          <div class="status-message success">{$t('statusSuccess')}</div>
        {/if}

        {#if status === "error"}
          <div class="status-message error">{$t('statusError')}</div>
        {/if}
      </form>
    </div>
  </div>
</section>

<style>
  .contact {
    min-height: 100vh;
    padding: 6rem 2rem 2rem;
    background: var(--dark);
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: 3rem;
    color: var(--text);
    margin-bottom: 1rem;
  }

  .section-subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  .divider {
    width: 100px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary),
      transparent
    );
    margin: 0 auto;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info h3 {
    font-size: 2rem;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .contact-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 3rem;
  }

  .contact-methods {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .contact-method {
    display: flex;
    gap: 1.5rem;
    align-items: start;
  }

  .method-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: rgba(212, 165, 165, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    flex-shrink: 0;
  }

  .method-content h4 {
    color: var(--text);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .method-content p,
  .method-content a {
    color: var(--text-secondary);
    font-size: 1rem;
  }

  .method-content a:hover {
    color: var(--primary);
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-links a {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgba(212, 165, 165, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: all 0.3s ease;
  }

  .social-links a:hover {
    background: var(--primary);
    color: var(--dark);
    transform: translateY(-3px);
  }

  .contact-form {
    background: rgba(212, 165, 165, 0.05);
    padding: 3rem;
    border-radius: 16px;
    border: 1px solid rgba(212, 165, 165, 0.2);
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-group label {
    display: block;
    color: var(--text);
    font-weight: 500;
    margin-bottom: 0.8rem;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(15, 13, 23, 0.5);
    border: 1px solid rgba(212, 165, 165, 0.2);
    border-radius: 8px;
    color: var(--text);
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .submit-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.2rem;
    background: var(--primary);
    color: var(--dark);
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submit-btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(212, 165, 165, 0.3);
  }

  .status-message {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
  }

  .status-message.success {
    background: rgba(76, 175, 80, 0.2);
    color: #4caf50;
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .status-message.error {
    background: rgba(244, 67, 54, 0.2);
    color: #f44336;
    border: 1px solid rgba(244, 67, 54, 0.3);
  }

  @media (max-width: 968px) {
    .contact-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    .contact {
      padding: 4rem 1.5rem 2rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .contact-form {
      padding: 2rem 1.5rem;
    }
  }
</style>
