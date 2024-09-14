

let value=document.getElementsByClassName('val');
let values=Array.from(value); // we obtain array of the boxes
let tracker='O'; // variable to determine the value
let board=document.querySelector('.container');
let restart=document.querySelector('.restart');
let body=document.getElementsByTagName('body')[0];
let counter=0;

//reset function
function reset(){
    for(let i=0;i<values.length;i++){
        values[i].textContent ='';
    }
    tracker='O';
    counter=0;
}


//0- function to check the winner 
let win_check=function(val){
    if((values[0].textContent === val && values[1].textContent === val && values[2].textContent === val) ||
    (values[3].textContent === val && values[4].textContent === val && values[5].textContent === val) ||
    (values[6].textContent === val && values[7].textContent === val && values[8].textContent === val) ||
    (values[0].textContent === val && values[3].textContent === val && values[6].textContent === val) ||
    (values[1].textContent === val && values[4].textContent === val && values[7].textContent === val) ||
    (values[2].textContent === val && values[5].textContent === val && values[8].textContent === val) ||
    (values[0].textContent === val && values[4].textContent === val && values[8].textContent === val) ||
    (values[2].textContent === val && values[4].textContent === val && values[6].textContent === val)){
        
        return true;
    }
    else{
        return false;
    }
}

//check draw
function check_draw(cnt){
    return cnt===9;
}


//1- restart the game
let restartGame=function(){
    body.classList.remove('hide');
    for(let i=0;i<values.length;i++){
        values[i].textContent='';
    }
    let winnerBoard = document.querySelector('.win_board');
    if (winnerBoard) {
        winnerBoard.remove();
        tracker='O';
        counter=0;
    }
}


//display the winner
var display_winner=function(val){
    board.classList.add('hide');// hide the game board
    restart.classList.add('hide');

    let winner_board=document.createElement('div');// element to display the winner
    winner_board.classList.add('win_board');//the container class
    let winneris=document.createElement('div');
    winneris.classList.add('winis');//class of the elemetn that shows the winner
    let newGame=document.createElement('div');
    newGame.classList.add('new'); //class of new game button
    //setting the values
    winneris.textContent=`${val} !!`;
    newGame.textContent='New Game';
    //append the elements to html code
    winner_board.appendChild(winneris);
    winner_board.appendChild(newGame);
    body.appendChild(winner_board);
    //when clicking on newGame
    newGame.addEventListener('click',gameNew);
}


//function for newGame

function gameNew(){
    board.classList.remove('hide');
    restart.classList.remove('hide');
    let winnerBoard = document.querySelector('.win_board');
    if (winnerBoard) {
        winnerBoard.remove();
    }
    reset();
    tracker='O';
}




//3- display the value when clicking on the screen (the listener)
for(let i=0;i<values.length;i++){
    values[i].addEventListener('click',function(){
        if(this.textContent===''){
            if(tracker==='O'){
                this.textContent='X';
                tracker='X';
            }
            else{
                this.textContent='O';
                tracker='O';
            }

        }
        counter++;
        //checking for winner
        if(win_check('X')===true){
             display_winner("'X' wins");
        }
        else if(win_check('O')==true){
             display_winner("'O' wins");
        }
        //checking for draw
        else{
            if(check_draw(counter)){
                display_winner('Tie');
            }
        }
        
        

    })
    
}


//when clicking on restart
restart.addEventListener('click',restartGame);








