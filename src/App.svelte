<script lang="ts">
  import { onMount } from "svelte";
  import Hero from "./components/Hero.svelte";
  import About from "./components/About.svelte";
  import Skills from "./components/Skills.svelte";
  import Projects from "./components/Projects.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Navbar from "./components/Navbar.svelte";
  import ParticlesBackground from "./components/ParticlesBackground.svelte";

  onMount(() => {
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

<style>
  main {
    position: relative;
    z-index: 1;
  }
</style>
