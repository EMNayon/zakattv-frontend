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



// header search button 

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.getElementById("close-btn");

searchBtn.onclick = function() {
    searchInput.style.width = "150px";
    searchInput.style.opacity = "1";
    searchBtn.classList.add("d-none");
    closeBtn.classList.remove("d-none");
};

closeBtn.onclick = function() {
    searchInput.style.width = "0";
    searchInput.style.opacity = "0";
    setTimeout(() => {
        searchBtn.classList.remove("d-none");
        closeBtn.classList.add("d-none");
    }, 400);
};
