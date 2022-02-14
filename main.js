var questions = [
    {
      "number" : 1,
      "question": "What is the popular game in which users play soccer with cars?",
      "options": ["Fifa 2022", "Rocket League", "Forza Horizon"],
      "answer": "Rocker League"
    },
    {
      "number":2,
      "questions": "What is the name of the final course of all 'Mario Kart' video games?",
      "options": ["Rainbow Road", "DK jungle", "Moo Moo Meadows"],
      "answer": "Rainbow Road"
    },
    {
      "number":3,
      "questions": "What is the highest grossing game of all time?",
      "options": ["GTA V", "Pokemon", "Call of Duty BO2"],
      "answer": "Pokemon"
    }
  ]
  
function Questions() {
var Question =
    questions.map(questions =>  
    $(`<label>${questions.text}</label>
        <select>
        ${questions.options.map( option =>
        `<option>${option}</option>`)}    
        </select><br>`
        )
    )
    $("div#questionGroup").append(Question)
}

function grade (){
    
}
