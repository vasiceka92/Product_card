// Changing pictures in the middle section after click on the thumbnails

document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main-image");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });
});

// Plus minus buttons

document.addEventListener("DOMContentLoaded", function () {
  const numberDisplay = document.getElementById("numberDisplay");
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");

  let number = 0; // Starting value

  // Update the displayed number
  function updateNumber() {
    numberDisplay.value = number;
  }

  // Event listener for plus button
  plusBtn.addEventListener("click", function () {
    if (number < 100) {
      number++;
      updateNumber();
    }
  });

  // Event listener for minus button
  minusBtn.addEventListener("click", function () {
    if (number > 0) {
      number--;
      updateNumber();
    }
  });
});
