trivia ={
    questions = [
            "What is the popular game in which users play soccer with cars?",
            "What is the name of the final course of all 'Mario Kart' video games?",
            "What is the highest grossing game of all time?",
            "‘Kingdom Of Hyrule’ is the main setting for which classic video game franchise?",
            "Who is the most famous video game character of all time?",
            "The most popular sports video game of all time is named after which former professional coach?",
            "What is the name of the circular object used to collect Pokémon?",
            "How do you make obsidian in Minecraft?"

        ],
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
            },
            {
                "Xenoblade": false,
                "The legend of zelda": true,
                "League of legends": false
            },
            {
                "Mario": true,
                "Sonic": false,
                "Link": false
            },
            {
                "John Madden": true,
                "Fifa": false,
                "NBA 2K": false
            },
            {
                "Catch Ball": false,
                "Pokeball": true,
                "Pokemonball": false
            },
            {
                "Mixing lava with grass": false,
                "Mixing sand and water": false,
                "Mixing water with lava": true
            }



    ]
}
  
function loadQuestions(){
    var arr = [];
    var ans = [];
    for (let i = 0; i < 5; i++){
        let Num = Math.floor(Math.random() * 8);
        arr.push(trivia.questions[Num]);
        ans.push(trivia.answers[Num]);
    }
    for (let i = 0; i < 5; i++){
        let option = document.getElementById('option');
        let p = document.createElement("p");
        p.innerHTML = (i+1)+". "+fiveQs[i];
        p.classList.add('question')
        option.appendChild(p);
        let op = fiveCs[i];;
        let options = Object.keys(op);
        let correct = Object.values(op)
        let div = document.createElement("div");
        div.classList.add('choices_container');
        for (let j = 0; j < options.length; j++) {
            let input = document.createElement("input");
            let label = document.createElement("label");
            option.appendChild(div);
            input.setAttribute("type", "radio");
            input.setAttribute("name", "option"+i);
            input.setAttribute("id", options[j]);
            input.setAttribute("value", correct[j]);
            label.setAttribute("for", options[j]);
            label.innerHTML = options[j];
            div.appendChild(input);
            div.appendChild(label);
        }
        option.appendChild(div);
    }
}

function checkAnswers(){
    let score = 0;
    let correcAnswers = [];
    let choice = document.getElementsByTagName('input');
    for (let k = 0; k < choice.length; k++){
        if(choice[k].value == 'true'){
            correcAnswers.push(choice[k].id);
        }
    }
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            let answer = choice[i].value;
            if (answer == "true"){
                score = score + 20;
                for (let j = 0; j <= correcAnswers.length; j++)
                {
                    if (correcAnswers[j] == choice[i].id){
                        correcAnswers.splice(j, 1);
                    }
                }
                if (score >= 100){
                    break;

                }
            }
            else {
                score = score;
                
            }
        }
    }
    let div1 = document.getElementById('score');
    div1.classList.add('score_container');
    let h2 = document.createElement('h2');
    h2.innerHTML = "You got "+score+"!";
    //h2.classList.add('score');
    div1.appendChild(h2);
    console.log(correcAnswers);
    for (let y = 0; y < correcAnswers.length; y ++){
        let p = document.createElement('p');
        p.classList.add('wrong');
        p.innerHTML = "Correct answer: "+correcAnswers[y];
        div1.appendChild(p);
    }
}