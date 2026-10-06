// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.
const forge = document.querySelector("#forge")
const heatText = document.getElementById("heat-value")
const swordText = document.getElementById("sword-count")
const statusText = document.getElementById("forge-status")
const forgeImage = document.getElementById("forge-image")
const messageText = document.getElementById("action-message")
// 2. Create the two state variables: heat and swords made.
let heat = 20
let swords = 0
// 3. Write getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue){
    if(heatValue < 30){
        return "Too cold"
    } else if(heatValue < 70){
        return "Ready to forge"
    } else {
        return "Roaring fire"
    }
}
// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge(){
    const status = getForgeStatus(heat)
    
    statusText.textContent = status
    heatText.textContent = heat
    swordText.textContent = swords
    forge.classList.remove("is-cold", "is-ready", "is-roaring")

    if(heat < 30){
        forge.classList.add("is-cold")
        forgeImage.setAttribute("src", "assets/forge-cold.svg")
        forgeImage.setAttribute("alt", "A stone forge with dark coals and no flames")
    } else if(heat < 70){
        forge.classList.add("is-ready")
        forgeImage.setAttribute("src", "assets/forge-ready.svg")
        forgeImage.setAttribute("alt", "A stone forge with a small orange fire")
    } else {
        forge.classList.add("is-roaring")
        forgeImage.setAttribute("src", "assets/forge-roaring.svg")
        forgeImage.setAttribute("alt", "A stone forge with tall bright flames and sparks")
    }
}
// 5. Write resetForge(). Restore the state, message, and display.
function resetForge(){
    heat = 20
    swords = 0
    messageText.textContent = "Add heat to start"
    updateForge()
}
// 6. Write heatForge(amount). Add heat, cap it, and update the page.
function heatForge(amount){
    heat += amount

    if(heat > 100){
        heat = 100
    }
    messageText.textContent = "The forge is heated"
    updateForge()
}
// 7. Write makeSword(). Handle both success and insufficient heat.
function makeSword(){
    if(heat >= 30){
        heat -= 30
        swords +=1
        messageText.textContent = "You made a sword!"
    } else {
        messageText.textContent = "30 heat required to make a sword"
    }
    updateForge()
}
// 8. Call resetForge() once to start the game.
resetForge()
// Use the tests in ASSIGNMENT.md to check your work.







