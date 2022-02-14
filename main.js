questions = [
      "What is the popular game in which users play soccer with cars?",
      "What is the name of the final course of all 'Mario Kart' video games?",
      "What is the highest grossing game of all time?"
  ]
answers = [
    {
        "Rocket League" : true,
        "Fifa 22": false,
        "Forza Horizon 5": false
    },
    {
        "DK jungle": false,
        "Rainbow Road": true,
        "Moo Moo Meadows": false,
    },
    {
        "Pokemon": true,
        "GTA V": false,
        "COD BO2": false
    }
]
  
function displayQuestions() {
    var arr = []
    var res = []
    for (let i = 0; i < 5; i++){
        arr.push(questions[i]);
        res.push(answers[i]);
    }
    for (let i = 0; i < 5; i++){
        let option = document.getElementById('option');
        let p = document.createElement("p");
        p.innerHTML = (i+1)+"."+arr[i];
        p.classList.add('question')
        option.appendChild(p);
        let op = res[1];
        let options = Object.keys(op);
        let correct = Object.values(op);
        let div = document.createElement("div");
        div.classList.add("option_container");
        for (let j = 0; j<options.length; j++){
            let input = document.createElement("input");
            let label = document.createElement("label");
            option.appendChild(div);
            input.setAttribute("type", "radio");
            input.setAttribute("name", "option"+i);
            input.setAttribute("name", options[j]);
            input.setAttribute("id", correct[j]);
            input.setAttribute("value", correct[j]);
            label.setAttribute("for", options[j]);
            label.innerHTML = options[j];
            div.appendChild(input);
            div.appendChild(label);
        }
        option.appendChild(div);
    }
}

function grade (){
    let score = 0
    let correctAns = [];
    let choice = document.getElementsByTagName('input');
    for (let n = 0; n < choice.length; n++){
        if (choice[i].checked){
            score = score + 10;
            for (let j = 0; j <= correctAns.push(choice[n].id));
        }
    }
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            let ans = choice[i].value;
            if (ans == "true"){
                score = score + 10;
                for (let j = 0; j<= correctAns.length; j++){
                    if (correctAns[j] == choice[i].id){
                        correctAns.splice(j, 1)
                    }
                }
                if (score >= 100){
                    break;
                }
            }
            else{
                score = score;
            }
        }
    }
    let div1 = document.createElement.getElementById('score');
    div1.classList.add('score_container');
    let h2 = document.createElement('h2');
    h2.innerHTML = "Your score is"+score;
    div1.appendChild(h2);
    console.log(correctAns);
    for (let i = 0; i < correctAns.length; i++){
        let p = document.createElement('p');
        p.classList.add ('Wrong');
        p.innerHTML = "Correct answer: "+correctAns[i];
        div1.appendChild(p);
    }
}
