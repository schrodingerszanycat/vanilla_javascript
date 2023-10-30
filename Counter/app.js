let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// pass callback function in forEach method
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const tokens = e.currentTarget.classList;
        if (tokens.contains("increase")) 
            count++;
        else if (tokens.contains("decrease"))
            count--;
        else    
            count = 0;
        if(count > 0)
            value.style.color = "green"; // can add some text to display
        if (count < 0)
            value.style.color = "purple";
        if (count === 0)
            value.style.color = "black";
        value.textContent = count;
    })
}) ;