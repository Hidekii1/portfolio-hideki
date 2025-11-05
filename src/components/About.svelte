<script lang="ts">
</script>

<section id="about" class="about">
  <div class="container">
    <div class="section-header reveal">
      <h2>About Me</h2>
      <div class="divider"></div>
    </div>

    <div class="about-content">
      <div class="about-text reveal">
        <p class="intro">
          Hello! I'm Óscar, an Engineering student based in Madrid, Spain, with
          a deep passion for
          <span class="highlight">Cybersecurity</span> and
          <span class="highlight">Web Development</span>.
        </p>

        <p>
          My journey in technology began with a curiosity about how systems work
          at their core. This led me to explore various programming languages
          and frameworks, constantly pushing myself to learn and master new
          skills.
        </p>

        <p>
          I specialize in creating efficient, secure, and user-friendly
          applications. Whether it's optimizing Windows systems with my
          WinDebloater projects or building modern web interfaces, I believe in
          writing clean, maintainable code that makes a difference.
        </p>

        <p>
          When I'm not coding, you can find me gaming, exploring open-source
          projects, or learning about the latest trends in cybersecurity and
          system architecture.
        </p>

        <div class="fun-fact">
          <div class="fact-icon">✨</div>
          <div class="fact-content">
            <h4>Fun Fact</h4>
            <p>
              Knowing how game cheats are made on the inside has inspired me to
              become a developer
            </p>
          </div>
        </div>
      </div>

      <div class="about-stats reveal">
        <div class="stat-card">
          <div class="stat-number">10+</div>
          <div class="stat-label">Projects Completed</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">8+</div>
          <div class="stat-label">Technologies</div>
        </div>

        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Dedication</div>
        </div>

        <div class="interests">
          <h3>Interests & Hobbies</h3>
          <div class="interest-tags">
            <span class="tag">Gaming</span>
            <span class="tag">Open Source</span>
            <span class="tag">Anime</span>
            <span class="tag">System Optimization</span>
            <span class="tag">Cybersecurity</span>
            <span class="tag">Web Development</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    min-height: 100vh;
    padding: 6rem 2rem;
    background: linear-gradient(
      135deg,
      var(--darker) 0%,
      var(--dark) 50%,
      var(--darker) 100%
    );
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

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .about-text p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .about-text .intro {
    font-size: 1.2rem;
    color: var(--text);
  }

  .highlight {
    color: var(--primary);
    font-weight: 600;
  }

  .fun-fact {
    display: flex;
    gap: 1.5rem;
    padding: 2rem;
    background: rgba(212, 165, 165, 0.1);
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    margin-top: 2rem;
  }

  .fact-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .fact-content h4 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .fact-content p {
    margin: 0;
    font-size: 1rem;
  }

  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .stat-card {
    background: rgba(212, 165, 165, 0.1);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(212, 165, 165, 0.2);
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(212, 165, 165, 0.2);
    border-color: var(--primary);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary);
    font-family: "Playfair Display", serif;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .interests {
    background: rgba(212, 165, 165, 0.1);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(212, 165, 165, 0.2);
  }

  .interests h3 {
    color: var(--text);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .interest-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tag {
    background: rgba(212, 165, 165, 0.2);
    color: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .tag:hover {
    background: var(--primary);
    color: var(--dark);
    transform: translateY(-2px);
    border-color: var(--primary);
  }

  @media (max-width: 968px) {
    .about-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    .about {
      padding: 4rem 1.5rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .about-text p {
      font-size: 1rem;
    }

    .stat-number {
      font-size: 2.5rem;
    }
  }
</style>
