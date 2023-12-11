
    let score = {
        wins : 0,
        lose:0,
        tie:0
      }
      updateScore(  )
      function playGame(playerMove) {
      console.log(score)
      const computerMove =  pickComputermove();
      let result =  ''
      if (playerMove==='scissors'){
    
        if (computerMove === 'rock'){
          result='You lose';
        }
        else if(computerMove === 'paper'){
          result = 'You win';
        }else if(computerMove === 'scissors'){
          result='Tie';
        }
        
      }else if(playerMove=='rock'){
        if (computerMove === 'rock'){
          result='Tie';
        }
        else if(computerMove === 'paper'){
          result = 'You lose';
        }else if(computerMove === 'scissors'){
          result='You win';
        }
      } 
      else if(playerMove==='paper'){
        if(computerMove === 'rock'){
          result = 'You win'
        }
        else if(computerMove ==='paper'){
          result = 'Tie'
        }
        else if(computerMove === 'scissors'){
          result ='You lose'
        }
      }
      if(result === 'You win'){
        score.wins += 1;
      }
      else if(result === 'You lose'){
        score.lose +=1;
      }else if(result === 'Tie'){
        score.tie +=1
      }
      // localStorage.setItem('score', JSON.stringify(score));
      updateScore()

      document.querySelector('.states').innerHTML =result
      document.querySelector('.players-moves').innerHTML = ` <img class="move-icon" src="assets/${playerMove}-hand.png" alt=""> `
      document.querySelector('.computers-move').innerHTML =`
    <img class="move-icon" src="assets/${computerMove}-hand.png" alt="">`
      
     
      
    }
    function updateScore (){
      
      document.querySelector('.points').innerHTML = `You: ${score.wins} ....... Computer :${score.lose} `;
      gameOver()
    }
    function pickComputermove(){
      let computerMove = '';
      const randomNUmber = Math.random();
      if(randomNUmber>=0 && randomNUmber<1/3){
        computerMove='rock';
      }else if(randomNUmber>=1/3 && randomNUmber<2/3){
        computerMove ='paper'
      }else if(randomNUmber>=2/3 && randomNUmber<1){
        computerMove ='scissors'
      }

      return computerMove;
  
    }
    
 const finalState = document.querySelector(".finalScore")
 const statement = document.querySelector(".statement")
 const playAgain = document.querySelector(".playagain")
 const moveIcon = document.querySelectorAll(".moves-icon")



 function gameOver() {



  if(score.wins>=5){
    statement.innerHTML ="You won the game"
  }
  else if(score.lose>=5){
    statement.innerHTML ="computer won the game"

  }
  if(score.wins >=5 || score.lose>=5){
    playAgain.style.display = "inherit"
    playAgain.addEventListener("click" ,() => {
      location.href ="index.html"
    })
    for(let i = 0; i<moveIcon.length; i++){
      moveIcon[i].style.display = "none";
      console.log(moveIcon[i] )
    }
    
    // 
  }

 }
