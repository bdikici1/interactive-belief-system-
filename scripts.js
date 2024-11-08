console.log("My JS!")document.addEventListener("DOMContentLoaded", function () {
    const contributionForm = document.getElementById("contributionForm");
    const contributionList = document.getElementById("contributionList");

    // Daha önce kaydedilmiş yorumları al, yoksa boş bir dizi olarak başlat
    let insights = JSON.parse(localStorage.getItem("insights")) || [];

    // Formu gönderme işlemi
    if (contributionForm) {
        contributionForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const insightText = document.getElementById("insight").value;
            const category = document.getElementById("category").value;

            // Yeni yorumu kategoriyle birlikte ekle
            insights.push({ text: insightText, category: category });
            localStorage.setItem("insights", JSON.stringify(insights));

            // Formu sıfırla ve ana sayfaya yönlendir
            contributionForm.reset();
            window.location.href = "index.html";
        });
    }

    // Yorumları listeleme işlemi
    function updateInsights() {
        contributionList.innerHTML = ""; // Listeyi temizle
        insights.forEach(insight => {
            const insightItem = document.createElement("p");
            insightItem.textContent = `[${insight.category}] ${insight.text}`; // Kategoriyi de göster
            contributionList.appendChild(insightItem);
        });
    }

    // Eğer contributionList varsa, yorumları güncelle
    if (contributionList) {
        updateInsights();
    }
});