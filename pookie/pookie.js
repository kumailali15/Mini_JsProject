// NO button run-away
const btn = document.getElementById("NO");

btn.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 80); // Avoid edges
    const y = Math.random() * (window.innerHeight - 50);

    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});

// YES button redirect
const yesBtn = document.getElementById("YES");

yesBtn.addEventListener("click", function() {
    window.location.href = "pookie.html";
});