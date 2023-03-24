let english = document.getElementById("eng")
let maths = document.getElementById("mat")
let physics = document.getElementById("phy")
let chemistry = document.getElementById("che")
let computer = document.getElementById("comp")

let gradeBtn = document.getElementById("gradeBtn")
gradeBtn.addEventListener("click", () => {
    let eng = parseInt(english.value) || 0
    let mat = parseInt(maths.value) || 0
    let phy = parseInt(physics.value) || 0
    let che = parseInt(chemistry.value) || 0
    let comp = parseInt(computer.value) || 0
    if (eng > 100 || eng < 0 || mat > 100 || mat < 0 || phy > 100 || phy < 0
        || che > 100 || che < 0 || comp > 100 || comp < 0) {
        alert("PLease Enter Markes in range of 100")
    } else {
        eng
        let total = eng + mat + phy + che + comp
        console.log(total)
        let average = parseInt(total / 5)
        console.log(average)
        let overAllGrade = parseInt((total/500)*100)
        console.log(overAllGrade)
        let grade = ""
        let totalP = document.getElementById("totalP")
        let avgP = document.getElementById("avgP")
        let gradeP = document.getElementById("gradeP")
        if (eng == 0 || eng <= 35 || mat == 0 || mat <= 35 || phy == 0 || phy <= 35
            || che == 0 || che <= 35 || comp == 0 || comp <= 35) {
                grade = "F"
        }else if(overAllGrade >= 90){
            grade = "A"
        }else if(overAllGrade >= 80 && overAllGrade <= 89){
            grade = "B"
        }else if(overAllGrade >= 70 && overAllGrade <= 79){
            grade = "C"
        }else if(overAllGrade >= 60 && overAllGrade <= 69){
            grade = "D"
        }else if(overAllGrade < 60){
            grade = "F"
        }
        totalP.innerText = total
        avgP.innerText = average
        gradeP.innerText = grade
        console.log(grade)

    }
})