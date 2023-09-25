function fruits() {


    let exoticFruits = [
        "Dragonfruit",
        "Mangosteen",
        "Rambutan",
        "Lychee",
        "Passion Fruit",
        "Durian",
        "Jackfruit",
        "Starfruit",
        "Feijoa",
        "Kiwano",
        "Cherimoya",
        "Custard Apple",
        "Papaya",
        "Acai Berry",
        "Akebi",
        "Blood Orange",
        "Cactus Fruit",
        "Santol",
        "Sapodilla",
        "Soursop",
        "Sugar Apple",
        "Surinam Cherry",
        "Tamarillo",
        "Tamarind",
        "Ugli Fruit",
        "Wax Apple",
        "White Sapote",
        "Yangmei",
        "Yuzu",
        "Bilimbi",
        "Blood Orange",
        "Cactus Fruit",
        "Cempedak",
        "Chayote",
        "Cherimoya",
        "Cupuacu",
        "Damson Plum",
        "Date Plum",
        "Finger Lime",
        "Gac Fruit",
        "Guanabana",
        "Jabuticaba",
        "Jujube",
        "Kumquat",
        "Langsat",
        "Mamey Sapote",
    ];
    let output = document.getElementById("randomElementOutput");
    let child = output.firstChild
    while (child) {
        output.removeChild(child);
        child = output.firstChild;
    }
    let paragraph = document.createElement("p");
    let randomFruit = Math.floor(Math.random() * exoticFruits.length);

    paragraph.textContent = exoticFruits[randomFruit]
    output.appendChild(paragraph);
    console.log(exoticFruits[randomFruit])
}
