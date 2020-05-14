const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener("DOMContentLoaded", function() {
    getDogImg();
    getDogBreed();
})

function getDogImg(event) {
    fetch(imgUrl)
        .then(res => res.json())
        .then(addDogImg)
}

function getDogBreed() {
    fetch(breedUrl)
        .then(res => res.json())
        .then(addDogBreed)
}

function addDogImg(images) {
    images.message.forEach(message => {
        let dogImage = document.createElement("img");
        dogImage.src = message;
        dogImage.style = "height: 100px; width: auto;"
        let parentDiv = document.getElementById("dog-image-container");
        parentDiv.appendChild(dogImage);

    })
}


function addDogBreed(breeds) {
    for (let [key, value] of Object.entries(breeds.message)) {
        let breedLi = document.createElement("li");
        breedLi.innerText = key;
        let parentUl = document.getElementById("dog-breeds");
        parentUl.appendChild(breedLi);

        breedLi.addEventListener('click', color => {
            breedLi.style = "color: green;"
        })

        let breedDropdown = document.querySelector('#breed-dropdown')
        breedDropdown.addEventListener("change", value => {
            let filterBy = value.target.value
            for (let children of parentUl.children) {
                if (children.innerText[0] != filterBy) {
                    children.style = "display: none;"
                } else {
                    children.style = "display: block;"
                }
            }
        })

    }

}