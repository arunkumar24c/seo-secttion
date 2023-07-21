export const SectionScroll = (id) => {
  if (id !== "") {
    const element = document.getElementById(id);

    if (element) {
      var headerOffset = 200;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // const HomeLocation = window.location.origin;
      // window.location.replace(HomeLocation);
      // CustomNavigation('/')
    }
  }
};
