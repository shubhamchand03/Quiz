function showRules() {
    window.alert("Rules of Quiz:\n" +
        "1. There are a total of 6 questions in the game based on current affair, technology and sports & games.\n" +
        "2. Each question carries 5 marks.\n" +
        "3. Negative marking on every wrong question (-2). \n" +
        "4. It is not mandatory to attempt all questions.");
}

function showQA() {
    document.getElementById("quiz").style.display = "initial";
    document.getElementById("final").style.display = "initial";
}

function submitForm() {
    var radios1 = document.getElementsByName('q1');
    var radios2 = document.getElementsByName('q2');
    var radios3 = document.getElementsByName('q3');
    var radios4 = document.getElementsByName('q4');
    var radios5 = document.getElementsByName('q5');
    var radios6 = document.getElementsByName('q6');
    var ans1, ans2, ans3, ans4, ans5, ans6;
    var maxMarks = 30,
        obtained = 0,
        correctAns = 0;

    var stat1 = false,
        stat2 = false,
        stat3 = false,
        stat4 = false,
        stat5 = false,
        stat6 = false;


    for (var i = 0; i < 4; i++) {
        if (radios1[i].checked) {
            ans1 = radios1[i].value;
            document.getElementById("userAns1").innerHTML = ans1;
        }

        if (radios2[i].checked) {
            ans2 = radios2[i].value;
            document.getElementById("userAns2").innerHTML = ans2;
        }

        if (radios3[i].checked) {
            ans3 = radios3[i].value;
            document.getElementById("userAns3").innerHTML = ans3;
        }

        if (radios4[i].checked) {
            ans4 = radios4[i].value;
            document.getElementById("userAns4").innerHTML = ans4;
        }

        if (radios5[i].checked) {
            ans5 = radios5[i].value;
            document.getElementById("userAns5").innerHTML = ans5;
        }

        if (radios6[i].checked) {
            ans6 = radios6[i].value;
            document.getElementById("userAns6").innerHTML = ans6;
        }
    }

    if (ans1 != undefined) {
        if (ans1 == "Qasem Soleimani") {
            obtained = obtained + 5;
            stat1 = true;
            document.getElementById("userAns1").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns1").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns1").innerHTML = "No Attempt";
        document.getElementById("userAns1").style.backgroundColor = "#ffff00";
    }


    if (ans2 != undefined) {
        if (ans2 == "Visakhapatnam") {
            obtained = obtained + 5;
            stat2 = true;
            document.getElementById("userAns2").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns2").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns2").innerHTML = "No Attempt";
        document.getElementById("userAns2").style.backgroundColor = "#ffff00";
    }


    if (ans3 != undefined) {
        if (ans3 == "Tokyo") {
            obtained = obtained + 5;
            stat3 = true;
            document.getElementById("userAns3").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns3").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns3").innerHTML = "No Attempt";
        document.getElementById("userAns3").style.backgroundColor = "#ffff00";
    }

    if (ans4 != undefined) {
        if (ans4 == "Croatia") {
            obtained = obtained + 5;
            stat4 = true;
            document.getElementById("userAns4").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns4").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns4").innerHTML = "No Attempt";
        document.getElementById("userAns4").style.backgroundColor = "#ffff00";
    }

    if (ans5 != undefined) {
        if (ans5 == "Tesla") {
            obtained = obtained + 5;
            stat5 = true;
            document.getElementById("userAns5").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns5").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns5").innerHTML = "No Attempt";
        document.getElementById("userAns5").style.backgroundColor = "#ffff00";
    }

    if (ans6 != undefined) {
        if (ans6 == "Satya Nadella") {
            obtained = obtained + 5;
            stat6 = true;
            document.getElementById("userAns6").style.backgroundColor = "#33cc33";
        } else {
            obtained = obtained - 2;
            document.getElementById("userAns6").style.backgroundColor = "#ff0000";
        }
    } else {
        document.getElementById("userAns6").innerHTML = "No Attempt";
        document.getElementById("userAns6").style.backgroundColor = "#ffff00";
    }

    showResult(obtained);
    document.getElementById("scoreboard").style.display = "initial";
}

function showResult(value) {
    var percentage = (value / 30) * 100;
    if (percentage < 0) {
        percentage = 0;
        document.getElementById("msg").style.display = "initial";
        document.getElementById("msg").style.color = "#ff0000";
        document.getElementById("msg").innerHTML = "Better Luck Next Time";
    }
    if (percentage == 100) {
        document.getElementById("msg").style.display = "initial";
        document.getElementById("msg").style.color = "#33cc33";
        document.getElementById("msg").innerHTML = "Congratulations";
    }
    document.getElementById("marks").innerHTML = "Your score: " + value + "/30.";
    document.getElementById("percentage").innerHTML = "Your percentage is " + percentage + ".";
}