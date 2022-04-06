import styled from "styled-components"
import {useState} from "react"

const Wrapper = styled.div `
position: relative;
// display: flex;
// flex-direction: column;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 80vw;
height: 50vh;
background-color: lightblue;
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

const Card1 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: lightcoral;
`
const Card2 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: blue;
`

const Card3 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: red;
`

const Card4 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: green;
`

const Card5 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: grey;
`
const Card5a = styled.div `
position: absolute;
width: 100%;
height: 100%;
background-color: lightblue;
width: ${({grow}) => (grow ? "40vw" : "")};
height: ${({grow}) => (grow ? "30vw" : "")};
margin-top ${({grow}) => (grow ? "50%" : "")};
margin-left: ${({grow}) => (grow ? "50%" : "")};
transform: ${({grow}) => (grow ? "translate(-50%,-50%)" : "")};
z-index: 99;
`

const Card6 = styled.div `
position: relative;
width: 100%;
height: 100%;
background-color: lightgreen;
`


const Grid = () => {
    const [grow, setGrow] = useState(false)

    const changeGrow = () => {
        setGrow(!grow);
    }

    return (
        <div>
            <Wrapper>
                {/* <Group1> */}
                <Card1>Card1</Card1>
                <Card2>Card2</Card2>
                <Card3>Card3</Card3>
                {/* </Group1> */}
                {/* <Group2> */}
                <Card4>Card4</Card4>
                <Card5> <Card5a grow={grow} onClick={changeGrow}>Card5</Card5a></Card5>
                <Card6>Card6</Card6>
                {/* </Group2> */}
                
            </Wrapper>
        </div>
    )
}

export default Grid