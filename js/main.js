const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

function closeMenu() {
    if (!burger || !nav) return;
    nav.classList.remove("nav--open");
    burger.setAttribute("aria-expanded", "false");
}

if (burger && nav) {
    burger.addEventListener("click", () => {
        const isOpen = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!isOpen));
        nav.classList.toggle("nav--open", !isOpen);
    });

    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            closeMenu();
        }
    });
}

let lastFocusedElement = null;

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    lastFocusedElement = document.activeElement;
    modal.classList.add("modal--open");
    modal.setAttribute("aria-hidden", "false");

    const focusTarget = modal.querySelector("input, button, select, textarea");
    if (focusTarget) focusTarget.focus();
}

function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("modal--open");
    modal.setAttribute("aria-hidden", "true");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
        openModal(button.dataset.modalOpen);
        closeMenu();
    });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
        closeModal(button.closest(".modal"));
    });
});

document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal(modal);
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
        document.querySelectorAll(".modal--open").forEach(closeModal);
    }
});
