function playSound(e) {
  let audioShort = document.getElementById("toilet-flush-short-audio");
  let audioLong = document.getElementById("toilet-flush-long-audio");
  let audioRefill = document.getElementById("refill-audio");
  let audioResidue = document.getElementById("residue-audio");

  if (audioRefill.currentTime != 0 && !audioRefill.ended) {
    // refill active
    if (audioRefill.currentTime >= 2.8) {
      audioResidue.play();
      return 0;
    }
    return 0;
  }

  if (
    (audioShort.currentTime === 0 || audioShort.ended) &&
    (audioLong.currentTime === 0 || audioLong.ended)
  ) {
    // flush inactive
    if (e.target.id === "short") {
      audioShort.play().then(function () {
        setTimeout(function () {
          audioRefill.play();
        }, 3720);
      });
    } else if (e.target.id === "long") {
      audioLong.play().then(function () {
        setTimeout(function () {
          audioRefill.play();
        }, 6792);
      });
    }
  }
}

function toggleView(e) {
  let mainImage = document.getElementById("main-image");
  let short = document.getElementById("short");
  let long = document.getElementById("long");
  let audioExterior = document.getElementById("exterior-audio");

  if (mainImage.getAttribute("src") === "images/interior.jpeg") {
    mainImage.setAttribute("src", "images/exterior.jpeg");
    short.classList.add("hide");
    long.classList.add("hide");
    mainImage.classList.remove("main-image-interior");
    mainImage.classList.add("main-image-exterior");
    audioExterior.play();
  } else {
    mainImage.setAttribute("src", "images/interior.jpeg");
    short.classList.remove("hide");
    long.classList.remove("hide");
    mainImage.classList.remove("main-image-exterior");
    mainImage.classList.add("main-image-interior");
    audioExterior.pause();
  }
}

let short = document.getElementById("short");
short.addEventListener("click", playSound);

let long = document.getElementById("long");
long.addEventListener("click", playSound);

let toggle = document.getElementById("toggle");
toggle.addEventListener("click", toggleView);
