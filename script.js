let touristSpots = ["The Virupaksha Temple", "Victoria Memorial", "Tajmahal"];

document.addEventListener("DOMContentLoaded", () => {
  function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, "");
  }

  touristSpots.sort((a, b) =>
    removeArticles(a).localeCompare(removeArticles(b))
  );

  const bandList = document.getElementById("band");

  bandList.innerHTML = "";

  touristSpots.map((name) => {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    bandList.appendChild(listItem);
  });
});
