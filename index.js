// putting values in variables
let num = 10
const meterToFeetRatio = 3.2808399
const feetToMeterRatio = 0.3048
const gallonToLiterRatio = 3.78541178
const literToGallonRatio = 0.264172052
const kiloToPoundRatio = 2.20462262
const poundToKiloRatio = 0.45359237

let userInput = null

function updateValues() {
    userInput = Number(document.getElementById("num-el").value)
    
    updateLength(userInput)
    updateMass(userInput)
    updateVolume(userInput)
}

function updateLength(userInput) {
    const ouputString1 = userInput + " meters = " + (userInput * meterToFeetRatio).toFixed(3) + " feet | "
    const outputString2 = userInput + " feet = " + (userInput * feetToMeterRatio).toFixed(3) + " meters"
    
    document.querySelector('#outputLength').textContent = ouputString1 + outputString2
}

function updateVolume(userInput) {
    const outputString3 = userInput + " liters = " + (userInput * literToGallonRatio).toFixed(3) + " gallons | "
    const outputString4 = userInput + " gallons = " + (userInput * gallonToLiterRatio).toFixed(3)
    
    document.querySelector('#outputVolume').textContent = outputString3 + outputString4
}

function updateMass(userInput) {
    const outputString5 = userInput + " kilos = " + (userInput * kiloToPoundRatio).toFixed(3) + " pounds | "
    const outputString6 = userInput + " pounds = " +(userInput * poundToKiloRatio).toFixed(3) + " kilos"
    
    document.querySelector('#outputMass').textContent = outputString5 + outputString6
}