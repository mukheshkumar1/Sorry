document.getElementById("envelope").addEventListener("click", () => {
    const flap = document.getElementById("flap");
    const content = document.getElementById("content");
  
    flap.style.transform = "rotateX(180deg)";
    setTimeout(() => {
      content.style.display = "block";
    }, 600); 
  });
  