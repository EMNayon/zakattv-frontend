(function() {
    function updateBengaliTime() {
      const now = new Date();
      const time = now.toLocaleString('bn-BD', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/AM|PM/, now.getHours() >= 12 ? 'অপরাহ্ণ' : 'পূর্বাহ্ণ');
      const date = now.toLocaleString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

      document.getElementById('time').textContent = time;
      document.getElementById('date').textContent = date;
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
 