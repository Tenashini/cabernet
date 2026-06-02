(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");
  var header = document.querySelector(".site-header");

  if (toggle && nav && header) {
    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      header.classList.toggle("is-nav-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          setOpen(false);
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  document.querySelectorAll(".photo-frame img").forEach(function (img) {
    img.addEventListener("load", function () {
      var wrap = img.closest(".photo-frame");
      if (wrap) wrap.classList.remove("photo-frame--missing");
    });
    img.addEventListener("error", function () {
      var wrap = img.closest(".photo-frame");
      if (wrap) wrap.classList.add("photo-frame--missing");
    });
  });
})();
