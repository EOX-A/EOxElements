/**
 * Highlights the navigation based on the scrolling position.
 */
function highlightNavigation() {
  const sections = document.querySelectorAll("h2");
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.navigation li.nav-${sectionId}`)
        ?.classList.add("active");
    } else {
      document
        .querySelector(`.navigation li.nav-${sectionId}`)
        ?.classList.remove("active");
    }
  });
}

// Export functions
export { highlightNavigation };
