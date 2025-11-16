<script lang="ts">
  import { onMount } from "svelte";
  import { waitLocale } from "svelte-i18n";
  import Hero from "./lib/components/Hero.svelte";
  import About from "./lib/components/About.svelte";
  import Skills from "./lib/components/Skills.svelte";
  import Projects from "./lib/components/Projects.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import ParticlesBackground from "./lib/components/ParticlesBackground.svelte";

  let i18nReady = false;

  onMount(() => {
    waitLocale().then(() => {
      i18nReady = true;
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

{#if i18nReady}
  <ParticlesBackground />
  <Navbar />

  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </main>

  <Footer />
{/if}

<style>
  main {
    position: relative;
    z-index: 1;
  }
</style>
