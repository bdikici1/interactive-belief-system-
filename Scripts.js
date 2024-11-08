class Main {
    public static void main(String[] args) {
        System.out.println("My Java!");
    }
}document.addEventListener("DOMContentLoaded", function () {
    const contributionForm = document.getElementById("contributionForm");
    const contributionList = document.getElementById("contributionList");

    let insights = [];

    contributionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const insightText = document.getElementById("insight").value;

        insights.push(insightText);

        updateInsights();
        contributionForm.reset();
        window.location.href = "index.html";
    });

    function updateInsights() {
        contributionList.innerHTML = "";
        insights.forEach(insight => {
            const insightItem = document.createElement("p");
            insightItem.textContent = insight;
            contributionList.appendChild(insightItem);
        });
    }

    updateInsights();
});