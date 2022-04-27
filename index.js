let generateEl1 = document.getElementById("generate-el1")
let generateEl2 = document.getElementById("generate-el2")
let generateEl3 = document.getElementById("generate-el3")
let generateEl4 = document.getElementById("generate-el4")


let keys = ["Abcsdhfhf", "Blfhfksjfhsfh", "Cfhskfhfhf", "Ddskjfhkfhkjfh", "Esjhfksjfhkfh", "Fkfjhskjfhsfh", "Ghfkdshfkjfhh", "Hfhksdhfsjkfhsf", "FxV:ZQT$B/rt5`N?","J;Ms--CKG5N^Gn8{","P]M9?[`.&nmw}'VF","_hhB(j4d/M-AZ9E$","7<RJ4k<m/gSd%-@2"]
   

  



function generate() {
    
    generateEl1.textContent = keys[Math.floor(Math.random() * keys.length)]
    generateEl2.textContent = keys[Math.floor(Math.random() * keys.length)]
    generateEl3.textContent = keys[Math.floor(Math.random() * keys.length)]
    generateEl4.textContent = keys[Math.floor(Math.random() * keys.length)]
    
}  
   



