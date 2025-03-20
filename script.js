(function () {
  function updateBengaliTime() {
    const now = new Date();
    const time = now
      .toLocaleString("bn-BD", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/AM|PM/, now.getHours() >= 12 ? "অপরাহ্ণ" : "পূর্বাহ্ণ");
    const date = now.toLocaleString("bn-BD", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    document.getElementById("time").textContent = time;
    document.getElementById("date").textContent = date;
  }

  setInterval(updateBengaliTime, 60000); // Update every minute
  updateBengaliTime(); // Initial call
})();

//Initialize Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});

function printArticle() {
  window.print();
}

function copyToClipboard() {
  const text = document.querySelector(".details").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("কনটেন্ট কপি করা হয়েছে!");
    })
    .catch((err) => {
      console.error("কপি করতে সমস্যা হয়েছে: ", err);
    });
}

function shareArticle() {
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        url: window.location.href,
      })
      .then(() => {
        console.log("Shared successfully");
      })
      .catch((err) => {
        console.error("Sharing failed:", err);
      });
  } else {
    alert("Sharing not supported in this browser.");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const searchBtn = document.getElementById("search-btn");
  const closeBtn = document.getElementById("close-btn");
  const smallScreenItems = document.getElementById("smallScreenItems");
  const searchContainer = document.getElementById("searchContainer");

  // Event listener for opening search input
  searchBtn.addEventListener("click", () => {
      smallScreenItems.style.display = "none"; // Hide small screen items (logo, direct stream, etc.)
      searchContainer.style.display = "flex"; // Show search input
  });

  // Event listener for closing search input
  closeBtn.addEventListener("click", () => {
      searchContainer.style.display = "none"; // Hide search input
      smallScreenItems.style.display = "flex"; // Show small screen items again
  });
});



