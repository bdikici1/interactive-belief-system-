console.log("My JS!")document.addEventListener("DOMContentLoaded", function () {
    const contributionForm = document.getElementById("contributionForm");
    const contributionList = document.getElementById("contributionList");

    // Katkıları depolamak için localStorage kullanıyoruz
    let insights = JSON.parse(localStorage.getItem("insights")) || [];

    // Form gönderildiğinde yeni katkıyı ekleyin
    if (contributionForm) {
        contributionForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Sayfa yenilenmesini önler
            const insightText = document.getElementById("insight").value;

            // Yeni katkıyı insights listesine ekleyin
            insights.push(insightText);
            localStorage.setItem("insights", JSON.stringify(insights));

            // Formu sıfırlayın ve index.html sayfasına dönün
            contributionForm.reset();
            window.location.href = "index.html";
        });
    }

    // Katkıları görüntülemek için listeyi güncelleyin
    function updateInsights() {
        contributionList.innerHTML = ""; // Mevcut içeriği temizleyin
        insights.forEach(insight => {
            const insightItem = document.createElement("p");
            insightItem.textContent = insight;
            contributionList.appendChild(insightItem);
        });
    }

    // Sayfa yüklendiğinde katkıları gösterin
    if (contributionList) {
        updateInsights();
    }
});