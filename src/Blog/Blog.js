import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css';

function Blog() {
    return (
    <>
    <section id="blog">
        <div className="blog-background">
            <div className="row justify-content-center articles">
                <h1 className="header">BLOG</h1>
                    <div className="col-xs-12 col-md-4">
                        <p className="description">Guida - 6 Ottobre 2022</p>
                        <h1><a className="singolo" href="https://www.askadvisory.it/wp-content/uploads/2022/08/ASK-Codice-Etico_Benefit_agosto-2022.pdf" target="_blank">Codice Etico ASK Advisory</a></h1>
                        <p className="description">Per il  raggiungimento degli obiettivi benefit è stato definito ed adottato internamente un proprio Codice Etico...</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <p className="description">News - 6 Ottobre 2022</p>
                        <h1><a className="singolo" href="https://www.lexant.it/it/consulenza-e-servizi-le-imprese/e-sports/" target="_blank">About Lexant: il primo partner del team LXT</a></h1>
                        <p className="description">Il supporto di Lexant aiuterà la squadra nella corretta gestione delle pratiche legali...</p>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <p className="description">News - 6 Ottobre 2022</p>
                        <h1><a className="singolo" href="https://www.instagram.com/lxt.official/" target="_blank">Presentazione Team FIFA23</a></h1>
                        <p className="description">Online l'annuncio del roster per la stagione competitiva su FIFA23...</p>
                    </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Blog;

