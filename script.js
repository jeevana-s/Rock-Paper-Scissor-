const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    // Highlight the selected option
    image.classList.add("active");

    // Reset images and show waiting text
    userResult.src = cpuResult.src ="rock.jpeg";
    result.textContent = "Wait.....";

    // Remove active class from other options
    optionImages.forEach((image2, index2) => {
      if (index !== index2) image2.classList.remove("active");
    });

    // Add animation class
    gameContainer.classList.add("start");

    setTimeout(() => {
      // Remove animation class
      gameContainer.classList.remove("start");

      // Use image (the clicked span) to get user choice image
      let imageSrc = image.querySelector("img").src;
      userResult.src = imageSrc;

      // CPU random choice
      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = ["rock.jpeg", "paper.jpeg", "scissor.jpeg"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Computer Won",
        RS: "User Won",
        PP: "Draw",
        PR: "User Won",
        PS: "Computer Won",
        SS: "Draw",
        SR: "Computer Won",
        SP: "User Won",
      };

      let outcomeValue = outcomes[userValue + cpuValue];
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} !!`;
      console.log(outcomeValue);
    }, 2500);
  });
});
