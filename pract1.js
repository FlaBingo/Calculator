const disco = document.querySelector(".disco");
const container = document.querySelector("#container");
const themebutt = document.querySelector("#themebutt");
const main = document.querySelector(".main");
const searchAlert = document.querySelector(".searchAlert");
let bool = false;
let discoBool = false;
let interval;

searchAlert.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        alert("It does Nothing.");
    }
})

disco.addEventListener('click', () => {
    if (!discoBool) {
        function animate(){
            interval = setInterval(() => {
            rand = Math.floor(Math.random() * 3);
            if (rand === 0) {
                container.style.background = "linear-gradient(to right, rgb(0, 74, 193), rgb(38, 113, 206), rgb(24, 90, 243))"
            } else if (rand === 1) {
                container.style.background = "linear-gradient(to right, rgb(0, 139, 193), rgb(38, 113, 206), rgb(24, 90, 243))"
            } else {
                container.style.background = "linear-gradient(to right, rgb(56, 187, 238), rgb(38, 113, 206), rgb(84, 163, 237))"
            }

        }, 300);
        }
        requestAnimationFrame(animate)
        disco.innerHTML = 'Turn OFF'
        discoBool = true
    } else {
        clearInterval(interval);
        disco.innerHTML = 'Disco Mode'
        discoBool = false
    }
})
themebutt.addEventListener("click", () => {
    if (!bool) {
        themebutt.innerHTML = "Bright";
        themebutt.style.color = "black"
        themebutt.style.backgroundColor = "white"
        container.style.background = "black";
        bool = true;
    } else {
        themebutt.innerHTML = "Dark"
        themebutt.style.color = "white"
        themebutt.style.backgroundColor = "black"
        container.style.background = "linear-gradient(to right, rgb(60, 181, 238), rgb(89, 134, 231), rgb(33, 125, 216))";
        bool = false;
    }
});



const display = document.querySelector(".display");
let myArray = [];
const av = (value) => {
    display.value += value;
    myArray.push(value)
}

const Undo = () => {
    myArray.pop()
    display.value = myArray.join("")
}

const clearDisplay = () => {
    display.value = "";
    myArray = [];
}

const calculate = () => {
    try{
        const calculate = eval(display.value).toFixed(2);
        display.title = calculate;
        display.value = calculate;
        console.log(myArray);
        
        return ""
    }catch (error){
        display.title = error;
        display.value = error;
        return ""
    }
}
// const clear = () => {
//     let notarr = myArray.pop();
//     display.value = notarr
// }

