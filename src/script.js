window.onscroll = function () { ScrollBar() };

function ScrollBar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('header-site').style.background = "var(--black-color)";
    } else {
        document.getElementById('header-site').style.background = "rgba(0, 0, 0, 0)";
    }
}