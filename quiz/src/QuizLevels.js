import React, {useState} from 'react';
import './Styles/QuizLevels.css';


function LevelOne() {

    const questions = [
		{
			questionText: 'Wie viele Zeitzonen gibt es in Russland?',
			answerOptions: [
				{ answerText: '11', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '8', isCorrect: false },
				{ answerText: '13', isCorrect: false },
			],
		},
		{
			questionText: 'Was ist die nationale Blume Japans?',
			answerOptions: [
				{ answerText: 'Kornblume', isCorrect: false },
				{ answerText: 'Kirschblüte', isCorrect: true },
				{ answerText: 'Emblemblume', isCorrect: false },
				{ answerText: 'Edelweiß', isCorrect: false },
			],
		},
		{
			questionText: 'Was ist das Nationaltier Australiens?',
			answerOptions: [
				{ answerText: 'Rotes Kängaru', isCorrect: true },
				{ answerText: 'Rot Fuchs', isCorrect: false },
				{ answerText: 'Riesenkaninchen', isCorrect: false },
				{ answerText: 'Löwe', isCorrect: false },
			],
		},
        {
			questionText: 'Wie viele Tage dauert es, bis die Erde die Sonne umkreist?',
			answerOptions: [
				{ answerText: '365', isCorrect: true },
				{ answerText: '7', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '30', isCorrect: false },
			],
		},
        {
			questionText: 'Welches der folgenden Reiche hatte keine Schriftsprache?',
			answerOptions: [
				{ answerText: 'Inka', isCorrect: true },
				{ answerText: 'Azteken', isCorrect: false },
				{ answerText: 'Ägypter', isCorrect: false },
				{ answerText: 'Römer', isCorrect: false },
			],
		},
        {
			questionText: 'Wie hieß die türkische Stadt Istanbul bis 1923?',
			answerOptions: [
				{ answerText: 'Hebdomon', isCorrect: false },
				{ answerText: 'Amikos', isCorrect: false },
				{ answerText: 'Aigai', isCorrect: false },
				{ answerText: 'Konstantinopel', isCorrect: true },
			],
		},
        {
			questionText: 'Welches Land hat die meisten Inseln in der Welt?',
			answerOptions: [
				{ answerText: 'Norwegen', isCorrect: false },
				{ answerText: 'Kanada', isCorrect: false },
				{ answerText: 'Schweden', isCorrect: true },
				{ answerText: 'Finnland', isCorrect: false },
			],
		},
        {
			questionText: 'Welches ist das kleinste Land der Welt?',
			answerOptions: [
				{ answerText: 'Vatikan', isCorrect: true },
				{ answerText: 'Monaco', isCorrect: false },
				{ answerText: 'Nauru', isCorrect: false },
				{ answerText: 'San Marino', isCorrect: false },
			],
		},
        {
			questionText: 'Was ist die Hauptstadt von Kanada?',
			answerOptions: [
				{ answerText: 'Toronto', isCorrect: false },
				{ answerText: 'Vancouver', isCorrect: false },
				{ answerText: 'Ottawa', isCorrect: true },
				{ answerText: 'Montreal', isCorrect: false },
			],
		},
        {
			questionText: 'Wie viele Streifen sind auf der US-Flagge?',
			answerOptions: [
				{ answerText: '11', isCorrect: false },
				{ answerText: '13', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '8', isCorrect: false },
			],
		},
        {
			questionText: 'Nenne das größte (nicht höchste) Gebirge der Welt',
			answerOptions: [
				{ answerText: 'Elbrus', isCorrect: false },
				{ answerText: 'Mount Logan', isCorrect: false },
				{ answerText: 'Himalaya', isCorrect: false },
				{ answerText: 'Die Anden', isCorrect: true },
			],
		},
        {
			questionText: 'Wo ist der tiefste natürliche Ort auf dem Planeten Erde?',
			answerOptions: [
				{ answerText: 'Assalsee', isCorrect: false },
				{ answerText: 'Totes Meer', isCorrect: false },
				{ answerText: 'Aydingkol-See', isCorrect: false },
				{ answerText: 'Marianengraben', isCorrect: true },
			],
		},
        {
			questionText: 'Welcher ist der längste Fluss der Welt?',
			answerOptions: [
				{ answerText: 'Donau', isCorrect: false },
				{ answerText: 'Nil', isCorrect: true },
				{ answerText: 'Amazonas', isCorrect: false },
				{ answerText: 'Wolga', isCorrect: false },
			],
		},
        {
			questionText: 'Wo fanden die ersten modernen Olympischen Spiele statt?',
			answerOptions: [
				{ answerText: 'Moskau', isCorrect: false },
				{ answerText: 'Paris', isCorrect: false },
				{ answerText: 'Athen', isCorrect: true },
				{ answerText: 'London', isCorrect: false },
			],
		},
        {
			questionText: 'Welche Fußballmannschaft ist als “The Red Devils” bekannt?',
			answerOptions: [
				{ answerText: 'Manchester United', isCorrect: true },
				{ answerText: 'FC Bayern München', isCorrect: false },
				{ answerText: 'Barcelona', isCorrect: false },
				{ answerText: 'Atletico Madrit', isCorrect: false },
			],
		},
        {
			questionText: 'Welcher Fahrer hat die meisten Formel-1-Meisterschaften gewonnen?',
			answerOptions: [
				{ answerText: 'Fernando Alonso', isCorrect: false },
				{ answerText: 'Lewis Hamilton', isCorrect: false },
				{ answerText: 'Michael Schumacher', isCorrect: true },
				{ answerText: 'Sebastian Vettel', isCorrect: false },
			],
		},
        {
			questionText: 'Wer ist die 3. auf der Liste der größten Tennis-Grand-Slam-Champions aller Zeiten?',
			answerOptions: [
				{ answerText: 'Serena Williams', isCorrect: true },
				{ answerText: 'Fred Perry', isCorrect: false },
				{ answerText: 'Rafael Nadal', isCorrect: false },
				{ answerText: 'Andre Agassi', isCorrect: false },
			],
		},
        {
			questionText: 'Wie hieß das Bekleidungsunternehmen Nike ursprünglich?',
			answerOptions: [
				{ answerText: 'Nippon Sangyo', isCorrect: false },
				{ answerText: 'Echo Bay Technology Group', isCorrect: false },
				{ answerText: 'Adi Dassler Sportschuhfabrik', isCorrect: false },
				{ answerText: 'Blue Ribbon Sports', isCorrect: true },
			],
		},
        {
			questionText: 'Wann wurde Netflix gegründet?',
			answerOptions: [
				{ answerText: '2001', isCorrect: false },
				{ answerText: '1997', isCorrect: true },
				{ answerText: '2009', isCorrect: false },
				{ answerText: '2015', isCorrect: false },
			],
		},
        {
			questionText: 'Nenne den ersten Spielfilm von Pixar',
			answerOptions: [
				{ answerText: 'Ratatouille', isCorrect: false },
				{ answerText: 'Cars', isCorrect: false },
				{ answerText: 'Die Monster AG', isCorrect: false },
				{ answerText: 'Toy Story', isCorrect: true },
			],
		},
        {
			questionText: 'Welche Sprache hat die meisten Wörter (nach Wörterbucheinträgen)?',
			answerOptions: [
				{ answerText: 'Spanisch', isCorrect: false },
				{ answerText: 'Russisch', isCorrect: false },
				{ answerText: 'Englisch', isCorrect: true },
				{ answerText: 'Französisch', isCorrect: false },
			],
		},
        {
			questionText: 'Nenne den ersten Film von Disney',
			answerOptions: [
				{ answerText: 'Pinocchio', isCorrect: false },
				{ answerText: 'Schneewittchen', isCorrect: true },
				{ answerText: 'Fantasia', isCorrect: false },
				{ answerText: 'Dumbo', isCorrect: false },
			],
		},
        {
			questionText: 'Wie viele Tasten hat ein klassisches Klavier?',
			answerOptions: [
				{ answerText: '88', isCorrect: true },
				{ answerText: '72', isCorrect: false },
				{ answerText: '65', isCorrect: false },
				{ answerText: '91', isCorrect: false },
			],
		},
        {
			questionText: 'Was geschah am 20. Juli 1969?',
			answerOptions: [
				{ answerText: 'Apollo 11 landete auf dem Mond', isCorrect: true },
				{ answerText: 'Das Telefon wurde erfunden', isCorrect: false },
				{ answerText: 'Der Vietnam-Krieg', isCorrect: false },
				{ answerText: 'John F. Kennedy wird Präsident', isCorrect: false },
			],
		},
	];






    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
            setNumberOfQuestions(numberOfQuestions + 1);
		} else {
			setShowScore(true);
		}
	};


  return (
    <> 
      {showScore ? (
				<div className='score-section'>
					Du hast {score} von {questions.length} Fragen richtig
				</div>
			) : (

                <>
                    <div className='questionDiv'>
						<p>{questions[currentQuestion].questionText}</p>
					</div>

                    <p className='display-score'>{score}</p>

					<div className='allAnswerOptions'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='answerOptions' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>

                    <p className='display-rows'>{numberOfQuestions}/{questions.length}</p>


                </>
      )}
    </>
  );
};

export default LevelOne;
