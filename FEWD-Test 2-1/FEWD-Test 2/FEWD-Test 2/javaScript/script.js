// <!-- Lois Dara Sanglap -->
// <!-- 170000366 -->


// Calculating the how many vowels in the string and counting bot upper and lower case

function CalcVowels() {
    alert("Calculate vowels");
    // Write code here for calculate the vowels in a string 
    let string = document.getElementById("vowels").value;
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < string.length; i++) {
        if (vowels.indexOf(string[i]) !== -1) {
            count++;
        }
    }

    document.getElementById("VowelsResult").innerHTML = count;

}
// calculating the volme of a spehre 

function CalcVolume() {
    alert("calculate the volume of a sphere");
    let r = document.getElementById("Radius").value;
    let v = (4 / 3) * Math.PI * Math.pow(r, 3);
    document.getElementById("VolumeResult").innerHTML =.value;
}
// Calulating the marks and displaying the grades

function ShowGrade() {
    alert("Show Grade");
    const mark = parseInt(document.getElementById("Mark").value);
    let grade = "";
    if (mark >= 90 && mark <= 100) {
        grade = "A";
    } else if (mark >= 80 && mark < 90) {
        grade = "B";
    } else if (mark >= 70 && mark < 80) {
        grade = "c";
    } else if (mark >= 60 && mark < 70) {
        grade = "D";
    } else if (mark >= 50) {
        grade = "E";
    }
    document.getElementById("GradeResult").innerHTML = "GRade " + grade;
}

