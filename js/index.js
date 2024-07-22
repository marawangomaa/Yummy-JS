const mealArea = document.querySelector('#mealData');
const catArea = document.querySelector('#catData');
const areaArea = document.querySelector('#areaData')
const ingArea = document.querySelector('#ingData')
const contactArea = document.querySelector('#formData')
const search = document.querySelector('#search');
const categories = document.querySelector('#categories');
const area = document.querySelector('#area');
const ingredients = document.querySelector('#ingredients');
const contactUs = document.querySelector('#contactUs');
const loading = document.querySelector('.loading');
const details = document.querySelector('.details');
const content = document.querySelector('.content');
const searchArea = document.getElementById('searchArea');
const sbFirstName = document.getElementById('searchByFirstName');
const sbFirstLetter = document.getElementById('searchByFirstLetter');
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const age = document.querySelector('#age')
const password = document.querySelector('#password')
const rePassword = document.querySelector('#rePassword')
const subBtn = document.querySelector('#subBtn');
subBtn.disabled = true; //? Initialize as disabled




getMealFN(""); //! show the Meals that have the value of null in the first name data fetch


//! on click on the setting btn open and close the list of categories 
function ocBTn(){
    const settingsWidth = $('#navInner').outerWidth(true);
$('#navSide').animate({ left: -settingsWidth }, 0);
let isOpen = false;
$('#navOuter #settingsIcon').on('click', () => {
    if(!isOpen){
        $('#settingsIcon').attr('class','fas fa-x fa-2x list-icon')
    } else{
        $('#settingsIcon').attr('class','fa-solid fa-bars fa-2x list-icon')
    }
    $('#navSide').animate({ left: isOpen ? -settingsWidth : 0 }, 1000);
    isOpen = !isOpen;
});
}
ocBTn() //? Run the setting Btn Function




//! on click on search btn open the search area and close any other area 
search.addEventListener('click', () => {
    searchArea.classList.remove("d-none");
    mealArea.classList.remove('d-none')
    catArea.classList.add('d-none')
    details.classList.add('d-none')
    areaArea.classList.add('d-none')
    ingArea.classList.add('d-none')
     contactArea.classList.add('d-none')


});


//! send the value of the sbName to the getMealFN function to show the res of it 
sbFirstName.addEventListener('input', () => {
    getMealFN(sbFirstName.value);
    
});

//! send the value of the sbName to the getMealFL function to show the res of it 
sbFirstLetter.addEventListener('input', () => {
    const value = sbFirstLetter.value;
    const regex = /^[a-zA-Z]?$/; //? Regex to match a single letter (uppercase or lowercase)

    if (!regex.test(value)) {
        sbFirstLetter.value = value.slice(0, 1); //? Keep only the first character if invalid input
    }

    if(sbFirstLetter.value){
        getMealFL(sbFirstLetter.value);
    } else{
        getMealFL('a');
    }
});


//! on click on contact Btn open the contact area and close any other area
contactUs.addEventListener('click',()=>{
    mealArea.classList.add('d-none');
    searchArea.classList.add("d-none");
    areaArea.classList.add('d-none');
    catArea.classList.add('d-none')
    details.classList.add('d-none')
    ingArea.classList.add('d-none')
    contactArea.classList.remove('d-none')

})

//! Name validation
function nameValidation(){
    const nameRegex = /^[A-Z][a-z]*$/;
    name.addEventListener('input',()=>{
        if(!nameRegex.test(name.value)){
            document.querySelector('#nameMsg').classList.remove('d-none')
        } else {
            document.querySelector('#nameMsg').classList.add('d-none')

        }
    })
}
nameValidation()

//! Email validation
function emailValidation(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    email.addEventListener('input',()=>{
        if(!emailRegex.test(email.value)){
            document.querySelector('#emailMsg').classList.remove('d-none')
        } else {
            document.querySelector('#emailMsg').classList.add('d-none')

        }
    })
}
emailValidation()

//! Phone validation
function phoneValidation(){
    const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    phone.addEventListener('input',()=>{
        if(!phoneRegex.test(phone.value)){
            document.querySelector('#phoneMsg').classList.remove('d-none')
        } else {
            document.querySelector('#phoneMsg').classList.add('d-none')

        }
    })
}
phoneValidation()

//! Age validation
function ageValidation(){
    const ageRegex = /^(?:[1-9][0-9]?|99)$/;
    age.addEventListener('input',()=>{
        if(!ageRegex.test(age.value)){
            document.querySelector('#ageMsg').classList.remove('d-none')
        } else {
            document.querySelector('#ageMsg').classList.add('d-none')

        }
    })
}
ageValidation()

//! Password validation
function passwordValidation(){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    password.addEventListener('input',()=>{
        rePasswordValidation(password.value)
        if(!passwordRegex.test(password.value)){
            document.querySelector('#pasMsg').classList.remove('d-none')
        } else {
            document.querySelector('#pasMsg').classList.add('d-none')

        }
    })
}
passwordValidation()

//! re-password validation
function rePasswordValidation(pas){
    rePassword.addEventListener('input',()=>{
        if(rePassword.value!=pas){
            document.querySelector('#rePasMsg').classList.remove('d-none')
        } else {
            document.querySelector('#rePasMsg').classList.add('d-none')
        }
    })
}
rePasswordValidation()

//! Function to check if all validation messages are hidden
function checkAllValidations() {
    const nameMsg = document.querySelector('#nameMsg').classList.contains('d-none');
    const emailMsg = document.querySelector('#emailMsg').classList.contains('d-none');
    const phoneMsg = document.querySelector('#phoneMsg').classList.contains('d-none');
    const ageMsg = document.querySelector('#ageMsg').classList.contains('d-none');
    const pasMsg = document.querySelector('#pasMsg').classList.contains('d-none');
    const rePasMsg = document.querySelector('#rePasMsg').classList.contains('d-none');
    
    if (nameMsg && emailMsg && phoneMsg && ageMsg && pasMsg && rePasMsg) {
        subBtn.disabled = false;
    } else {
        subBtn.disabled = true;
    }
}

name.addEventListener('input', checkAllValidations);
email.addEventListener('input', checkAllValidations);
phone.addEventListener('input', checkAllValidations);
age.addEventListener('input', checkAllValidations);
password.addEventListener('input', checkAllValidations);
rePassword.addEventListener('input', () => {
    rePasswordValidation(password.value);
    checkAllValidations();
});









//! fetching data from api filter by first name
async function getMealFN(meal) {
    loading.classList.remove('d-none');
    
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        const response = await api.json();
        loading.classList.add('d-none');
        if (response.meals) {
            displayMeals(response.meals);
            document.querySelectorAll('.card').forEach((card) => {
                card.addEventListener('click', () => {
                    getDetailsById(card.dataset.id);
                    details.classList.remove('d-none');
                    mealArea.classList.add('d-none');
                });
            });
        } else {
            console.error("No meals found for the given name.");
        }
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
}

//! fetching data from api filter by first letter
async function getMealFL(meal) {
    loading.classList.remove('d-none');
    
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meal}`);
        const response = await api.json();
        loading.classList.add('d-none');
        if (response.meals) {
            displayMeals(response.meals);
            document.querySelectorAll('.card').forEach((card) => {
                card.addEventListener('click', () => {
                    getDetailsById(card.dataset.id);
                    details.classList.remove('d-none');
                    mealArea.classList.add('d-none');
                });
            });
        } else {
            console.error("No meals found for the given letter.");
        }
    } catch (error) {
        console.error("Error fetching meals:", error);
    }
}

//! fetching data from api filter by id
async function getDetailsById(id) {
    loading.classList.remove('d-none');
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const response = await api.json();
        loading.classList.add('d-none');
        if (response.meals && response.meals.length > 0) {
            displayDetails(response.meals[0]);
            searchArea.classList.add('d-none')
        } else {
            console.error("No details found for the given meal ID.");
        }
    } catch (error) {
        console.error("Error fetching meal details:", error);
    }
}

//! fetching data from api filter by Categories
async function getCategories() {
    loading.classList.remove('d-none');
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const response = await api.json();
        loading.classList.add('d-none');
        if (response.categories) {
            displayCategories(response.categories);
            categories.addEventListener('click', () => {
                mealArea.classList.add('d-none');
                searchArea.classList.add("d-none");
                ingArea.classList.add('d-none')
                areaArea.classList.add('d-none')
                details.classList.add('d-none')
                contactArea.classList.add('d-none')
                catArea.classList.remove('d-none');

            });
            
            document.querySelectorAll('.catCard').forEach((card) => {
                card.addEventListener('click', () => {
                    getCatByName(card.dataset.id);
                    catArea.classList.add('d-none')
                    mealArea.classList.remove('d-none')
                   
                });
            });
           
        } else {
            console.error("No details found for the given Categories.");
        }
    } catch (error) {
        console.error("Error fetching Categories:", error);
    }
}

//! fetching data from api filter by Categories name
async function getCatByName (idName){
    loading.classList.remove('d-none')
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${idName}`)
        const response = await api.json()
        loading.classList.add('d-none')
        if(response.meals){
            displayMeals(response.meals)
            document.querySelectorAll('.card').forEach((card)=>{
                card.addEventListener('click',()=>{
                    console.log('hi '+ card.dataset.id);
                    getDetailsById(card.dataset.id)

                    mealArea.classList.add('d-none')
                    details.classList.remove('d-none')
                })
            })
        } else {
            console.error("No details found for the given meal Name.");
        }
    } catch (error) {
        console.error("Error fetching Categories Name:", error);
    }
}
getCategories();


//! fetching data from api filter by Area
async function getArea(){
    loading.classList.remove('d-none')
    try {
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        const response = await api.json()
        loading.classList.add('d-none')
        if(response.meals){
            displayArea(response.meals)
            area.addEventListener('click',()=>{
                mealArea.classList.add('d-none');
                searchArea.classList.add("d-none");
                ingArea.classList.add('d-none')
                catArea.classList.add('d-none')
                details.classList.add('d-none')
                contactArea.classList.add('d-none')
                areaArea.classList.remove('d-none');

            })
            document.querySelectorAll('.areaCard').forEach((card)=>{
                card.addEventListener('click',()=>{
                    console.log(card.dataset.id);
                    getAreaByName(card.dataset.id)
                    areaArea.classList.add('d-none')
                    mealArea.classList.remove('d-none')
                })
            })
        } else {
            console.error("Error fetching Area List:", error);
        }
    } catch (error) {
        console.error("Error fetching Area List:", error);
    }
}

//! fetching data from api filter by Area name
async function getAreaByName(nameARea){
    loading.classList.remove('d-none')
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameARea}`)
        const response = await api.json()
        loading.classList.add('d-none')
        if(response.meals){
            displayMeals(response.meals)
            document.querySelectorAll('.card').forEach((card)=>{
                card.addEventListener('click',()=>{
                    console.log('hi '+ card.dataset.id);
                    getDetailsById(card.dataset.id)
                    areaArea.classList.add('d-none')
                    mealArea.classList.add('d-none')
                    contactArea.classList.add('d-none')
                    details.classList.remove('d-none')
                })
            })
        } else {
            console.error("Error fetching Area Name:", error);
        }
    } catch (error) {
        console.error("Error fetching Area Name:", error);
    }
}

getArea()


//! fetching data from api filter by Ingredients
async function getIngredients(){
    loading.classList.remove('d-none')
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        const response = await api.json()
        loading.classList.add('d-none')
        if(response.meals){
            displayIng(response.meals)
            ingredients.addEventListener('click',()=>{
                mealArea.classList.add('d-none');
                searchArea.classList.add("d-none");
                areaArea.classList.add('d-none');
                catArea.classList.add('d-none')
                details.classList.add('d-none')
                contactArea.classList.add('d-none')
                ingArea.classList.remove('d-none')
            })
            document.querySelectorAll('.ingCard').forEach((card)=>{
                card.addEventListener('click',()=>{
                    console.log(card.dataset.id);
                    getIngByName(card.dataset.id)
                    ingArea.classList.add('d-none')
                    details.classList.add('d-none')
                    contactArea.classList.add('d-none')
                    mealArea.classList.remove('d-none')
                })
            })
        } else {
            console.error("Error fetching Ingredients:", error);
        }
    } catch (error) {
        console.error("Error fetching Ingredients:", error);
    }
}


//! fetching data from api filter by Ingredients name
async function getIngByName(ingName){
    loading.classList.remove('d-none')
    try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingName}`)
        const response = await api.json()
        loading.classList.add('d-none')
        if(response.meals){
            displayMeals(response.meals)
            document.querySelectorAll('.card').forEach((card)=>{
                card.addEventListener('click',()=>{
                    console.log(card.dataset.id);
                    getDetailsById(card.dataset.id)
                    areaArea.classList.add('d-none')
                    mealArea.classList.add('d-none')
                    ingArea.classList.add('d-none')
                    contactArea.classList.add('d-none')
                    details.classList.remove('d-none')
                })
            })
        } else {
            console.error("Error fetching Ingredients Name:", error);
        }
    } catch (error) {
        console.error("Error fetching Ingredients Name:", error);
    }
}

getIngredients()








//todo Show the section of the Meals After Getting the data from the api 
function displayMeals(data) {
    let fName = sbFirstName.value;
    let mealBox = ``;
    for (let i = 0; i < data.length; i++) {
        if (data[i].strMeal.toLowerCase().includes(fName.toLowerCase())) {
            mealBox += `
            <div class="col-md-3 g-5">
                <div id="card" data-id="${data[i].idMeal}" class="card inner mb-2">
                    <div id="img" class="img position-relative rounded-3 overflow-hidden">
                        <img src="${data[i].strMealThumb}" class="w-100" alt="">
                        <div class="img-name fs-3 fw-medium position-absolute rounded-3 w-100 h-100 bg-white bg-opacity-75 d-flex align-items-center ps-2">
                            ${data[i].strMeal}
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }
    mealArea.innerHTML = mealBox;
}

//todo Show the section of the Details After Getting the data from the api 
function displayDetails(data) {
    if (!data) {
        console.error("No data provided to displayDetails");
        return;
    }
    let detailsBox = `
        <div class="col-md-4">
            <img class="w-100 rounded-3" src="${data.strMealThumb}" alt="">
            <h2>${data.strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h2>Instructions</h2>
            <p>${data.strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${data.strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${data.strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${data.strIngredient1 ? `<li class="alert alert-info m-2 p-1">${data.strIngredient1}</li>` : ''}
                ${data.strIngredient2 ? `<li class="alert alert-info m-2 p-1">${data.strIngredient2}</li>` : ''}
                ${data.strIngredient3 ? `<li class="alert alert-info m-2 p-1">${data.strIngredient3}</li>` : ''}
                ${data.strIngredient4 ? `<li class="alert alert-info m-2 p-1">${data.strIngredient4}</li>` : ''}
                ${data.strIngredient5 ? `<li class="alert alert-info m-2 p-1">${data.strIngredient5}</li>` : ''}
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${data.strTags ? data.strTags.split(',').map(tag => `<li class="alert alert-info m-2 p-1">${tag}</li>`).join('') : ''}
            </ul>
            <a target="_blank" href="${data.strSource}" class="btn btn-success">Source</a>
            <a target="_blank" href="${data.strYoutube}" class="btn btn-danger">YouTube</a>
        </div>
    `;
    document.querySelector('#rowData').innerHTML = detailsBox;
}

//todo Show the section of the Categories After Getting the data from the categories api
function displayCategories(data) {
    let catBox = ``;
    for (let i = 0; i < data.length; i++) {
        catBox += `
        <div class="col-md-3 g-5">
            <div id="card" data-id="${data[i].strCategory}" class="catCard inner mb-2">
                <div id="img" class="img position-relative rounded-3 overflow-hidden">
                    <img src="${data[i].strCategoryThumb}" class="w-100" alt="">
                    <div class="img-name fs-3 fw-medium position-absolute rounded-3 w-100 h-100 bg-white bg-opacity-75 d-flex align-items-center ps-2">
                        ${data[i].strCategory}
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    catArea.innerHTML = catBox;
}

//todo Show the section of the Area After Getting the data from the Area api
function displayArea(data) {
    let areaBox = ``;
    for (let i = 0; i < data.length; i++) {
        areaBox += `
        <div data-id="${data[i].strArea}" class="areaCard  col-md-3">
                <div  class="rounded-2 text-center cursor-pointer text-white">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${data[i].strArea}</h3>
                </div>
        </div>
        `;
    }
    areaArea.innerHTML = areaBox;
}

//todo Show the section of the Ingredient After Getting the data from the Ingredient api
function displayIng(data) {
    let ingBox = ``;
    for (let i = 0; i < 20; i++) {
        ingBox += `
        <div data-id="${data[i].strIngredient}" class="col-md-3 ingCard ing overflow-hidden">
                <div class="rounded-2 text-center cursor-pointer text-white">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${data[i].strIngredient}</h3>
                        <p>${data[i].strDescription}</p>
                </div>
        </div>
        `;
    }
    ingArea.innerHTML = ingBox;
}
