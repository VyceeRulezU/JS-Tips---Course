
//Numbers
//Strings
//Booleans
//Arrays
//Objects

// Dont use var anymore
var numberStore = 46 

let numberBox = 100

const numberRoom = 23

let nameOfStudent = "Victor Ironali"


let oldBalance = 100
let newIncome = 300

let banlance = oldBalance + newIncome

let newBucket = 10%3


console.log("Hello, JavaScript! I'm back again.");

console.log(numberStore)

console.log(numberBox)

console.log(numberRoom)

console.log(nameOfStudent)

console.log(banlance)

console.log(newBucket)

let exponentBucket = 2 ** 3

console.log(exponentBucket)

// Number Increment

let numberInc = 12

numberInc++

console.log(numberInc)

// Addition Assignment Operation

let numberAss = 30
numberAss+=10
console.log(numberAss)

// Subtraction Assignment Operation

let numberSub = 30
numberSub-=10
console.log(numberSub)


// Comparism Operators

// greater than

let number1 = 4
let number2 = 8

let outcome = number1 < number2

console.log(outcome)

let outcome2 = number1 > number2

console.log(outcome2)

// Conditional - IF Statement

if(number1 === number2){
    console.log("You have passed the test!")
}else{
    console.log("this didn't work out well this time.")
}

let cutOffMark = 240
let validAge = 18
let studentScore = 300
let studentAge = 16

if(studentScore >= cutOffMark && studentAge >= validAge){
    console.log("Congratulations! You have been given an Admission.")
}else{
    console.log("Your Admission Status is Nil!")
}

// OR Logical Operator

if(studentScore >= cutOffMark || studentAge >= validAge){
    console.log("You have been given Admission. Congratulations!")
}else{
    console.log("Your Admission status is Nil!")

}

// Object Literal



const carRecord =
{
    carName : "Honda",
    carColor : "Black",
    carModel : "Civic",
    carVin : "3442JSHDLJS886875S5875",
    carYear : 2018
}

console.log(carRecord)

let candidateDetails = {

    canName : "Linda",
    canAge : 22,
    canHeight : 6.4,
    canGender : "Female"
}

console.log(candidateDetails)

let carBranding = {

    carName : "Venza",
    carColor : "Brown",
    manYear : 2011,
    carVin : "2484983432HDP90832483SD",
    plateNum : "LSG607ABJ",
    tyreSize : "R21'"
}

console.log(carBranding)

// Accessing Object Properties

// Dot Notation

let carNam = carBranding.carName

console.log(carNam)

// Adding Object Properties with Dot Notation

carBranding.engineType = "EDI"

// Updating Existing Proprty

carBranding.carColor = "Blue"

// Deleting an existing Property

delete carBranding.carName

// Sealing an object

Object.seal (carBranding)

carBranding.carColor = "Green"


// Object Nesting

const steuentRecord = {
    fullName : "Andrew",
    regNum : "AD20025",
    dept : "Computer Science",
    lastSemesterResult : {
        mathematics : "A",
        english : "B",
        biology : "A",
        techncalDrawing : "B"
    }
}

console.log(steuentRecord)

let age1 = 30
let age2 = 28
let age3 = 20

function averageAge(){
    let average = age1 + age2 + age3 / 3
    
    console.log(average)
}

averageAge()

// Inputs - Paraameters and Arguments

function priceOfItems (price1, price2){
    let totalPrice = price1 + price2

    console.log(totalPrice)
}

priceOfItems(5, 7)
priceOfItems(3500, 78900)

// Function to Print Student Score

function printStudentScore(studentName, studentMathScore){
    let report = `Hello ${studentName}, your Math's Score is ${studentMathScore}`
    console.log(report)
}

printStudentScore("Victor", 98)

let x = 10 + `5`

console.log(x)



// Array

// Array methods
// Push
// Pop
// Unshift
// Shift
// IndexOf
// Includes
// Concat
// Slice
// Splice
// Length

const arrayOfCountries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"]
let resultSlice = arrayOfCountries.slice(1,4)
console.log(resultSlice)

for(let i = 0; i < arrayOfCountries.length; i++){
    console.log(arrayOfCountries[i])
}

// Multiplication Operation with Loop

const arrayOfMulti = [1,2,3,4,5,6,7,8,9,10,11,12]
const emptyArray = []

for (x = 0; x < 12; x++){
    let multiResult = arrayOfMulti[x] * 3
    console.log(multiResult)
    emptyArray.push(multiResult)
    
}
console.log(emptyArray)

// Array of objects

const arrayOfObjects = [
    {
        studentName : "Victor",
        studentAge : 22,
        studentCourse : "Computer Science"
    },
    {
        studentName : "Linda",
        studentAge : 20,
        studentCourse : "Accounting"
    },
    {   
        studentName : "Andrew",
        studentAge : 23,
        studentCourse : "Economics"
    }
]

for(let j = 0; j < arrayOfObjects.length; j++){
    console.log(arrayOfObjects[j])
    // let studentInfo = arrayOfObjects[j]
    // console.log(studentInfo)
}


// Foreach Method

arrayOfCountries.forEach((item, index)=>{
    console.log(index, item)
     
})

arrayOfObjects.forEach((item, index)=>{
    console.log(index, item)
     
})

const arrayOfNames = [
    {
        city : "Lagos",
        country : "Nigeria",
        code : "NG",
        continent : "Africa"
    },
    {
        city : "Cairo",
        country : "Egypt",
        code : "EG",
        continent : "Africa"
    },
    {   
        city : "Nairobi",
        country : "Kenya",
        code : "KE",
        continent : "Africa"
    },
    {
        city : "Accra",
        country : "Ghana",
        code : "GH",
        continent : "Africa"
    }
]

arrayOfNames.forEach((item, index)=>{
    console.log(index, item)    
}
)

for(let k = 0; k < arrayOfNames.length; k++){
    console.log(arrayOfNames[k])
}