import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

export default function signup() {
  return (
    <Container>
        <BackgroundImage />
        <Header />
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>
                    Enjoy big movies, hit series and more from ₹149
                </h1>
                <p>
                    Join today. Cancel Anytime. 
                
                </p>
                <h3>
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>
            </div>
            <div className="form">
                <input type="Email" placefolder="Email address" text="Email" />

            </div>
            <div className="button">
                <button>
                    Get Started
                </button>
            </div>
        </div>

    </Container>
  )
}

const Container = styled.div`
`; 
