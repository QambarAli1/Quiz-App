var quiz = [
    {
        question: 'Abbreviation of HTML',
        options: {
            a: '(a) High Text MarkUp Language',
            b: '(b) Hyper Text MarkUp Language',
            c: '(c) Hyper Text Monitor Language'
        },
        correctOption: '(b) Hyper Text MarkUp Language'
    },
    {
        question: 'Latest Version of HTML is',
        options: {
            a: '(a) HTML 4',
            b: '(b) HTML 5',
            c: '(c) Html 6'
        },
        correctOption: '(b) HTML 5'
    },
    {
        question: 'CSS is used for',
        options: {
            a: '(a) Styling Html',
            b: '(b) Programming in Html',
            c: '(c) Removing Html'
        },
        correctOption: '(a) Styling Html'
    },
    {
        question: 'Linux is an',
        options: {
            a: '(a) Language',
            b: '(b) Operating System',
            c: '(c) Database System'
        },
        correctOption: '(b) Operating System'
    },
    {
        question: 'Which of the following is an Open Source Operating System',
        options: {
            a: '(a) Windows',
            b: '(b) Linux',
            c: '(c) IOS'
        },
        correctOption: '(b) Linux'
    },
    {
        question: 'CSS Stands for ?  ',
        options: {
            a: '(a) Creative Style Sheet',
            b: '(b) Colorful Style Sheet',
            c: '(c) Cascading Style Sheet'
        },
        correctOption: '(c) Cascading Style Sheet'
    },
    {
        question: 'RAM stands for ? ',
        options: {
            a: '(a) Randam Access Memory',
            b: '(b) Read Access Memory',
            c: '(c) Regular Access Memory'
        },
        correctOption: '(a) Randam Access Memory'
    },
    {
        question: 'ROM stands for',
        options: {
            a: '(a) Read Only Memory',
            b: '(b) Random Only Memory ',
            c: '(c) React Only Memory'
        },
        correctOption: '(a) Read Only Memory'
    },
    {
        question: 'Monitor is an ',
        options: {
            a: '(a) Output Device',
            b: '(b) Input Device',
            c: '(c) Storage Device'
        },
        correctOption: '(a) Output Device'
    },
    {
        question: 'Keyboard is an ',
        options: {
            a: '(a) Output Device',
            b: '(b) Storage Device',
            c: '(c) Input Device'
        },
        correctOption: '(c) Input Device'
    }
]

var getBio = document.getElementById('biodata');
var getQuizUI = document.getElementById('quiz');
var getQs = document.getElementById('question');
var getOpt1 = document.getElementById('opt1');
var getOpt2 = document.getElementById('opt2');
var getOpt3 = document.getElementById('opt3');
var btnNext = document.createTextNode('Next');
var nextBtn = document.createElement('button');
var appTxtinBtn = nextBtn.appendChild(btnNext);
var q = 0;
var count = 0;
function startQuiz() {
    setInterval(countdown, 1000);
    getQuizUI.style.display = 'inherit';
    getQuizUI.style.border = '1px solid black';
    getQuizUI.style.backgroundColor = 'white';
    getOpt1.style.border = '1px solid black';
    getOpt1.style.backgroundColor = 'wheat';
    getOpt2.style.border = '1px solid black';
    getOpt2.style.backgroundColor = 'wheat';
    getOpt3.style.border = '1px solid black';
    getOpt3.style.backgroundColor = 'wheat';
    getBio.innerHTML = " ";
    getQs.innerHTML = quiz[q].question;
    getOpt1.innerHTML = quiz[q].options.a;
    getOpt2.innerHTML = quiz[q].options.b;
    getOpt3.innerHTML = quiz[q].options.c;
    getQuizUI.appendChild(nextBtn);
    nextBtn.setAttribute('class', 'nextBtn');
    nextBtn.setAttribute('onclick', 'next()');
}


// COuntdown Timer  starts here

var m = 5;
var s = 0;
var getTimeUi = document.getElementById('timer');
function countdown() {
    if (s > 0) {
        s--
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
    }
    else if (m > 0) {
        m--
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
        s = 59;
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
    }
    else if (m == 0 && s == 0) {
        getTimeUi.innerHTML = ' '
    }
}

//Countdown timer ends here





function chnBgColor(e) {
    removerSelection()
    e.setAttribute('class', 'optionSelected')
}

function removerSelection() {
    getOpt1.classList.remove('optionSelected');
    getOpt2.classList.remove('optionSelected');
    getOpt3.classList.remove('optionSelected');
}


var b = document.getElementsByClassName('optionSelected');
function next() {
    if (b[0] !== undefined) {
        if (b[0].innerHTML == quiz[q].correctOption) {
            count++
            console.log('count = ' + count);
        }
        removerSelection();
        q++
        console.log('q = ' + q);
        getQs.innerHTML = quiz[q].question;
        getOpt1.innerHTML = quiz[q].options.a;
        getOpt2.innerHTML = quiz[q].options.b;
        getOpt3.innerHTML = quiz[q].options.c;
        if (q == 9) {
            nextBtn.innerHTML = "Finish";
            nextBtn.setAttribute('onclick', 'finish()');
        }
    }
}


// Quiz App by QambarAli1

function finish() {
    m = 0;
    s = 0;
    if (b[0].innerHTML == quiz[9].correctOption) {
        count++
        console.log("count = " + count);
    }
    getTimeUi.innerHTML = " ";
    getQuizUI.innerHTML = " ";
    document.getElementById('quizQ&V').innerHTML = " "
    document.getElementsByClassName('quizHeading')[0].innerHTML = ' ';
    document.childNodes[1].childNodes[2].setAttribute("style", "background-image: none; background-color: black");
    certificate();
}

var getResultDiv = document.getElementById('ResultDiv');
var getName = document.getElementById('inputName4');
var getFName = document.getElementById('inputFatherName4');
var getRollNo = document.getElementById('inputRollNO');
function certificate() {
    getResultDiv.classList.replace('notShowResult', 'showResult')
    var certificateHead = document.getElementById('cerHead');
    certificateHead.innerHTML = "RESULT";
    var setName = document.getElementById('nameForCertificate');
    setName.innerHTML = `${'Name : '} ${getName.value}`
    var setFatherName = document.getElementById("FNameForCertificate");
    setFatherName.innerHTML = `${'F.Name : '} ${getFName.value}`;
    var setRollNo = document.getElementById("rollNoForCertificate");
    setRollNo.innerHTML = `${'Roll No : '} ${getRollNo.value}`;
    var setTotalMarks = document.getElementById("totalMarks");
    setTotalMarks.innerHTML = "Total Marks  :  " + ((q + 1) * 10);
    var setObtainMarks = document.getElementById("obtMarks");
    setObtainMarks.innerHTML = "Obtain Marks  :  " + (count * 10);

}



var getInp = document.getElementsByTagName('input');
function validInp() {
    var valid = true;
    for (i = 0; i < 4; i++) {
        if (getInp[i].value == "") {
            valid = false;
            console.log("Empty Input");
        }
    }
    if (valid == true) {
        startQuiz();
    }

}




// Quiz App by QambarAli1








