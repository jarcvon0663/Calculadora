document.addEventListener("DOMContentLoaded", () => {
    const check = document.querySelector(".check");
    const nominaInputs = document.getElementById("nomina-inputs");
    const subcontractorInput = document.getElementById("subcontractor-input");
    const checkBox = document.getElementById("checkbox-container");

    check.addEventListener('change', function () {
        if (check.checked) {
            nominaInputs.style.display = "none";
            checkBox.style.display = "none";
            subcontractorInput.style.display = "block";
        } else {
            nominaInputs.style.display = "block";
            checkBox.style.display = "block";
            subcontractorInput.style.display = "none";
        }
    });
});
