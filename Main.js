function Add_User() {
    Player1_Name = document.getElementById("player1_name_input").value;
    Player2_Name = document.getElementById("player1_name_input").value;

    localStorage.setItem("Player-1_Name", Player1_Name);
    localStorage.setItem("Player-2_Name", Player2_Name);

    window.location = "Quiz.html";
}
Player1_Name = document.getElementById("player1_name_input").value;
Player2_Name = document.getElementById("player1_name_input").value;

Player1_score = 0;
Player2_score = 0;

document.getElementById("player1_Name").innerHTML = Player1_Name + " : ";
document.getElementById("player1_Name").innerHTML = Player1_Name + " : ";

document.getElementById("Player1_Score").innerHTML = Player1_score;
document.getElementById("Player1_Score").innerHTML = Player1_score;

document.getElementById("Player_Question").innerHTML = "Question Turn - " + Player1_Name;
document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + Player2_Name;

function send() {
    Number-1 = document.getElementById("Number1_header").value;
    Number-2 = document.getElementById("Number1_header").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + Number-1 + "X" + Number-2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number-1").value = "";
    document.getElementById("Number-2").value = "";
}

question_turn = "Player-1";
answer_turn = "Player-2";


function check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
        if (answer_turn == "Player-1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = Player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = Player2_score;
        }
    }

    if (question_turn == "Player-1") {
        question_turn = "Player-2";
        document.getElementById("Player_Question").innerHTML = "Question Turn - " + Player2_Name;
    } else {
        question_turn = "Player-1";
        document.getElementById("Player_Answer").innerHTML = "Question Turn - " + Player1_Name;
    }
}
