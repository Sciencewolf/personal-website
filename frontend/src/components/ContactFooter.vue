<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact__intro">
      <p class="contact__eyebrow">Contact</p>
      <h2 id="contact-title">Have a project in mind? Let’s talk.</h2>
      <p>
        I’m always open to interesting projects, new opportunities, and conversations about
        building thoughtful software.
      </p>
      <a class="contact__email" href="mailto:dev@martonaron.dev">
        dev@martonaron.dev <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div class="contact__bottom">
      <p>© {{ currentYear }} Márton Áron</p>

      <nav class="contact__links" aria-label="Footer links">
        <a href="mailto:dev@martonaron.dev">Email</a>
        <a href="https://github.com/Sciencewolf" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a
          href="https://files.martonaron.dev/data/Marton_Aron_CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          CV ↗
        </a>
      </nav>

      <p class="contact__credit">
        Developed with <span aria-label="love">❤️</span> by
        <a href="https://github.com/Sciencewolf" target="_blank" rel="noreferrer">&lt;Márton Áron&gt;</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: clamp(2.5rem, 4vw, 3rem) 0 1.25rem;
  border-top: 1px solid var(--color-border);
}

.contact__intro {
  max-width: 900px;
}

.contact__eyebrow {
  margin: 0 0 0.75rem;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2 {
  max-width: 680px;
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  letter-spacing: -0.055em;
  line-height: 1;
}

.contact__intro > p:not(.contact__eyebrow) {
  max-width: 620px;
  margin: 1.25rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.6;
}

.contact__email {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 1.5rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--color-accent);
  color: var(--color-heading);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 650;
  text-decoration: none;
}

.contact__email:hover,
.contact__email:focus-visible {
  color: var(--color-accent);
}

.contact__details {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.contact__detail {
  display: grid;
  gap: 0.6rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
}

.contact__detail span {
  color: var(--color-text-subtle);
  font-size: 0.72rem;
  font-weight: 650;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.contact__detail strong {
  color: var(--color-heading);
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  font-weight: 550;
}

.contact__bottom {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 1.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text-subtle);
  font-size: 0.78rem;
}

.contact__bottom p {
  margin: 0;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
}

.contact__links a,
.contact__credit a {
  color: var(--color-text-muted);
  text-decoration: none;
}

.contact__links a:hover,
.contact__links a:focus-visible,
.contact__credit a:hover,
.contact__credit a:focus-visible {
  color: var(--color-heading);
}

.contact__credit {
  justify-self: end;
}

@media (max-width: 760px) {
  .contact__bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1rem;
    text-align: center;
  }

  .contact__links {
    justify-content: center;
  }

  .contact__credit {
    justify-self: center;
  }
}

@media (max-width: 540px) {
  .contact__details {
    grid-template-columns: 1fr;
  }

  .contact__detail + .contact__detail {
    border-top: 0;
  }
}
</style>
