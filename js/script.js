// Small enhancements for navigation, year, and the contact form.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const email = form.elements.email.value.trim();
      const message = form.elements.message.value.trim();
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`Hi Ketki,\\n\\n${message}\\n\\nFrom: ${name}\\nEmail: ${email}`);
      const status = form.querySelector(".form-status");
      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields before continuing.";
        return;
      }
      status.textContent = "Opening your email app…";
      window.location.href = `mailto:kanadeketaki2@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});