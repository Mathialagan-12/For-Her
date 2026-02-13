$(document).ready(function () {
  const noMessages = [
    "Think again please 😭",
    "Don’t break my poor heart 💔",
    "I’ll never skip your calls 📞",
    "I’ll remember every special date 📅",
    "I promise lifetime free food 🍕",
    "I’ll listen to all your stories ❤️",
    "I already imagined our wedding 😢",
    "I’ll make tea for you every day ☕",
    "I’ll hold your hand forever 🤝",
    "I’ll laugh at your jokes always 😂",
    "I’ll go shopping without complaining 😅",
    "I’ll surprise you often 🎁",
    "I’ll dance with you anytime 💃",
    "I’ll always say sorry first 😜",
    "I’ll hug you whenever you’re sad 🤗",
    "Please click Yes... it's destiny 😍",
  ];

  // ❤️ Your Images (Put your image path here)
  const noImages = [
    "images/image-5.jpeg",
    "images/images--13.jpeg",
    "images/images--14.jpeg",
    "images/image.jpeg",
    "images/gif-1.mp4",
    "images/image-6.jpeg",
    "images/image-1.jpeg",
    "images/gif-3.mp4",
    "images/image-7.jpeg",
    "images/image-8.jpeg",
    "images/image-9.jpeg",
    "images/image-3.jpeg",
    "images/gif-2.mp4",
    "images/image--11.jpeg",
    "images/image-2.jpeg",
    "images/image--12.jpeg",
  ];

  let messageIndex = 0;
  let musicStarted = false;

  function startMusic() {
    if (!musicStarted) {
      $("#bgMusic")[0]
        .play()
        .catch(() => {});
      musicStarted = true;
    }
  }

  /* ❤️ YES CLICK */
  $("#yesBtn").click(function () {
    $("#proposalBox").fadeOut();
    $("#bgMusic")[0].pause();
    $("#videoSection").removeClass("hidden");
    $("#loveVideo")[0].play();
  });
  $("#noBtn").click(function () {
    startMusic();
    $("#funnyText").text(noMessages[messageIndex]);

    let file = noImages[messageIndex];
    let isVideo = file.endsWith(".mp4");

    $("#mediaContainer").removeClass("hidden");

    if (isVideo) {
      $("#mediaContainer").html(`
        <video autoplay loop muted class="rounded-xl shadow-lg smooth-media" width="240">
          <source src="${file}" type="video/mp4">
        </video>
    `);

      let video = $("#mediaContainer video");

      video.on("loadeddata", function () {
        $(this).addClass("show");
      });
    } else {
      $("#mediaContainer").html(`
        <img src="${file}" class="rounded-xl shadow-lg smooth-media" width="240"/>
    `);

      let img = $("#mediaContainer img");

      img.on("load", function () {
        $(this).addClass("show");
      });
    }

    messageIndex++;

    if (messageIndex >= noMessages.length) {
      $(this).fadeOut();
    }
  });

  /* ❤️ Floating Hearts */
  setInterval(function () {
    let heart = $("<div class='heart'>❤️</div>");

    heart.css({
      left: Math.random() * 100 + "vw",
      fontSize: Math.random() * 20 + 10 + "px",
    });

    $("body").append(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
});
