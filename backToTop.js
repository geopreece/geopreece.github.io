const toTop = document.querySelector(".toTop")

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 800) { // Show toTop
    toTop.style.display = "block";
    }
    else { // Hide toTop
        toTop.style.display = "none";
    }
}

toTop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}

