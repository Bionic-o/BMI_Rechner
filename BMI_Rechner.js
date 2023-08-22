
function bmi_berechnen() {
    let groesse = document.getElementById("groesse").value;
    console.log("Größe: " + groesse);
    let masse = document.getElementById("masse").value;
    console.log("Masse: " + masse);
    
    let bmi = masse / (groesse * groesse)
    let bmiRounded = Math.round(bmi *100) /100
    document.getElementById("ausgabeBMI").innerHTML = "Ihr BMI beträgt: " + bmiRounded;

    let geschlecht = document.querySelector('input[name="geschlecht"]:checked').value;
    console.log("Geschlecht: " + geschlecht)

    if (geschlecht === "weiblich") {
            if (bmi < 19) {
                document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Untergewicht"
            } else if (bmi > 19 && bmi <= 24) {
                document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Normalgewicht"
                //console.log("weiblicherBMI")
            } else if (bmi > 24 && bmi <= 30) {
                document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Übergewicht"
            } else if (bmi > 30 && bmi <= 40) {
                document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Adipositas"
            } else if (bmi > 40) {
                document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben massive Adipositas"
            }
    } else {
        if (bmi < 20) {
            document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Untergewicht"
            //console.log("maennlicherBMI")
        } else if (bmi > 20 && bmi <= 25) {
            document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Normalgewicht"
        } else if (bmi > 25 && bmi <= 30) {
            document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Übergewicht"
        } else if (bmi > 30 && bmi <= 40) {
            document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben Adipositas"
        } else if (bmi > 40) {
            document.getElementById("ausgabeGewichtText").innerHTML = "Sie haben massive Adipositas"
        }
}

    console.log(bmi)
}


