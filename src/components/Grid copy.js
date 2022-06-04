import styled from "styled-components"
import {useState} from "react"

const Wrapper = styled.div `
position: relative;
// display: flex;
// flex-direction: column;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 80vw;
height: 50vh;
// background-color: lightblue;
`

// const Group1 = styled.div `
// display: flex;
// width: 100%;
// height: 100%;
// `
// const Group2 = styled.div `
// display: flex;
// width: 100%;
// height: 100%;
// `

// const Card1 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// background-color: lightcoral;
// `
// const Card2 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// background-color: blue;
// `

const Card = styled.div `
position: relative;
width: 100%;
height: 100%;
transform-style: preserve-3d;
transition: 500ms;
transform: ${({grow}) => (grow ? "perspective(2000px) rotateY(180deg) scale(1.5)" : "")};
z-index: ${({grow}) => (grow ? "99" : "")};
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
`

// const Card3 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// background-color: red;
// `

// const Card4 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// background-color: green;
// `

// const Card5 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// // background-color: grey;
// transform-style: preserve-3d;
// transition: 500ms;
// transform: ${({grow}) => (grow ? "perspective(2000px) rotateY(180deg) scale(1.5)" : "") };
// z-index: ${({grow}) => (grow ? "99" : "")};
// `


// const Card6 = styled.div `
// position: relative;
// width: 100%;
// height: 100%;
// background-color: lightgreen;
// `


const Grid = () => {
    const [grow, setGrow] = useState(new Set())

    const changeGrow = (id) => {
        return (e) => {
            e.preventDefault();
            let flip = new Set(grow)
            if (flip.has(id)) {
                flip.delete(id)
            } else {
                flip.add(id);
            }
            setGrow(flip);
        }
    }

    return (
        <div>
            <Wrapper>
            <Card
            grow={grow.has(1)}
            onClick={changeGrow(1)}
            >
                <Front>CARD 1 FRONT</Front>
                <Back>CARD 1 BACK</Back>
            </Card>
            <Card
            grow={grow.has(2)}
            onClick={changeGrow(2)}
            >
                <Front>CARD 2 FRONT</Front>
                <Back>CARD 2 BACK</Back>
            </Card>
            <Card
            grow={grow.has(3)}
            onClick={changeGrow(3)}
            >
                <Front>CARD 3 FRONT</Front>
                <Back>CARD 3 BACK</Back>
            </Card>
            <Card
            grow={grow.has(4)}
            onClick={changeGrow(4)}
            >
                <Front>CARD 4 FRONT</Front>
                <Back>CARD 4 BACK</Back>
            </Card>


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