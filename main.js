trivia = {
    questions: [
        "What is the popular game in which users play soccer with cars?",
        "What is the name of the final course of all 'Mario Kart' video games?",
        "What is the highest grossing game of all time?",
        "[Kingdom Of Hyrule] is the main setting for which classic video game franchise?",
        "Who is the most famous video game character of all time?",
        "The most popular sports video game of all time is named after which former professional coach?",
        "What is the name of the circular object used to collect Pokemon?",
        "How do you make obsidian in Minecraft?",
        "What's the best selling video game of all time?",
        "What kind of food was the character Pac Man modelled on?",
        "What's the best selling handheld gaming system to date?",
        "What is the name of the fictional world that 'Super Mario Bros' is set in?",
        "Who is the first character you defeat in Super Mario?",
        "From which game is (summoners rift) from?",
        "Who is Mario's brother?",
        "What is the name of Charmander's (pokemon) final evolution?",
        "What was the first video game console to be offered by an American company since Atari?",
        " What was the first mobile phone game?",
        "Which famous video game franchise is the game 'V-Bucks' from?",
        "Which French video game company is publishing the 'Far Cry' series?"


    ],
    answers : [
        {
            "Rocket League" : true,
            "Fifa 22": false,
            "Forza Horizon 5": false,
            "Need for speed": false
        },
        {
            "DK jungle": false,
            "Rainbow Road": true,
            "Moo Moo Meadows": false,
            "Luigi's mansion": false
        },
        {
            "Pokemon": true,
            "GTA": false,
            "COD": false,
            "The legends of Zelda": false
        },
        {
            "Xenoblade": false,
            "The legend of zelda": true,
            "League of legends": false,
            "Kingdom Hearts": false
        },
        {
            "Mario": true,
            "Sonic": false,
            "Link": false,
            "Luigi": false
        },
        {
            "John Madden": true,
            "Fifa": false,
            "NBA 2K": false,
            "Tony Hawk": false
        },
        {
            "Catch Ball": false,
            "Pokeball": true,
            "Pokemonball": false,
            "Super catch ball": false
        },
        {
            "Mixing lava with grass": false,
            "Mixing sand and water": false,
            "Mixing water with lava": true,
            "Mixing torch and glass": false
        },
        {
            "Call of duty MW2": false,
            "Minecraft": true,
            "Mario party": false,
            "Mario kart": false
        },
        {
            "Cheese": false,
            "Pizza": true,
            "Pie": false,
            "Cookie": false
        },
        {
            "Nintendo 3DS": false,
            "Gameboy color": false,
            "Nintendo DS": true,
            "Sony psp": false
        },
        {
            "Mushroom Kingdom": true,
            "Princess world": false,
            "Koopa's world": false,
            "Mario bro's world": false        
        },
        {
            "Bowser JR.": false,
            "Bowser": true,
            "Koopa Troopa": false,
            "Princess peach": false
        },
        {
            "League of legends": true,
            "World of Warcraft": false,
            "Dota": false,
            "Overwatch": false
        },
        {
            "Pikachu": false,
            "Bowser": false,
            "Luigi": true,
            "Toad": false
        },
        {
            "Blastoise": false,
            "Venusaur": false,
            "Raichu": false,
            "Charizard": true
        },
        {
            "PS3": false,
            "Nintendo wii": false,
            "PC": false,
            "XBOX": true
        },
        {
            "Pong": false,
            "Hockey": false,
            "Ping pong": false,
            "Tetris": true
        },
        {
            "Warzone": false,
            "Destiny": false,
            "Splatoon": false,
            "Fortnite": true
        },
        {
            "Samsung": false,
            "Sony": false,
            "Microsoft": false,
            "Ubisoft": true
        }
    ]
}
  
function displayQuestions(){
    var arr = [];
    var ans = [];
    for (let i = 0; i < 5; i++){
        let Num = Math.floor(Math.random() * 20);
        arr.push(trivia.questions[Num]);
        ans.push(trivia.answers[Num]);
    }
    for (let i = 0; i < 5; i++){
        let option = document.getElementById('option');
        let p = document.createElement("p");
        p.innerHTML = (i+1)+". "+arr[i];
        p.classList.add('question')
        option.appendChild(p);
        let op = ans[i];;
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

function grade(){
    let score = 0;
    let correcAns = [];
    let choice = document.getElementsByTagName('input');
    for (let i = 0; i < choice.length; i++){
        if(choice[i].value == 'true'){
            correcAns.push(choice[i].id);
        }
    }
    for (let i = 0; i < choice.length; i++){
        if (choice[i].checked){
            let answer = choice[i].value;
            if (answer == "true"){
                score = score + 20;
                for (let j = 0; j <= correcAns.length; j++)
                {
                    if (correcAns[j] == choice[i].id){
                        correcAns.splice(j, 1);
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
    let mydiv1 = document.getElementById('score');
        mydiv1.classList.add('score_container');
    let myh2 = document.createElement('h2');
        myh2.innerHTML = "Your final score is: "+score+"/100... Congratulations!";
    mydiv1.appendChild(myh2);
    for (let i = 0; i < correcAns.length; i++){
        let p = document.createElement('p');
        p.classList.add('wrong');
        p.innerHTML = "Correct answer: "+correcAns[i];
        mydiv1.appendChild(p);
    }
}