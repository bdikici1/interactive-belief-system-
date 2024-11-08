document.addEventListener("DOMContentLoaded", function () {
    const contributionForm = document.getElementById("contributionForm");
    const contributionList = document.getElementById("contributionList");

    // Verileri depolamak için geçici bir dizi
    let insights = [];

    // Form gönderildiğinde çalışacak fonksiyon
    contributionForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Sayfa yenilenmesini önler
        const insightText = document.getElementById("insight").value;

        // Yeni katkıyı insights dizisine ekleyin
        insights.push(insightText);

        // Veriyi güncelleyin ve index.html sayfasına yönlendirin
        updateInsights();
        contributionForm.reset();
        window.location.href = "index.html";
    });

    // Katkıları güncelleme fonksiyonu
    function updateInsights() {
        contributionList.innerHTML = ""; // Mevcut içeriği temizleyin
        insights.forEach(insight => {
            const insightItem = document.createElement("p");
            insightItem.textContent = insight;
            contributionList.appendChild(insightItem);
        });
    }

    // Sayfa yüklendiğinde katkıları gösterin
    updateInsights();
});