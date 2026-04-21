// =======================
// フィルター機能
// =======================
const buttons = document.querySelectorAll(".filter button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        document.querySelector(".active").classList.remove("active");
        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {
            if (filter === "all" || card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});


// =======================
// モーダル
// =======================
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "block";
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};


// =======================
// スクロールアニメーション
// =======================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => observer.observe(card));