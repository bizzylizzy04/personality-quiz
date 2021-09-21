import React, { useState } from "react";
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'Pick a city',
      answerOptions: [
        { num: 0, answerText: 'Los Angeles' },
        { num: 1, answerText: 'New Orleans' },
        { num: 2, answerText: 'New York' },
        { num: 3, answerText: 'Chicago' },
        { num: 4, answerText: 'Seattle' },
      ],
    },
    {
      questionText: 'What is your favorite season?',
      answerOptions: [
        { num: 0, answerText: 'Spring' },
        { num: 1, answerText: 'Summer' },
        { num: 2, answerText: 'Fall' },
        { num: 3, answerText: 'Winter' },
      ],
    },
    {
      questionText: 'What is your biggest pet peeve?',
      answerOptions: [
        { num: 0, answerText: 'Loud chewers' },
        { num: 1, answerText: 'Slow walkers' },
        { num: 2, answerText: 'Being interrupted' },
        { num: 3, answerText: 'People clicking their pens' },
      ],
    },
    {
      questionText: 'How would you kill your victims?',
      answerOptions: [
        { num: 0, answerText: 'Stabbing' },
        { num: 1, answerText: 'Torture' },
        { num: 2, answerText: 'Shooting' },
        { num: 3, answerText: 'Strangling' },
        { num: 4, answerText: 'Bludgeoning' },
      ],
    },
    {
      questionText: 'Pick a college major',
      answerOptions: [
        { num: 0, answerText: 'Business' },
        { num: 1, answerText: 'Pre-Med' },
        { num: 2, answerText: 'History' },
        { num: 3, answerText: 'Music' },
        { num: 4, answerText: 'Pre-Law' },
      ],
    },
    {
      questionText: 'If you were arrested for murder, you would:',
      answerOptions: [
        { num: 0, answerText: 'Plead guilty' },
        { num: 1, answerText: 'Plead not guilty' },
        { num: 2, answerText: 'Plead guilty but claim self defense' },
        { num: 3, answerText: 'Plead not guilty by reason of insanity' },
        { num: 4, answerText: 'Flee the country' },
      ],
    },
    {
      questionText: 'What is your best quality?',
      answerOptions: [
        { num: 0, answerText: 'Intelligence' },
        { num: 1, answerText: 'Passion' },
        { num: 2, answerText: 'Leadership skills' },
        { num: 3, answerText: 'Free spirit' },
        { num: 4, answerText: 'Charming personality' },
      ],
    },
    {
      questionText: 'If you killed someone, what would you do with the body?',
      answerOptions: [
        { num: 0, answerText: 'Hide it in my home' },
        { num: 1, answerText: 'Leave it at the crime scene' },
        { num: 2, answerText: 'Cut it up and hide the pieces in my home' },
        { num: 3, answerText: 'Dump it far from my home' 
      },
      ],
    },
  ];

  const serialKillerOptions = [
    {
      num: 0,
      image: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Manson1968.jpg/440px-Manson1968.jpg" alt="" className="photo" />,
      serialKillerInfo:
        'You got... Charles Manson! In the late 1960s, Manson led a commune known as the Manson Family in a murder spree in the California desert. Manson believed that there would be an apocalyptic war of the races, known as Helter Skelter - the name was taken from a Beatles song. Manson was convicted of murder and conspiracy to commit murder in 1971 and was sentenced to death. His sentence was reduced to life in prison when California temporarily eliminated the death penalty in 1972. Though the death penalty has since been reinstated, Manson remains incarcerated at Corcoran State Prison.',
    },
    {
      num: 1,
      image: <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE1ODA0OTcxNTk5NzU4ODYx/jeffrey-dahmer-9264755-1-402.jpg" alt="" className="photo" />,
      serialKillerInfo:
        'You got... Jeffrey Dahmer! Between 1978 and 1991, Dahmer killed, raped, and dismembered 17 men and boys. When his home was searched by police, they found evidence of cannibalism, necrophilia, and preserving of human remains. In 1992, Dahmer was convicted of 16 murders and was sentenced to 16 consecutive life terms in prison. He died in 1994 when he was killed by a fellow inmate.',
    },
    {
      num: 2,
      image: <img src="https://www.biography.com/.image/t_share/MTQ5MTAyMjQwNDk2MzYyNTUx/david-berkowitz-9209372-1-402-getty-images.jpg" alt="" className="photo" />,
      serialKillerInfo:
        'You got... David Berkowitz, AKA the Son of Sam Killer! Berkowitz terrorized the New York City area from July 1976 to July 1977. He killed 6 people and wounded 7, most using a .44 caliber Bulldog revolver gun. After he was arrested, Berkowitz stated that his neighbor’s dog was possessed by a demon which told him to commit the murders. He was sentenced to 25 years for each murder. In 1979, Berkowitz held a press conference where he stated that his claims about satanic possession were a hoax.',
    },
    {
      num: 3,
      image: <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Gacysmilemugshot.png" alt="" className="photo" />,
      serialKillerInfo:
        'You got... John Wayne Gacy! John Wayne Gacy, AKA the Killer Clown, regularly performed at children hospitals and charitable events as "Pogo the Clown" or "Patches the Clown". Gacy raped and killed more than 33 men and teenage boys in Chicago from 1972 to 1978. He was sentenced to death for 12 of the 33 murders he was found guilty of, and was executed by lethal injection in 1994.',
    },
    {
      num: 4,
      image: <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTeNtkHf6O0W0jCEmvhs38aO51h5LH5_pGx0UkcioN1Hf8BTXMcd7MIo3VGfqq-" alt="" className="photo" />,
      serialKillerInfo:
        'You got... Ted Bundy! Bundy is one of the most infamous serial killers in history. Between 1974 and 1978, Bundy abducted and murdered more than 30 women in 7 different states. Though shortly before his electric chair execution in 1989, he hinted that his number of victims was in the triple digits.',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const answerButtonClick = (answerOption) => {
    setAnswers([...answers, answerOption]); //adds the num to the answers array
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      //here you can process your answers array
      setIsFinished(true);
    }
  };

  return (
    <div className="App">
      <div className="quiz__container">
        <h1>Which serial killer are you?</h1>
        <div className="question__section">
          <div className="question__text">
            {!isFinished && questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer__section">
          {isFinished ? (
            <p>
            {serialKillerOptions[mode(answers)].image}
            <br />
            {serialKillerOptions[mode(answers)].serialKillerInfo}
            </p>
          ) : (
            questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button onClick={() => answerButtonClick(answerOption.num)}>
                  {answerOption.answerText}
                </button>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

function mode(arr) {
  return arr.reduce(
    function (current, item) {
      var val = (current.numMapping[item] =
        (current.numMapping[item] || 0) + 1);
      if (val > current.greatestFreq) {
        current.greatestFreq = val;
        current.mode = item;
      }
      return current;
    },
    { mode: null, greatestFreq: -Infinity, numMapping: {} }
  ).mode;
};