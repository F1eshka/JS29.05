let styles = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "20px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" },
    { name: "font-weight", value: "bold" }
];

function printStyledText(stylesArray, text) {
    let styleString = stylesArray
        .map(style => `${style.name}:${style.value}`)
        .join("; ");

    document.write(`<p style="${styleString}">${text}</p>`);
}

printStyledText(styles, "Це стилізований текст через масив CSS-стилів");
