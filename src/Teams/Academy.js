import './Academy.css';

function About() {
    return (
    <>
        <section id="academy">
            <div className="academy-background">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 academy-text">
                        <h1 className="academy-header"><a href="https://www.askadvisory.it/corsi-formazione-ask/" className="link-ask" target="_blank">ACADEMY ASK</a></h1>
                        <p>LXT Esports, grazie alla piattaforma formativa <span className="name-ask">Academy ASK</span>, studia e realizza pubblicazioni, corsi ed eventi formativi esclusivamente orientati  a far accrescere le conoscenze, le competenze e le abilità dei gamers e di tutti  i soggetti, (coach, manager e imprenditori).</p>
                        <p>Grazie all’esperienza maturata dai docenti e dai professionisti di <span className="name-ask">Academy ASK</span>, il team, con i propri  gamers sarà, si impegna  a divulgare e sensibilizzare il mercato degli e.sports sulla evoluzione del quadro normativo e sui temi di sostenibilità e prevenzione  come quelli del  cyber bullismo, del match fixing, della privacy, della ludopatia  e della non corretta  alimentazione.</p>   
                        <p><a href="https://www.askadvisory.it/corsi-formazione-ask/" className="link-ask-info" target="_blank">Per saperne di più </a></p>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 academy-image">
                        <a href="https://www.askadvisory.it/it/pages/5-e-sports" target="_blank"><img className="responsivei" src="img/linkaccademia.png"/></a>
                    </div>  
                </div>
            </div>
        </section>
        
    </>
    );
}

export default About;
