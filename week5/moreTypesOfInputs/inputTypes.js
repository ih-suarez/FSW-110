/*
 * * Form Event Listener 
 */

const travelerInfo = document.flyerInformation

travelerInfo.addEventListener('submit', (event) => {
    console.log(travelerInfo.firstName.value)
    console.log(travelerInfo.lastName.value)
    console.log(travelerInfo.age.value)
    console.log(travelerInfo.gender.value)
    console.log(travelerInfo.city.value)
    
    const checkedInputs = []

    for(let i = 0; i < travelerInfo.diet.length; i++){
        if(travelerInfo.diet[i].checked){
            checkedInputs.push(travelerInfo.diet[i].value)
        }
    }
    console.log(checkedInputs)

    alert(`Traveler Information:
    First Name: ${travelerInfo.firstName.value}
    Last Name: ${travelerInfo.lastName.value}
    Age: ${travelerInfo.age.value}
    Gender: ${travelerInfo.gender.value}
    City: ${travelerInfo.city.value}
    Dietary Restrictions: ${checkedInputs}`);
});