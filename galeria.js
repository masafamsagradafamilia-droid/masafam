document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".gallery-tab");
    const panels = document.querySelectorAll(".gallery-panel");

    tabs.forEach(function (tab) {
        tab.addEventListener("click", function () {
            const category = tab.dataset.category;

            // Desativar todos os botões
            tabs.forEach(function (item) {
                item.classList.remove("active");
                item.setAttribute("aria-selected", "false");
            });

            // Esconder todas as categorias
            panels.forEach(function (panel) {
                panel.classList.remove("active");
            });

            // Ativar o botão selecionado
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            // Mostrar a categoria selecionada
            const selectedPanel = document.getElementById(category);

            if (selectedPanel) {
                selectedPanel.classList.add("active");
            }
        });
    });
});
