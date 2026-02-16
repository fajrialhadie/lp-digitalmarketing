
import React from 'react';

const TrustedBy = () => {
    return (
        <section className="trusted-by">
            <div className="container trusted-container">
                <p>Trusted by over 14,400 companies and millions of learners around the world</p>
                <div className="trusted-logos">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="trusted-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="trusted-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="trusted-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Eventbrite_logo.svg" alt="Eventbrite" className="trusted-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/DocuSign_logo.svg" alt="DocuSign" className="trusted-logo" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
