const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  //check answers
  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });
  //scroll to top
  scrollTo(0, 0);

  //showing the score
  result.classList.remove('d-none');
  //   result.querySelector('span').textContent = `${score}%`;

  //animate the score
  let output = 0;
  const counter = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(counter);
    } else {
      output++;
    }
  }, 30);
});
console.log(window);
