import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Media } from 'reactstrap';


export default class Porfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1> Check Out Some of My Works.</h1>
          
      <Media>
        <Media left top href="https://project-three-real-estate.herokuapp.com/">
          <Media style={{width: '300px', height: '200px'}} img src="images/portfolio/real-estae-app.png" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            MyRealtor
          </Media>
          MyRealtor is a web based mobile app that makes the home shopping experience easier and faster for the consumer. With this app it takes the hassle of contacting a realestate agent to schedule a home viewing out of the equation. Just open MyRealtor, find the house you want to view, schedule an immediate viewing, get the code sent to your phone, and walk inside the house. its that easy! 
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="https://michaeladamstrickland.github.io/RockPaperScissors2/">
          <Media style={{width: '300px', height: '200px'}} img src="images/portfolio/rockpaperscissors.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Rock Paper Scissors
          </Media>
          This version of Rock Paper Scissors stays true to the original game.In this game you will play the simple game against the computer. Make the right pick and you win, but choose wrong and you lose!
        </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="https://strickland-resort-hotel.netlify.com/">
          <Media style={{width: '300px', height: '200px'}} img src="images/portfolio/beachResort.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bech Resort
          </Media>
          Beach Resort is a web and mobile app that takes a fantasey beach resort and gives you the option to pick your fantasey vacation. this app gives the consumer the option to compare and choose the perfect beach front room for your next vacation.
        </Media>
      </Media>
      <Media>
        <Media left top href="https://lindsay303.github.io/Group-project/">
          <Media img src="images/portfolio/theOffice.jpg" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            The Office Fan Page
          </Media>
          The Office Fan Page is the perfect web site for the biggest television show fans. This app gives the shows best gifs and youtube clips from your favorite characters.
        </Media>
      </Media>
    </div>

          </div>
     

      </section>
    );
  }
}

                // resumeData.portfolio && resumeData.portfolio.map((item) => {
                //   return (
                //     <div className="columns portfolio-item">
                //       <div className="item-wrap">
                //         <a href="https://project-three-real-estate.herokuapp.com/">
                //           <img src={`images/portfolio/beachResort.jpg`} alt="" className="item-img1"/></a>

                //           <a href="https://project-three-real-estate.herokuapp.com/">
                //           <img src={`images/portfolio/theOffice.jpg`} alt="" className="item-img1"/></a>


                //           <div className="overlay">
                //             <div className="portfolio-item-meta">
                //               <h5>{item.name}</h5>
                //               <p>{item.description}</p>
                //             </div>
                //           </div>

                //       </div>
                //     </div>
                //   )
                // })


