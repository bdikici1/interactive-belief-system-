console.log("My JS!")
// Yorum ekleme fonksiyonu
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
    } else {
        alert("Please fill in all fields before submitting.");
    }
}

// Yorumları filtreleme fonksiyonu
function filterComments() {
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