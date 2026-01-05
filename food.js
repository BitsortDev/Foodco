function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

const dropdownHeader = document.getElementById("personDropdown");
const dropdownList = document.getElementById("personList");
const selectedPerson = document.getElementById("selectedPerson");

dropdownHeader.addEventListener("click", () => {
    dropdownList.style.display =
        dropdownList.style.display === "block" ? "none" : "block";
});

dropdownList.querySelectorAll("li").forEach(item => {
    item.addEventListener("click", () => {
        selectedPerson.textContent = item.textContent;
        dropdownList.style.display = "none";
    });
});

document.addEventListener("click", (e) => {
    if (!dropdownHeader.contains(e.target)) {
        dropdownList.style.display = "none";
    }
});
