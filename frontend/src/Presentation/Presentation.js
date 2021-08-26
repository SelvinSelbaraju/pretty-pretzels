import React from 'react'
import './Presentation.css'
import pretzels from './pretzels.png'

function Presentation() {
    return (
        <main>
            <div className="presentation">
                <div className="introduction">
                    <h2 className="brand-title">Pretty Pretzels</h2>
                    <p className="intro-text">
                        The tastiest, healthiest, <span>most concious</span> pretzels you can buy.
                        We come in any kind of flavour you can think of!
                    </p>
                    <div className="cta">
                        <button className="cta-more"><a href="#">Find Out More</a></button>
                        <button className="cta-buy"><a href="#">Buy Now</a></button>
                    </div>
                </div>
                <img  className="pretzel-picture" src={pretzels} alt="Pretzels" />
            </div>
        </main>
    )
}

export default Presentation
