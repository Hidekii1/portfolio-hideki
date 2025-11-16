<script lang="ts">
  import { t } from "svelte-i18n";
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Rust", level: 60, icon: "🦀" },
        { name: "Go", level: 60, icon: "🔷" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "TypeScript", level: 90, icon: "💙" },
        { name: "JavaScript", level: 90, icon: "💛" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Astro", level: 90, icon: "🚀" },
        { name: "Svelte", level: 85, icon: "🔥" },
        { name: "HTML5/CSS", level: 90, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "MySQL/MariaDB", level: 70, icon: "🗄️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Docker", level: 60, icon: "🐳" },
        { name: "Git", level: 90, icon: "📦" },
        { name: "VS Code", level: 95, icon: "💻" },
      ],
    },
  ];
</script>

<section id="skills" class="skills">
  <div class="container">
    <div class="section-header reveal">
      <h2>{$t('skillsTitle')}</h2>
      <div class="divider"></div>
      <p class="section-subtitle">{$t('skillsSubtitle')}</p>
    </div>

    <div class="skills-grid">
      {#each skillCategories as category}
        <div class="skill-category reveal">
          <h3 class="category-title">{category.title === 'Languages' ? $t('catLanguages') : category.title === 'Frontend' ? $t('catFrontend') : $t('catBackendTools')}</h3>
          <div class="skills-list">
            {#each category.skills as skill}
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-icon">{skill.icon}</span>
                  <span class="skill-name">{skill.name}</span>
                  <span class="skill-percent">{skill.level}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    style="width: {skill.level}%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="additional-skills reveal">
      <h3>{$t('additionalSkillsTitle')}</h3>
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="expertise-icon">🔒</div>
          <h4>{$t('expertCybersecurity')}</h4>
          <p>{$t('expertCybersecurityDesc')}</p>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon">⚡</div>
          <h4>{$t('expertSystemOptimization')}</h4>
          <p>{$t('expertSystemOptimizationDesc')}</p>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon">🌐</div>
          <h4>{$t('expertFullStack')}</h4>
          <p>{$t('expertFullStackDesc')}</p>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon">🛠️</div>
          <h4>{$t('expertOpenSource')}</h4>
          <p>{$t('expertOpenSourceDesc')}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .skills {
    min-height: 100vh;
    padding: 6rem 2rem;
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

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  .skill-category {
    background: rgba(212, 165, 165, 0.05);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(212, 165, 165, 0.2);
    transition: all 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(212, 165, 165, 0.15);
    border-color: var(--primary);
  }

  .category-title {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .skill-icon {
    font-size: 1.5rem;
  }

  .skill-name {
    flex: 1;
    color: var(--text);
    font-weight: 500;
  }

  .skill-percent {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .skill-bar {
    height: 8px;
    background: rgba(212, 165, 165, 0.1);
    border-radius: 10px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 10px;
    transition: width 1s ease;
    position: relative;
  }

  .skill-progress::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .additional-skills {
    margin-top: 4rem;
  }

  .additional-skills h3 {
    text-align: center;
    font-size: 2rem;
    color: var(--text);
    margin-bottom: 3rem;
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .expertise-card {
    background: rgba(212, 165, 165, 0.05);
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(212, 165, 165, 0.2);
  }

  .expertise-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(212, 165, 165, 0.2);
    border-color: var(--primary);
  }

  .expertise-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .expertise-card h4 {
    color: var(--primary);
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .expertise-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: 1fr;
    }

    .section-header h2 {
      font-size: 2.5rem;
    }

    .expertise-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .skills {
      padding: 4rem 1.5rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }
  }
</style>
