	const guessInput = document.getElementById("inputfield")
	const checkButton = document.getElementById("btn_check")
	const answer = document.getElementById("result")

const randomNumber = 87

checkButton.addEventListener('click', () => {
    const guess = guessInput.value
  if (parseInt(guess) === randomNumber){
      alert ('congratulation you guess right')
  }else {
    alert ('your answer is wrong please try again')
  }
})

 

