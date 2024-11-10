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
});function filterComments() {
    // Kategori seçimini al
    const category = document.getElementById("category-filter").value;
    
    // Tüm yorumları seç
    const comments = document.querySelectorAll(".comment");
    
    // Her yorumu kontrol et ve kategoriye göre görünür/gizli yap
    comments.forEach(comment => {
        if (category === "all") {
            comment.style.display = "block";
        } else {
            // Yorumun kategori sınıfını kontrol et
            if (comment.classList.contains(category)) {
                comment.style.display = "block";
            } else {
                comment.style.display = "none";
            }
        }
    });
}
function addComment() {
    // Kullanıcıdan bilgileri al
    const username = document.getElementById("username").value;
    const commentText = document.getElementById("comment-text").value;
    const category = document.getElementById("category").value;

    // Bilgilerin boş olmadığından emin ol
    if (username && commentText) {
        // Yeni yorum div'i oluştur
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment", category);

        // Yorum içeriğini ekle
        commentDiv.innerHTML = `<p><strong>${username}:</strong> "${commentText}"</p>`;

        // Yorumları içeren bölüme ekle
        document.getElementById("comments-section").appendChild(commentDiv);

        // Formu temizle
        document.getElementById("username").value = "";
        document.getElementById("comment-text").value = "";
        document.getElementById("category").value = "creation";
    }
}