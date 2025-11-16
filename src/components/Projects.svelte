<script lang="ts">
  const projects = [
    {
      title: "WinDebloater 2.0",
      description:
        "A powerful CLI tool built with Rust for cleaning and optimizing Windows 10/11 systems. Features advanced debloating capabilities and performance improvements.",
      tech: ["Rust", "CLI", "Windows"],
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
      github: "https://github.com/Hidekii1/WinDebloater2.0",
      demo: null,
    },
    {
      title: "WinDebloater",
      description:
        "Open-source PowerShell tool for Windows optimization. Removes bloatware, improves privacy, and enhances system performance with an easy-to-use interface.",
      tech: ["PowerShell", "Windows", "Open Source"],
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      github: "https://github.com/Hidekii1/WinDebloater",
      demo: null,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, interactive portfolio built with Svelte. Features smooth animations, responsive design, and showcases my work and skills in an elegant manner.",
      tech: ["Svelte", "TypeScript", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      github: "https://github.com/Hidekii1",
      demo: "https://portfolio-hideki.vercel.app/",
    },
    {
      title: "Web Development Projects",
      description:
        "Collection of modern web applications built with React, TypeScript, and various frameworks. Focused on clean code, performance, and user experience.",
      tech: ["React", "TypeScript", "JavaScript"],
      image:
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      github: "https://github.com/Hidekii1",
      demo: null,
    },
    {
      title: "Yunari Bot Discord",
      description:
        "Bot of Discord with various features, such as music playback, role management, and utility commands. Built with Node.js and Discord.js.",
      tech: ["JavaScript"],
      image:
        "https://acf.geeknetic.es/imgri/imagenes/auto/2020/10/24/f5p-muestra.jpg?f=webp",
      github: "https://github.com/Hidekii1/Yunari-Discord-Bot",
      demo: null,
    },
  ];
</script>

<section id="projects" class="projects">
  <div class="container">
    <div class="section-header reveal">
      <h2>Featured Projects</h2>
      <div class="divider"></div>
      <p class="section-subtitle">
        A showcase of my recent work and contributions
      </p>
    </div>

    <div class="projects-grid">
      {#each projects as project, index}
        <div
          class="project-card reveal"
          style="transition-delay: {index * 0.1}s"
        >
          <div class="project-image">
            <img src={project.image} alt={project.title} />
            <div class="project-overlay">
              <div class="project-links">
                {#if project.github}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    aria-label="View on GitHub"
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
                {/if}
                {#if project.demo}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-link"
                    aria-label="View live demo"
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
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                {/if}
              </div>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            <p class="project-description">{project.description}</p>
            <div class="project-tech">
              {#each project.tech as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="view-more reveal">
      <a
        href="https://github.com/Hidekii1?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="view-more-btn"
      >
        View All Projects on GitHub
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  .projects {
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

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    margin-bottom: 4rem;
  }

  .project-card {
    background: rgba(212, 165, 165, 0.05);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(212, 165, 165, 0.2);
  }

  .project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(212, 165, 165, 0.2);
    border-color: var(--primary);
  }

  .project-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.1);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 13, 23, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .project-links {
    display: flex;
    gap: 1.5rem;
  }

  .project-link {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--dark);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .project-link:hover {
    transform: scale(1.1);
    background: var(--accent);
  }

  .project-content {
    padding: 2rem;
  }

  .project-title {
    font-size: 1.5rem;
    color: var(--text);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .project-description {
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .tech-tag {
    background: rgba(212, 165, 165, 0.2);
    color: var(--primary);
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .view-more {
    text-align: center;
    margin-top: 3rem;
  }

  .view-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
  }

  .view-more-btn:hover {
    background: var(--primary);
    color: var(--dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(212, 165, 165, 0.3);
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }

    .section-header h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 640px) {
    .projects {
      padding: 4rem 1.5rem;
    }

    .section-header h2 {
      font-size: 2rem;
    }

    .project-content {
      padding: 1.5rem;
    }
  }
</style>
