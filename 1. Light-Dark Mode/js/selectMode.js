function selectMode(mode) {
    let backColor;
    let fontColor;

    // "addEventListener" provoca que es saturi al cap d'uns quants clicks
    if (mode === "dark") {
        backColor = "#1e2428";
        fontColor = "white";
        check.addEventListener("click", () => {selectMode('light')});
    } else if (mode === "light") {
        backColor = "white";
        fontColor = "black";
        check.addEventListener("click", () => {selectMode('dark')});
    }

    document.getElementById("theme").style.backgroundColor = backColor;
    document.getElementById("displayTitle1").style.color = fontColor;
    document.getElementById("displayTitle2").style.color = fontColor;
}