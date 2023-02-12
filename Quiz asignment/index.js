const pipes = [
  {
      'que': 'Two pipes A & B can fill the tank in 12 hours and 36 hours respectively. If both the pipes are opened simultaneously, how much time will be required to fill the tank?',
      'a': '9 hours',
      'b': '10 hours',
      'c': '8 hours',
      'd': '11 hours',
      'correct': 'a'
  },

  {
      'que': 'Two pipes can fill a tank in 6 hours and 8 hours respectively while a third pipe empties the full tank in 12 hours. If all the three pipes operate simultaneously, in how much time will the tank be filled?',
      'a': '4 hours',
      'b': '4.8 hours',
      'c': '5 hours',
      'd': '5.8 hours',
      'correct': 'b'
  },

  {
      'que': 'Two pipes can fill a tank in 10 and 14 minutes respectively and a waste pipe can empty 4 gallons per minute. If all the pipes working together can fill the tank in 6 minutes, what is the capacity of the tank?',
      'a': '740 gallons',
      'b': '820 gallons',
      'c': '840 gallons',
      'd': '860 gallons',
      'correct': 'c'
  },

  {
      'que': 'A booster pump can be used to fill as to empty the tank. The capacity of the tank is 1200 m3. The emptying capacity of the tank is 10 m3 per minute higher than its filling capacity and the pump requires 4 minutes lesser to vacant the tank than it requires to fill it. Calculate the filling capacity of the pump?',
      'a': '30',
      'b': '60',
      'c': '40',
      'd': '50',
      'correct': 'd'
  },

  {
      'que': 'An electric pump can fill a tank in 4 hours. Due to leakage in the tank, it took 4(1/2) hrs to fill the tank. If the tank is full, how much time will the leak take to empty the full tank?',
      'a': '36 hours',
      'b': '32 hours',
      'c': '26 hours',
      'd': '22 hours',
      'correct': 'a'
  },

  {
      'que': 'Two pipes fills a cistern in 15 hrs and 20 hrs respectively. The pipes are opened simultaneously and it is observed that it took 26 min more to fill the cistern because of leakage at the bottom. If the cistern is full, then in what time will the leak empty it?',
      'a': '160 hours',
      'b': '180 hours',
      'c': '190 hours',
      'd': '200 hours',
      'correct': 'b'
  },

  {
      'que': 'If two pipes function simultaneously, the reservoir will be filled in 24 hrs. One pipe fills the reservoir 20 hours faster than the other. How many hours does it take for the second pipe to fill the reservoir?',
      'a': '40 hours',
      'b': '50 hours',
      'c': '60 hours',
      'd': '70 hours',
      'correct': 'c'
  },

  {
      'que': 'Two pipes can fill a tank in 8 hrs & 6 hrs respectively. If they are opened on alternate hours and if pipe A gets opened first, then in how many hours, the tank will be full?',
      'a': '4 hours',
      'b': '5 hours',
      'c': '6 hours',
      'd': '7 hours',
      'correct': 'd'
  },

  {
      'que': 'It is observed that the pipe A can fill the tank in 15 hrs and the same tank is filled by pipe B in 20 hrs. The third pipe C can vacant the tank in 25 hrs. If all the pipes get opened initially and after 10 hrs, the pipe C is closed, then how long will it take to fill the tank?',
      'a': '12 hours',
      'b': '11 hours',
      'c': '10 hours',
      'd': '9 hours',
      'correct': 'a'
  },

  {
      'que': ' Two pipes A & B can fill a tank in 5 min & 10 min respectively. Both the pipes are opened together but after 2 min, pipe A is turned off. What is the total time required to fill the tank?',
      'a': '5 min',
      'b': '6 min',
      'c': '7 min',
      'd': '8 min',
      'correct': 'b'
  }

];

const probab = [

  {
      'que': 'Three unbiased coins are tossed. What is the probability of getting at least 2 tails?',
      'a': '0.5',
      'b': '0.4',
      'c': '0.35',
      'd': '0.2',
      'correct': 'a'
  },

  {
      'que': 'Tickets numbered 1 to 50 are mixed and one ticket is drawn at random. Find the probability that the ticket drawn has a number which is a multiple of 4 or 7?',
      'a': '7/25',
      'b': '9/25',
      'c': '8/25',
      'd': '6/25',
      'correct': 'b'
  },

  {
      'que': 'From a pack of 52 cards, one card is drawn at random. Find the probability that the drawn card is a club or a jack?',
      'a': '6/13',
      'b': '5/13',
      'c': '4/13',
      'd': '3/13',
      'correct': 'c'
  },

  {
      'que': 'Two friends A and B apply for a job in the same company. The chances of A getting selected is 2/5 and that of B is 4/7. What is the probability that both of them get selected?',
      'a': '5/35',
      'b': '6/35',
      'c': '7/35',
      'd': '8/35',
      'correct': 'd'
  },

  {
      'que': 'Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?',
      'a': '9/20',
      'b': '11/20',
      'c': '13/20',
      'd': '17/20',
      'correct': 'a'
  },

  {
      'que': 'A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?',
      'a': '8/21',
      'b': '10/21',
      'c': '12/21',
      'd': '14/21',
      'correct': 'b'
  },

  {
      'que': 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
      'a': '2/3',
      'b': '1/5',
      'c': '1/3',
      'd': '2/5',
      'correct': 'c'
  },

  {
      'que': 'What is the probability of getting a sum 9 from two throws of a dice?',
      'a': '2/9',
      'b': '4/9',
      'c': '7/9',
      'd': '1/9',
      'correct': 'd'
  },

  {
      'que': 'Three unbiased coins are tossed. What is the probability of getting at most two heads?',
      'a': '7/8',
      'b': '5/8',
      'c': '3/8',
      'd': '1/8',
      'correct': 'a'
  },

  {
      'que': 'In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?',
      'a': '2/3',
      'b': '1/3',
      'c': '4/5',
      'd': '3/5',
      'correct': 'b'
  }


];

const age = [
  {
      'que': 'Age of Umesh will be 4 times the age of Reena in 6 years from today. If ages of Umesh and Mahesh are 7 times and 6 times the age of Reena respectively, what is present age of Umesh?',
      'a': '42 years',
      'b': '52 years',
      'c': '32 years',
      'd': '62 years',
      'correct': 'a'
  },

  {
      'que': 'Rohans age is five times Ajays and seven-eighteenth of Meenas age. The sum of the ages of all three of them is 132 years. How much younger is Ajay to Meena?',
      'a': '73 years',
      'b': '83 years',
      'c': '93 years',
      'd': '63 years',
      'correct': 'b'
  },

  {
      'que': 'The average age of 10 students and their teacher is 15 years. The average age of the first seven students is 15 yr and that of the last three is 11 yr. What is the teachers age?',
      'a': '37 years',
      'b': '17 years',
      'c': '27 years',
      'd': '37 years',
      'correct': 'c'
  },

  {
      'que': 'Ram and Shyams average age is 65 years. The average age of Ram, Shyam and John is 53 years. What is the age of John?',
      'a': '19 years',
      'b': '39 years',
      'c': '49 years',
      'd': '29 years',
      'correct': 'd'
  },

  {
      'que': 'The present ages of Aman and Nina are 59 and 37 years, respectively. What was the ratio of the ages of Nina and Aman 13 years ago?',
      'a': '12 years',
      'b': '14 years',
      'c': '23 years',
      'd': '20 years',
      'correct': 'a'
  },

  {
      'que': 'Rohan is as much younger than Ajay as he is older than Meena. The sum of ages of Ajay and Meena is 108 years. How old is Rohan?',
      'a': '32 years',
      'b': '52 years',
      'c': '42 years',
      'd': '62 years',
      'correct': 'b'
  },

  {
      'que': 'Average age of a family of 4 members was 19 years, 4 years back. Birth of a new child kept the average age of the family same even today. How old is the child today?',
      'a': '5 years',
      'b': '4 years',
      'c': '3 years',
      'd': '2 years',
      'correct': 'c'
  },

  {
      'que': '12 years ago, age of P was 3 times the age of Q. After 12 years, ratio of ages of Q to P will be 2:3. What is the present age of P?',
      'a': '30 years',
      'b': '46 years',
      'c': '26 years',
      'd': '36 years',
      'correct': 'd'
  },

  {
      'que': 'The present ages of A and B are 42 and 36 years, respectively. After K years, the ratio of ages of B to A will be 15:17. What is value of K?',
      'a': '9 years',
      'b': '8 years',
      'c': '7 years',
      'd': '6 years',
      'correct': 'a'
  },

  {
      'que': 'A father is 4 times as old as his son. 8 years hence, the ratio of father’s age to the son’s age will be 20:7. What is the sum of their present ages?',
      'a': '55 years',
      'b': '65 years',
      'c': '75 years',
      'd': '45 years',
      'correct': 'b'
  }
];

const proflos = [

  {
      'que': 'A shopkeeper sells an article for Rs. 200 with a loss of Rs. 20 %. Find the cost price of the article?',
      'a': '250',
      'b': '200',
      'c': '240',
      'd': '230',
      'correct': 'a'
  },

  {
      'que': 'A trader expects a gain of 15 % on his cost price. If in a week his sale is of Rs. 580, then what is his profit?',
      'a': '72.50',
      'b': '75.65',
      'c': '76.70',
      'd': '77.50',
      'correct': 'b'
  },

  {
      'que': 'If a boy sells a book for Rs. 450 he gets a loss of 10 %, then find cost price. To gain 10 %, what should be the selling price?',
      'a': '470 , 470',
      'b': '480 , 480',
      'c': '500 , 500',
      'd': '490 , 490',
      'correct': 'c'
  },

  {
      'que': 'A merchant sells 30 metres of cloth and gains selling price of 10 metres. Find the gain percent?',
      'a': '30%',
      'b': '40%',
      'c': '60%',
      'd': '50%',
      'correct': 'd'
  },

  {
      'que': 'A merchant sells 30 metres of cloth and gains selling price of 10 metres. Find the gain percent?',
      'a': '20%',
      'b': '10%',
      'c': '15%',
      'd': '30%',
      'correct': 'a'
  },

  {
      'que': ' The selling price of 40 apples is equal to cost price of 35 apples. Find the profit or loss obtained?',
      'a': 'Loss of 14.5%',
      'b': 'Loss of 12.5%',
      'c': 'Profit of 12.5%',
      'd': 'Profit of 14.5%',
      'correct': 'b'
  },

  {
      'que': 'A man purchased two plots for Rs. 5,00,000. On one he gains 15 % while on the other he losses 15% Find how much does he gain or lose in the transaction?',
      'a': '3.00%',
      'b': '2.50%',
      'c': '2.25%',
      'd': '2.15%',
      'correct': 'c'
  },

  {
      'que': 'A boy bought camel and carriage for Rs. 5000. He sells the camel at a gain of 20% and the carriage at a loss of 10%. If he gains 3% on the whole, then find the cost of the camel.?',
      'a': '2140',
      'b': '2150',
      'c': '2160',
      'd': '2170',
      'correct': 'd'
  },

  {
      'que': 'A man sells one camera A for Rs. 7500 at a gain of 20% and another camera B for Rs. 8550 at a loss of 5%. Find his total loss or gain%?',
      'a': '5.2%',
      'b': '6.0%',
      'c': '6.2%',
      'd': '6.5%',
      'correct': 'a'
  },

  {
      'que': 'A shopkeeper sells his goods at cost price but uses a weight of 970 grams for a kg. weight.What is his gain percent?',
      'a': '3.00%',
      'b': '3.09%',
      'c': '4.10%',
      'd': '4.15%',
      'correct': 'b'
  }


];

// Profit and Loss Quiz Start----------------

function prolosquiz() {

  // Function of Timer for Quiz

  function starttimer(time) {

      counter = setInterval(timer, 1000)
      function timer() {
          const timerElement = document.getElementById('timer');
          timerElement.innerHTML = 'Time Left : ' + time + ' seconds';
          time--;
          if (time < 0) {
              clearInterval(counter);
              index++;
              loadQuestion();
              starttimer(timevalue);


          }
      }
  }

  // Function to Count Score

  function userscore() {
      var score = document.getElementById('score');
      score = correct;
      score = document.getElementById('score').innerHTML = 'Score : ' + score;

  }

  // All required variables are declared below

  let index = 0;
  let correct = 0;
  let incorrect = 0;
  let total = proflos.length;
  let timevalue = 60;
  let counter = 0;
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  starttimer(60);

  // To get Questions and Options from Above Declared Array
  // And Load it to the Quiz Page

  const loadQuestion = () => {
      if (total === index) {
          return quizEnd()
      }
      reset();
      const data = proflos[index]
      questionBox.innerHTML = `${index + 1}) ${data.que}`
      allInputs[0].nextElementSibling.innerText = data.a
      allInputs[1].nextElementSibling.innerText = data.b
      allInputs[2].nextElementSibling.innerText = data.c
      allInputs[3].nextElementSibling.innerText = data.d
  }

  // when Next Question Button is Clicked
  // Next Question is Displayed

  document.querySelector("#submit").addEventListener(
      "click",
      function () {

          const data = proflos[index]
          const ans = getAnswer();
          if (ans === data.correct) {
              correct++;
              userscore();
          } else {
              incorrect++;
          }
          index++;
          clearInterval(counter);
          starttimer(timevalue);
          loadQuestion();
      }
  )

  // Get correct answer

  const getAnswer = () => {
      let ans;

      allInputs.forEach(
          (inputEl) => {
              if (inputEl.checked) {    // checked is a keyword
                  ans = inputEl.value;
              }
          }
      )
      return ans;
  }

  // Reset Function

  const reset = () => {
      allInputs.forEach(
          (inputEl) => {
              inputEl.checked = false;
          }
      )
  }

  // Function to end Quiz and Display Result

  const quizEnd = () => {
      // console.log(document.getElementsByClassName("container"));
      let finish = document.getElementById('timer')
      finish.style.display = "none";
      score.style.display = "none";

      document.getElementsByClassName("container")[0].innerHTML = `
          <div class="col">
          <h3 class="w-100">Your Result is as Follows.</h3>
          <h3 class="w-100">Total Questions : ${total} </h3>
          <h3 class="w-100">Correct : ${correct} </h3>
          <h3 class="w-100">Incorrect : ${total - correct} </h3>
          
          </div>
      `
  }


  loadQuestion(index);


}

// Profit and Loss Quiz End------------------

// Pipes and Cistern Quiz Start--------------

function pipequiz() {

  // Function of Timer for Quiz

  function starttimer(time) {

      counter = setInterval(timer, 1000)
      function timer() {
          const timerElement = document.getElementById('timer');
          timerElement.innerHTML = 'Time Left : ' + time + ' seconds';
          time--;
          if (time < 0) {
              clearInterval(counter);
              index++;
              loadQuestion()
              starttimer(timevalue);


          }
      }
  }


  // All required variables are declared below

  let index = 0;
  let correct = 0,
      incorrect = 0,
      total = pipe.length;
  let timevalue = 60;
  let counter = 0
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  starttimer(60);

  // Function to Count Score

  function userscore() {
      var score = document.getElementById('score');
      score = correct;
      score = document.getElementById('score').innerHTML = 'Score : ' + score;

  }

  // To get Questions and Options from Above Declared Array
  // And Load it to the Quiz Page

  const loadQuestion = () => {
      if (total === index) {
          return quizEnd()
      }
      reset()
      const data = pipe[index]
      questionBox.innerHTML = `${index + 1}) ${data.que}`
      allInputs[0].nextElementSibling.innerText = data.a
      allInputs[1].nextElementSibling.innerText = data.b
      allInputs[2].nextElementSibling.innerText = data.c
      allInputs[3].nextElementSibling.innerText = data.d
  }

  // As as when Next Question Button is Clicked
  // Next Question is Displayed

  document.querySelector("#submit").addEventListener(
      "click",
      function () {

          const data = pipe[index]
          const ans = getAnswer()
          if (ans === data.correct) {
              correct++;
              userscore();
          } else {
              incorrect++;
          }
          index++;
          clearInterval(counter);
          starttimer(timevalue);
          loadQuestion()
      }
  )

  // Get correct answer

  const getAnswer = () => {
      let ans;
      allInputs.forEach(
          (inputEl) => {
              if (inputEl.checked) {
                  ans = inputEl.value;

              }
          }
      )

      return ans;
  }

  // Reset Function

  const reset = () => {
      allInputs.forEach(
          (inputEl) => {
              inputEl.checked = false;
          }
      )
  }

  // Function to end Quiz and Display Result

  const quizEnd = () => {

      // console.log(document.getElementsByClassName("container"));
      let finish = document.getElementById('timer')
      finish.style.display = "none";
      score.style.display = "none";
      document.getElementsByClassName("container")[0].innerHTML = `
          <div class="col">
          <h3 class="w-100">Your Result is as Follows.</h3>
          <h3 class="w-100">Total Questions : ${total} </h3>
          <h3 class="w-100">Correct : ${correct} </h3>
          <h3 class="w-100">Incorrect : ${total - correct} </h3>
          
          </div>
      `

  }
  loadQuestion(index);
}

// Pipes and Cistern Quiz End--------------

// Probability Quiz Start------------

function probquiz() {

  // Function of Timer for Quiz

  function starttimer(time) {

      counter = setInterval(timer, 1000)
      function timer() {
          const timerElement = document.getElementById('timer');
          timerElement.innerHTML = 'Time Left : ' + time + ' seconds';
          time--;
          if (time < 0) {
              clearInterval(counter);
              index++;
              loadQuestion()
              starttimer(timevalue);


          }
      }
  }

  // Function to Count Score

  function userscore() {
      var score = document.getElementById('score');
      score = correct;
      score = document.getElementById('score').innerHTML = 'Score : ' + score;

  }


  // All required variables are declared below

  let index = 0;
  let correct = 0,
      incorrect = 0,
      total = probab.length;
  let timevalue = 60;
  let counter = 0
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  starttimer(60);

  // To get Questions and Options from Above Declared Array
  // And Load it to the Quiz Page

  const loadQuestion = () => {
      if (total === index) {
          return quizEnd()
      }
      reset()
      const data = probab[index]
      questionBox.innerHTML = `${index + 1}) ${data.que}`
      allInputs[0].nextElementSibling.innerText = data.a
      allInputs[1].nextElementSibling.innerText = data.b
      allInputs[2].nextElementSibling.innerText = data.c
      allInputs[3].nextElementSibling.innerText = data.d
  }

  // As as when Next Question Button is Clicked
  // Next Question is Displayed

  document.querySelector("#submit").addEventListener(
      "click",
      function () {

          const data = probab[index]
          const ans = getAnswer()
          if (ans === data.correct) {
              correct++;
              userscore();
          } else {
              incorrect++;
          }
          index++;
          clearInterval(counter);
          starttimer(timevalue);
          loadQuestion()
      }
  )

  // Get correct answer

  const getAnswer = () => {
      let ans;
      allInputs.forEach(
          (inputEl) => {
              if (inputEl.checked) {
                  ans = inputEl.value;
              }
          }
      )
      return ans;
  }

  // Reset Function

  const reset = () => {
      allInputs.forEach(
          (inputEl) => {
              inputEl.checked = false;
          }
      )
  }

  // Function to end Quiz and Display Result

  const quizEnd = () => {
      // console.log(document.getElementsByClassName("container"));
      let finish = document.getElementById('timer')
      finish.style.display = "none";
      score.style.display = "none";
      document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col">
      <h3 class="w-100">Your Result is as Follows.</h3> 
      <h3 class="w-100">Total Questions : ${total} </h3>
      <h3 class="w-100">Correct : ${correct} </h3>
      <h3 class="w-100">Incorrect : ${total - correct} </h3>
       
      </div>
  `
  }
  loadQuestion(index);

}

// Probability Quiz End-----------


// Age Quiz Start--------------

function agequiz() {

  // Function of Timer for Quiz

  function starttimer(time) {

      counter = setInterval(timer, 1000)
      function timer() {
          const timerElement = document.getElementById('timer');
          timerElement.innerHTML = 'Time Left : ' + time + ' seconds';
          time--;
          if (time < 0) {
              clearInterval(counter);
              index++;
              loadQuestion()
              starttimer(timevalue);

          }
      }
  }

  // Function to count Score

  function userscore() {
      var score = document.getElementById('score');
      score = correct;
      document.getElementById('score').innerHTML = 'Score : ' + score;

  }
  
  // All required variables are declared below

  let index = 0;
  let correct = 0,
      incorrect = 0,
      total = age.length;
  let timevalue = 60;
  let counter = 0
  let questionBox = document.getElementById("questionBox");
  let allInputs = document.querySelectorAll("input[type='radio']")
  starttimer(60);

  // To get Questions and Options from Above Declared Array
  // And Load it to the Quiz Page

  const loadQuestion = () => {
      if (total === index) {
          return quizEnd();
      }
      reset()
      const data = age[index]
      questionBox.innerHTML = `${index + 1}) ${data.que}`
      allInputs[0].nextElementSibling.innerText = data.a
      allInputs[1].nextElementSibling.innerText = data.b
      allInputs[2].nextElementSibling.innerText = data.c
      allInputs[3].nextElementSibling.innerText = data.d
  }

  // As as when Next Question Button is Clicked
  // Next Question is Displayed

  document.querySelector("#submit").addEventListener(
      "click",
      function () {

          const data = age[index]
          const ans = getAnswer()
          if (ans === data.correct) {
              // color change logic to be applied here
              correct++;
              userscore();
          } else {
              incorrect++;
          }
          index++;
          clearInterval(counter);
          starttimer(timevalue);
          loadQuestion()
      }
  )
   
  // Get correct answer

  const getAnswer = () => {
      let ans;
      allInputs.forEach(
          (inputEl) => {
              if (inputEl.checked) {
                  ans = inputEl.value;

              }
          }
      )
      return ans;
  }

  // Reset Function

  const reset = () => {
      allInputs.forEach(
          (inputEl) => {
              inputEl.checked = false;
          }
      )
  }

  // Function to end Quiz and Display Result
  const quizEnd = () => {
      // console.log(document.getElementsByClassName("container"))
      let finish = document.getElementById('timer')
      finish.style.display = "none";
      score.style.display = "none";
      document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col">
          <h3 class="w-100">Your Result is as Follows.</h3>
          <h3 class="w-100">Total Questions : ${total} </h3>
          <h3 class="w-100">Correct : ${correct} </h3>
          <h3 class="w-100">Incorrect : ${total - correct} </h3>
          
      </div>
  `
  }
  loadQuestion(index);
}

// Age Quiz End--------------------




// Initial interface - Quiz and Result Pages are Hidden

const select_category = document.getElementById('select_category');
select_category.style.display = "none";

const category = document.getElementById('category')
category.style.display = "none";

const bottom = document.getElementById('bottom')
bottom.style.display = "none";




// Event Given to Enter Button to Show Quiz Category 
const enter = document.getElementById('enter');
enter.addEventListener('click',
  function () {
      let user = document.getElementById('userdata').value
      if (user == '') {
          alert('Please Enter Name...');

      }
      else {

          let frontpage = document.getElementById('front')
          frontpage.style.display = "none";
          select_category.style.display = "block";



      }
  }
)




// Quiz page open after clicking on btn

const btn1 = document.getElementById('pipes-cisterns')
btn1.addEventListener('click',
  function () {

      category.style.display = "block";
      bottom.style.display = "block";
      select_category.style.display = "none";

  }
)


const btn2 = document.getElementById('probability')
btn2.addEventListener('click',
  function () {

      category.style.display = "block";
      bottom.style.display = "block";
      select_category.style.display = "none";

  }
)

const btn3 = document.getElementById('problems-on-age')
btn3.addEventListener('click',
  function () {

      category.style.display = "block";
      bottom.style.display = "block";
      select_category.style.display = "none";

  }

)
const btn4 = document.getElementById('profit-loss')
btn4.addEventListener('click',
  function () {

      category.style.display = "block";
      bottom.style.display = "block";
      select_category.style.display = "none";

  }
)





// Added Exit Quiz Function
function shut_down() {

  let finish = document.getElementById('timer')
  finish.style.display = "none";
  score.style.display = "none";
  document.getElementsByClassName("container")[0].innerHTML = `
      <div class="col" style = "color : red">
          <h3 class="w-100">Thank you for taking this Quiz.</h3>
  </div>`
}












































































































