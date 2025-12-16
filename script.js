let buttons = document.querySelectorAll("button")
let darkMode = document.getElementById("darkMode");
let text = document.getElementById("text");
let h1 = document.querySelector("h1");
let isDark = false; 

// Toggle between dark and light themes
darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    isDark = document.body.classList.contains("dark");

    darkMode.innerText = isDark ? "Light Mode" : "Dark Mode";
    h1.style.color = isDark ? "pink" : "hotpink";
});

// Update heading with user's name
text.addEventListener("click", () => {
    const User = prompt("What is your name? ")
    h1.innerHTML = `Welcome, ${User}`
});

// Temporary hover effect for the heading
h1.addEventListener("mouseover", () => {
    h1.style.color = "burlywood";
});

h1.addEventListener("mouseout", () => {
    h1.style.color = isDark ? "pink" : "hotpink";
});

// Shared hover behavior for all buttons
buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.background = "hotpink";
        btn.style.color = isDark ? "black" : "white";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.background = "transparent";
        btn.style.color = "hotpink";
    });
})


function sum(num1, num2) {
    console.log(num1 + num2);
}
sum(2, 9);