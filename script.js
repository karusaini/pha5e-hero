document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hover-img");
  const textHeadings = document.querySelectorAll(".text h1");
  const menuIcon = document.querySelector(".menu-icon");
  const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
  const closeBtn = document.querySelector(".mobile-nav-overlay .close-btn");

  // Toggle Mobile Navigation Overlay
  menuIcon.addEventListener("click", () => {
    mobileNavOverlay.style.display = "flex";
    gsap.fromTo(
      mobileNavOverlay,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      ".mobile-nav-links li",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: "power2.out" }
    );
  });

  // Close Mobile Navigation Overlay
  closeBtn.addEventListener("click", () => {
    gsap.to(mobileNavOverlay, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        mobileNavOverlay.style.display = "none";
      },
    });
  });

  // Smooth Text Animation on Load
  gsap.fromTo(
    textHeadings,
    { opacity: 0, y: 50, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.3,
      duration: 1.5,
      ease: "expo.out",
    }
  );

  // Image Hover Effect
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(images, {
        opacity: 0.2,
        filter: "grayscale(100%) contrast(200%) brightness(200%)",
        duration: 0.3,
      });
      gsap.to(img, {
        opacity: 1,
        filter: "grayscale(0%) contrast(100%) brightness(100%)",
        scale: 1.2,
        duration: 0.3,
      });

      // Highlight text when hovering over an image
      gsap.to(".text h1", {
        color: "#ffcc00",
        duration: 0.3,
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(images, {
        opacity: 1,
        filter: "grayscale(0%)",
        duration: 0.3,
      });

      gsap.to(".text h1", {
        color: "white",
        duration: 0.3,
      });
    });

    // Mouse Movement Effect on Images
    img.addEventListener("mousemove", (e) => {
      const rect = img.getBoundingClientRect();
      const moveX = (e.clientX - rect.left - rect.width / 2) / 10;
      const moveY = (e.clientY - rect.top - rect.height / 2) / 10;
      gsap.to(img, {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.3 });
    });
  });

  // Background Hover Animation for the Hero Section
  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", () => {
    gsap.to(hero, { background: "#111", duration: 0.5 });
  });
  hero.addEventListener("mouseleave", () => {
    gsap.to(hero, {
      background: "linear-gradient(to right, #000, #222)",
      duration: 0.5,
    });
  });
});
