import React from 'react'
import { Link } from 'react-router-dom';
import './Presentation.css'
import pretzels from './pretzels.png'

function Presentation() {
    return (
        <main>
            <div className="presentation">
                <div className="introduction">
                    <h2 className="brand-title">Pretty Pretzels</h2>
                    <p className="intro-text">
                        The tastiest, healthiest, <span>most conscious</span> pretzels you can buy.
                        We come in any kind of flavour you can think of!
                    </p>
                    <div className="cta">
                        <button className="cta-more"><Link to="/about">Find Out More</Link></button>
                        <button className="cta-buy"><Link to="/products">View Our Range</Link></button>
                    </div>
                </div>
                <img  className="pretzel-picture" src={pretzels} alt="Pretzels" />
            </div>
        </main>
    )
}

export default Presentation
