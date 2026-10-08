const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        const password = registerForm.elements.password.value;
        const confirm = registerForm.elements.password_confirm.value;

        if (password !== confirm) {
            event.preventDefault();
            const field = registerForm.elements.password_confirm;
            field.setCustomValidity("Пароли должны совпадать");
            field.reportValidity();
        } else {
            registerForm.elements.password_confirm.setCustomValidity("");
        }
    });

    registerForm.elements.password_confirm.addEventListener("input", () => {
        registerForm.elements.password_confirm.setCustomValidity("");
    });
}

document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) return;

        event.preventDefault();

        const button = form.querySelector('button[type="submit"]');
        const status = form.querySelector(".form-status");

        if (button) {
            button.disabled = true;
            button.classList.add("button--loading");
        }

        if (status) {
            status.textContent = "Форма заполнена корректно. Демонстрационная отправка выполнена.";
            status.className = "form-status form-status--success";
        }

        window.setTimeout(() => {
            if (button) {
                button.disabled = false;
                button.classList.remove("button--loading");
            }
        }, 700);
    });
});
