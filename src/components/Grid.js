import styled from "styled-components"
import tank from "../assets/tank.jpg"

const Wrapper = styled.div `
position: relative;
width: 100vw;
height: 100vh;
background-color: lightgrey;
`

const Card = styled.div `
position: absolute;
top: 20%;
left: 20%;
width: 40%;
height: 30%;
background-color: blue;
// text-align: center;
`

const TitleWrapper = styled.div `
position: absolute;
width: 100%;
text-align: center;
z-index: 99;
`

const Title = styled.p `
color: white;
font-size: 3rem;
font-weight: bold;
// background-color: red;
`

const Image = styled.img `
position: absolute;
object-fit: contain;
width: 100%;
`

const Grid = () => {

    return (
        <div>
            <Wrapper>
                <Card>
                    <TitleWrapper><Title>Example</Title></TitleWrapper>
                    
                    <Image src={tank} alt="tank"></Image>
                </Card>
            </Wrapper>
        </div>
    )
}

export default Grid

