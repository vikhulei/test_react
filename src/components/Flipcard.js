import React from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import { useState } from "react"

// const dummyElement = ({ children, onClick }) => (
//   <div onClick={onClick}>{children}</div>
// );

// const ServiceContainer = dummyElement;
// const ServiceCards = dummyElement;
// const ServiceCard = dummyElement;
// const ServiceTitle = dummyElement;

const ServiceContainer = styled.div``;
const ServiceCards = styled.div``;
const ServiceCard = styled.div``;
const ServiceTitle = styled.div``;

const Index = () => {
let [flipped, setFlipped] = useState(new Set())

// export default class Index extends React.Component {
    //   constructor() {
        //     super();
        //     this.state = {
            //       flipped: new Set()
            //     };
            //   }
            
            //   handleClick(id) {

    const handleClick = (id) => {
        return (e) => {
        e.preventDefault();
        flipped = new Set(flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      setFlipped(flipped);
    };
  }

//   render() {
    return (
      <ServiceContainer>
        <ServiceCards>
          <ReactCardFlip
            isFlipped={flipped.has(1)}
            flipDirection="vertical"
          >
            {/* FRONTSIDE */}
            <ServiceCard onClick={handleClick(1)}>
              <ServiceTitle>Frontside</ServiceTitle>
            </ServiceCard>
            {/* BACKSIDE */}
            <ServiceCard onClick={handleClick(1)}>
              <ServiceTitle>Backside</ServiceTitle>
            </ServiceCard>
          </ReactCardFlip>

          <ReactCardFlip
            isFlipped={flipped.has(2)}
            flipDirection="vertical"
          >
            {/* FRONTSIDE */}
            <ServiceCard onClick={handleClick(2)}>
              <ServiceTitle>Frontside</ServiceTitle>
            </ServiceCard>
            {/* BACKSIDE */}
            <ServiceCard onClick={handleClick(2)}>
              <ServiceTitle>Backside</ServiceTitle>
            </ServiceCard>
          </ReactCardFlip>
        </ServiceCards>
      </ServiceContainer>
    );

}

export default Index