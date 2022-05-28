function selectMode(mode) {
    var color = "ghostWhite"
    var image = "https://cdn-icons-png.flaticon.com/512/1255/1255694.png?w=826";
    var label = "Light mode";

    if (mode === "dark") {
        color = "darkSlateBlue";
        image = "https://cdn-icons-png.flaticon.com/512/1242/1242728.png?w=826";
        label = "Dark Mode";
    } else if (mode === "light") {
        color = "ghostWhite";
        image = "https://cdn-icons-png.flaticon.com/512/1255/1255694.png?w=826";
        label = "Light Mode";
    } else {
        color = "dimGray";
        image = "https://cdn-icons-png.flaticon.com/512/1185/1185750.png?w=826";
        label = "Ninja Mode";
    }
    console.log(label);

    document.getElementById("icon").src = image;
    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;


}

