const h1 = document.querySelector("h1");

function onClickTitle() {
    const clickClass = "clicked";

    h1.classList.toggle(clickClass);

    // toggle로 대체가능
    // if (h1.classList.contains(clickClass)) {
    //     h1.classList.remove(clickClass);
    // } else {
    //     h1.classList.add(clickClass);
    // }
}

h1.addEventListener("click", onClickTitle);
