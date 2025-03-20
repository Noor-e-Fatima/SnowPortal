let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

/*   searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });
 */
  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
  

/*   function switchPosition() {
    document.getElementById("frame1").style.top = "100px";
    document.getElementById("frame1").style.left = "600px";
    document.getElementById("frame1").style.width = "1205px";
    document.getElementById("frame1").style.height = "620px";

    document.getElementById("frame2").style.top = "100px";
    document.getElementById("frame2").style.left = "100px";
    document.getElementById("frame2").style.width = "405px";
    document.getElementById("frame2").style.height = "300px";

    document.getElementById("frame3").style.top = "420px";
    document.getElementById("frame3").style.left = "100px";
    document.getElementById("frame3").style.width = "405px";
    document.getElementById("frame3").style.height = "300px";
   
  }
  function increaseHeight() {
    document.getElementById("myframe1").height = "620";
    document.getElementById("myframe1").width = "1205";

    document.getElementById("myframe2").height = "405";
    document.getElementById("myframe2").width = "300";

    document.getElementById("myframe3").height = "405";
    document.getElementById("myframe3").width = "300";
  }

 */
  window.addEventListener('DOMContentLoaded', () => {
    const frame1 = document.getElementById('frame1');
    const frame2 = document.getElementById('frame2');
    const frame3 = document.getElementById('frame3');
    const video1 = document.getElementById('snowvid')
    const stationaryFrame = document.getElementById('stationaryFrame');

    let position1 = 420; // Initial position of iframe1
    let position2 = 100; // Initial position of iframe2
    let position3 = 740; // Initial position of iframe3;
    let position4 = 1000; 
    const speed = 2; // Adjust the speed of sliding
    let isPaused = false; // Variable to track whether animation is paused

    function pauseAnimation() {
      isPaused = true;
  }

  // Function to resume animation
  function resumeAnimation() {
      isPaused = false;
  }

  frame1.addEventListener('mouseenter', pauseAnimation);
  frame1.addEventListener('mouseleave', resumeAnimation);
  frame2.addEventListener('mouseenter', pauseAnimation);
  frame2.addEventListener('mouseleave', resumeAnimation);
  frame3.addEventListener('mouseenter', pauseAnimation);
  frame3.addEventListener('mouseleave', resumeAnimation);
  video1.addEventListener('mouseenter', pauseAnimation);
  video1.addEventListener('mouseleave', resumeAnimation);
  
    function slide() {
      if (!isPaused) {

        position1 -= speed;
        position2 -= speed;
        position3 -= speed;
        position4 -= speed;
        // Update positions of iframe1 and iframe2
        frame1.style.top = `${position1}px`;
        frame2.style.top = `${position2}px`;
        frame3.style.top = `${position3}px`;
        video1.style.top = `${position4}px`;

        // Reset positions once iframes move completely out of view
        if (position1 < -300) { // Height of iframe1
            position1 = window.innerHeight; // Reset to the bottom of the window
        }
        if (position2 < -300) { // Height of iframe2
            position2 = window.innerHeight; // Reset to the bottom of the window
        }
        if (position3 < -300) { // Height of iframe2
          position3 = window.innerHeight; // Reset to the bottom of the window
      }
        if (position4 < -300) { // Height of iframe2
          position4 = window.innerHeight; // Reset to the bottom of the window
      }
    }
        requestAnimationFrame(slide);
    }

    // Start sliding animation
    slide();
});
