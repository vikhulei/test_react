import styled from "styled-components"
import tank from "../assets/tank.jpg"
import me from "../assets/me.png"

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
width: 15%;
height: 60%;
// background-color: blue;
// text-align: center;
`

const ImageWrapper = styled.div `
position: relative;
width: 100%;
background-color: gray;
`

const Image = styled.img `
position: relative;
top 0;
margin-bottom: -5px;
margin-top: -15%;
// object-fit: contain;
width: 100%;

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

const Wrapper1 = styled.div `
position: absolute;
top: 100px;
left: 200px;
height: 400px;
width: 200px;
background-color: lightblue;
`

const Box1 = styled.div `
position: relative;
// height: 50%;
width: 100%;
background-color: green;
`

const BoxInBox = styled.div `
position: relative;
height: 50%;
width: 100%;
background-color: lightcoral;
`

const Grid = () => {

    return (
        <div>
            {/* <Wrapper>
                <Card>
                    <TitleWrapper><Title>Example</Title></TitleWrapper>
                    <ImageWrapper>
                    <Image src={me} alt="tank"></Image>
                    </ImageWrapper>
                </Card>
            </Wrapper> */}
            <Wrapper>
            <Wrapper1>
                <Box1>
                <Image src={me} alt="tank"></Image>
                </Box1>
            </Wrapper1>
            </Wrapper>
        </div>
    )
}

export default Grid

