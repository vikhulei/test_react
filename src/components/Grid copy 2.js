import styled from "styled-components"
import {useState} from "react"

const Wrapper = styled.div `
position: relative;
margin-top: 50%;
margin-left: 50%;
transform: translate(-50%, -50%);
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
width: 80vw;
height: 50vh;
`

const Card = styled.div `
position: relative;
width: 100%;
height: 100%;
transform-style: preserve-3d;
transition: 500ms;
z-index: -2;
`

const Safety = styled(Card) `
transform: ${({safety}) => (safety ? "perspective(2000px) rotateY(180deg) scale(1.5)" : "")};
z-index: ${({safety}) => (safety ? "99" : "0")};
`
const Church = styled(Card) `
transform: ${({church}) => (church ? "perspective(2000px) rotateY(180deg) scale(1.5)" : "")};
z-index: ${({church}) => (church ? "99" : "0")};
`
const Words = styled(Card) `
transform: ${({words}) => (words ? "perspective(2000px) rotateY(180deg) scale(1.5)" : "")};
z-index: ${({words}) => (words ? "99" : "0")};
`
const Quiz = styled(Card) `
-webkit-transform: ${({quiz}) => (quiz ? "perspective(2000px) rotateY(180deg) scale(1.5) translate3d(0,0,0)" : "")};
z-index: ${({quiz}) => (quiz ? "99" : "0")};
`

const Front = styled.div `
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
background-color: lightblue;
`

const Back = styled.div `
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transform: rotateY(180deg);
background-color: lightcoral;
z-index: 999;
`

const Grid = () => {
    const [safety, setSafety] = useState(false)
    const [church, setChurch] = useState(false)
    const [words, setWords] = useState(false)
    const [quiz, setQuiz] = useState(false)

    const changeSafety = () => setSafety(!safety);
    const changeChurch = () => setChurch(!church);
    const changeWords = () => setWords(!words);
    const changeQuiz = () =>  setQuiz(!quiz);

    return (
        <div>
            <Wrapper>

            <Safety
            safety={safety}
            onClick={changeSafety}
            >
                <Front>CARD 1 FRONT</Front>
                <Back>CARD 1 BACK</Back>
            </Safety>

            <Church
            church={church}
            onClick={changeChurch}
            >
                <Front>CARD 2 FRONT</Front>
                <Back>CARD 2 BACK</Back>
            </Church>

            <Words
            words={words}
            onClick={changeWords}
            >
                <Front>CARD 3 FRONT</Front>
                <Back>CARD 3 BACK</Back>
            </Words>

            <Quiz
            quiz={quiz}
            onClick={changeQuiz}
            >
                <Front>CARD 444 FRONT</Front>
                <Back>CARD 4 BACK</Back>
            </Quiz>


                {/* <Group1> */}
                {/* <Card1>Card1</Card1>
                <Card2>Card2</Card2> */}
                {/* <Card3>Card3</Card3> */}
                {/* </Group1> */}
                {/* <Group2> */}
                {/* <Card4>Card4</Card4> */}
                {/* <Card5 grow={grow} onClick={changeGrow}> */}
                    {/* <Card5a>FRONT</Card5a>
                    <Card5b>BACK</Card5b>
                </Card5>
                <Card6>Card6</Card6> */}
                {/* </Group2> */}
                
            </Wrapper>
        </div>
    )
}

export default Grid