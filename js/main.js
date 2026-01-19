document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  gsap.from(".brand", { y: -10, opacity: 0, duration: 0.8, ease: "power2.out" });
  gsap.from(".title", { y: 20, opacity: 0, duration: 1, delay: 0.1, ease: "power3.out" });
  gsap.from(".tag", { y: 12, opacity: 0, duration: 0.9, delay: 0.25, ease: "power3.out" });
  gsap.from(".hero-cta .btn", { y: 8, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.5 });

  gsap.from(".projects-grid .project", {
    scrollTrigger: { trigger: ".projects-grid", start: "top 85%" },
    opacity: 0,
    y: 24,
    duration: 0.9,
    stagger: 0.18,
    ease: "power3.out"
  });

  gsap.from(".skills-grid .skill", {
    scrollTrigger: { trigger: ".skills-grid", start: "top 90%" },
    scale: 0.85,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "back.out(1.4)"
  });

  gsap.from(".contact-line", {
    scrollTrigger: { trigger: ".contact", start: "top 90%" },
    y: 20,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out"
  });


  gsap.to(".bg-blob", { rotation: 8, duration: 45, repeat: -1, yoyo: true, ease: "sine.inOut" });


  const root = document.documentElement;
  window.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30; 
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    gsap.to(root, { '--mx': x, '--my': y, duration: 0.8, ease: 'power3.out' });
  });
});