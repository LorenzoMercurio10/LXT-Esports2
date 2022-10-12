import './About.css';

function About() {
    return (
    <>
        <section id="about">
            <div className="about-background">
                <div className="col-xs-6 col-md-8 about-text">
                    <h1 className="about-header">ABOUT</h1>
                    <p>Ask Advisory, società benefit, ha lanciato il suo primo progetto con finalità di “beneficio comune”, costituendo il proprio team <span class="lxt-esports">LXT ESPORTS</span>.</p>
                    <p className="about-history">In collaborazione con Lexant, società benefit tra avvocati, LXT Esports, sarà coinvolto nella competizione di due titoli, <span class="fifa-23">FIFA 23</span> e <span class="valorant">Valorant</span>.</p> 
                    <p className="about-history">
                    Il nuovo team metterà a disposizione del mercato i propri contenuti formativi e promuoverà iniziative di informazione e sensibilizzazione sui rischi connessi, come quelli del cyber bullismo, del match fixing, della privacy e della non corretta alimentazione.</p>    
                </div>
            </div>
        </section>
        
    </>
    );
}

export default About;
