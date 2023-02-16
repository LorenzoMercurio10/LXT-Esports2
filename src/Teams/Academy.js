import './Academy.css';

function About() {
    return (
    <>
        <section id="academy">
            <div className="academy-background">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 academy-text">
                        <h1 className="academy-header" target="_blank">FORMAZIONE</h1>
                        <p>LXT Esports è partner didattico di <span className="name-ask">Academy ASK</span> nello studio e nella erogazione di corsi della nuova offerta formativa dedicata al mondo degli Esports.</p>
                        <p>Grazie all’esperienza maturata nel settore dei gamers e dai professionisti di LXT Esports, la formazione di <span className="name-ask">Academy ASK</span> si arricchisce di nuove metodologie di apprendimento da oggi più che mai integrate e con le specifiche competenze ed abilità proprie del mondo del gaming.</p>   
                        <p><a href="https://www.askadvisory.it/it/pages/96-corsi-di-formazione" className="link-ask-info" target="_blank">Corso di formazione Gaming & Esports</a></p>
                        <p><a href="https://www.askadvisory.it/uploads/generic_file/catalogo_esports_2023_new_version-_8_02_23.pdf" className="link-ask-info" target="_blank">Catalogo Esports 2023</a></p>
                        <p><a href="https://www.askadvisory.it/corsi-formazione-ask/" className="link-ask-info" target="_blank">Academy ASK</a></p>
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
