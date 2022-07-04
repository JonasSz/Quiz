import React, {useState} from 'react';
import './Styles/LevelOne.css';

const allQuestions = [
  {
      "key": 1,
      "question": "Wie viele Zeitzonen gibt es in Russland?",
      "answerOne": 11,
      "answerTwo": 10,
      "answerThree": 8,
      "answerFour": 13,
      "rightAnswer": 1
  },
  {
      "key": 2,
      "question": "Was ist die nationale Blume Japans?",
      "answerOne": "Kornblume",
      "answerTwo": "Kirschblüte",
      "answerThree": "Emblemblume",
      "answerFour": "Edelweiß",
      "rightAnswer": 2
  },
  {
      "key": 3,
      "question": "Wie viele Streifen sind auf der US-Flagge?",
      "answerOne": 11,
      "answerTwo": 13,
      "answerThree": 10,
      "answerFour": 8,
      "rightAnswer": 2
  },
  {
      "key": 4,
      "question": "Was ist das Nationaltier Australiens?",
      "answerOne": "Rotes Kängaru",
      "answerTwo": "Rot Fuchs",
      "answerThree": "Riesenkaninchen",
      "answerFour": "Löwe",
      "rightAnswer": 1
  },
  {
      "key": 5,
      "question": "Wie viele Tage dauert es, bis die Erde die Sonne umkreist?",
      "answerOne": 365,
      "answerTwo": 7,
      "answerThree": 1,
      "answerFour": 30,
      "rightAnswer": 1
  },
  {
      "key": 6,
      "question": "Welches der folgenden Reiche hatte keine Schriftsprache?",
      "answerOne": "Inka",
      "answerTwo": "Azteken",
      "answerThree": "Ägypter",
      "answerFour": "Römer",
      "rightAnswer": 1
  },
  {
      "key": 7,
      "question": "Wie hieß die türkische Stadt Istanbul bis 1923?",
      "answerOne": "Hebdomon",
      "answerTwo": "Amikos",
      "answerThree": "Aigai",
      "answerFour": "Konstantinopel",
      "rightAnswer": 4
  },
  {
      "key": 8,
      "question": "Welches Land hat die meisten Inseln in der Welt?",
      "answerOne": "Norwegen",
      "answerTwo": "Kanada",
      "answerThree": "Schweden",
      "answerFour": "Finnland",
      "rightAnswer": 3
  },
  {
      "key": 9,
      "question": "Welches ist das kleinste Land der Welt?",
      "answerOne": "Vatikan",
      "answerTwo": "Monaco",
      "answerThree": "Nauru",
      "answerFour": "San Marino",
      "rightAnswer": 1
  },
  {
      "key": 10,
      "question": "Was ist die Hauptstadt von Kanada?",
      "answerOne": "Toronto",
      "answerTwo": "Vancouver",
      "answerThree": "Ottawa",
      "answerFour": "Montreal",
      "rightAnswer": 3
  },
  {
      "key": 11,
      "question": "Nenne das größte (nicht höchste) Gebirge der Welt",
      "answerOne": "Elbrus",
      "answerTwo": "Mount Logan",
      "answerThree": "Himalaya",
      "answerFour": "Die Anden",
      "rightAnswer": 4
  },
  {
      "key": 12,
      "question": "Wo ist der tiefste natürliche Ort auf dem Planeten Erde?",
      "answerOne": "Assalsee",
      "answerTwo": "Totes Meer",
      "answerThree": "Aydingkol-See",
      "answerFour": "Marianengraben",
      "rightAnswer": 4
  },
  {
      "key": 13,
      "question": "Welcher ist der längste Fluss der Welt?",
      "answerOne": "Donau",
      "answerTwo": "Nil",
      "answerThree": "Amazonas",
      "answerFour": "Wolga",
      "rightAnswer": 2
  },
  {
      "key": 14,
      "question": "Wo fanden die ersten modernen Olympischen Spiele statt?",
      "answerOne": "Moskau",
      "answerTwo": "Paris",
      "answerThree": "Athen",
      "answerFour": "London",
      "rightAnswer": 3
  },
  {
      "key": 15,
      "question": "Welche Fußballmannschaft ist als “The Red Devils” bekannt?",
      "answerOne": "Manchester United",
      "answerTwo": "FC Bayern München",
      "answerThree": "Barcelona",
      "answerFour": "Atletico Madrit",
      "rightAnswer": 1
  },
  {
      "key": 16,
      "question": "Welcher Fahrer hat die meisten Formel-1-Meisterschaften gewonnen?",
      "answerOne": "Fernando Alonso",
      "answerTwo": "Lewis Hamilton",
      "answerThree": "Michael Schumacher",
      "answerFour": "Sebastian Vettel",
      "rightAnswer": 3
  },
  {
      "key": 17,
      "question": "Wer ist die 3. auf der Liste der größten Tennis-Grand-Slam-Champions aller Zeiten?",
      "answerOne": "Serena Williams",
      "answerTwo": "Fred Perry",
      "answerThree": "Rafael Nadal",
      "answerFour": "Andre Agassi",
      "rightAnswer": 1
  },
  {
      "key": 18,
      "question": "Wie hieß das Bekleidungsunternehmen Nike ursprünglich?",
      "answerOne": "Nippon Sangyo",
      "answerTwo": "Echo Bay Technology Group",
      "answerThree": "Adi Dassler Sportschuhfabrik",
      "answerFour": "Blue Ribbon Sports",
      "rightAnswer": 4
  },
  {
      "key": 19,
      "question": "Wann wurde Netflix gegründet?",
      "answerOne": 2001,
      "answerTwo": 1997,
      "answerThree": 2009,
      "answerFour": 2015,
      "rightAnswer": 2
  },
  {
      "key": 20,
      "question": "Nenne den ersten Spielfilm von Pixar",
      "answerOne": "Ratatouille",
      "answerTwo": "Cars",
      "answerThree": "Die Monster AG",
      "answerFour": "Toy Story",
      "rightAnswer": 4
  },
  {
      "key": 21,
      "question": "Welche Sprache hat die meisten Wörter (nach Wörterbucheinträgen)?",
      "answerOne": "Spanisch",
      "answerTwo": "Russisch",
      "answerThree": "Englisch",
      "answerFour": "Französisch",
      "rightAnswer": 3
  },
  {
      "key": 22,
      "question": "Nenne den ersten Film von Disney",
      "answerOne": "Pinocchio",
      "answerTwo": "Schneewittchen",
      "answerThree": "Fantasia",
      "answerFour": "Dumbo",
      "rightAnswer": 2
  },
  {
      "key": 23,
      "question": "Wie viele Tasten hat ein klassisches Klavier?",
      "answerOne": 88,
      "answerTwo": 72,
      "answerThree": 65,
      "answerFour": 91,
      "rightAnswer": 1
  },
  {
      "key": 24,
      "question": "Was geschah am 20. Juli 1969?",
      "answerOne": "Apollo 11 landete auf dem Mond",
      "answerTwo": "Das Telefon wurde erfunden",
      "answerThree": "Der Vietnam-Krieg",
      "answerFour": "John F. Kennedy wird Präsident",
      "rightAnswer": 1
  }
]



function LevelOne() {


const Answers = (props) => {          //Create Answer Div
  return <div>
 <button className='answerOptions'>{props.name}</button>
 </div>
}
var choosenNumber = Math.floor(Math.random() * 23) + 1;   //choose number for the question
let [choosenAnswer, setChoosenAnswer] = useState(0);      //create variable with shows the choosen div
console.log(choosenAnswer);


  return (
    <div>
      <div className='questionDiv'>            
        <p>{allQuestions[choosenNumber].question}</p>
      </div>

      <div className='answersRow'>
      <div className='allAnswerOptions'>
      <Answers name={allQuestions[choosenNumber].answerOne} id='answerOne' onClick={() => setChoosenAnswer(choosenAnswer = 1)}/>
      <Answers name={allQuestions[choosenNumber].answerTwo} id='answerTwo' onClick={() => setChoosenAnswer(choosenAnswer = 2)}/>
      </div>

      <div className='allAnswerOptions bottomRow'>
      <Answers name={allQuestions[choosenNumber].answerThree} id='answerThree' onClick={() => setChoosenAnswer(choosenAnswer = 3)}/>
      <Answers name={allQuestions[choosenNumber].answerFour} id='answerFour' onClick={() => setChoosenAnswer(choosenAnswer = 4)}/>
      </div>
      
      </div>
      
      
       
   






    </div>
  );
};

export default LevelOne;