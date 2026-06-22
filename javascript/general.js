/* =========================
   SIDEBAR TOGGLE
========================= */

const toggles = document.querySelectorAll(".sidebar-toggle");

toggles.forEach(toggle => {

    toggle.addEventListener("click", () => {

        const targetId = toggle.getAttribute("data-toggle");
        const app = document.getElementById(targetId);

        app.classList.toggle("collapsed");

        if(app.classList.contains("collapsed")){
            toggle.innerHTML = "››";
        } else {
            toggle.innerHTML = "‹‹";
        }

    });

});


window.addEventListener('load', () => {
    const scroll = document.getElementById('scroll');

    window.scrollTo({
        top: scroll.offsetTop + 83,
        behavior: 'instant'
    });
});