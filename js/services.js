document.querySelectorAll(".service-card__button").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".service-item");
        const priceList = item?.querySelector(".price-list");
        if (!priceList) return;

        const willOpen = !priceList.classList.contains("price-list--open");

        priceList.classList.toggle("price-list--open", willOpen);
        priceList.setAttribute("aria-hidden", String(!willOpen));
        button.setAttribute("aria-expanded", String(willOpen));
        button.textContent = willOpen ? "Скрыть ↑" : "Подробнее ↓";
    });
});
