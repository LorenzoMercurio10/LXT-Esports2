import 'bootstrap/dist/css/bootstrap.min.css';
import './Partner.css';

function Partner() {
    return (
    <section id="partner">
        <div className="partner-background">
            <div className="row justify-content-center partners">
               <h1 className="header-partners">PARTNERS</h1>
                    <div className="col-xs-12 col-md-6 col-lg-2 ask">
                        <img src="img/ask.png" alt="instagram" height="101" width="300"></img>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-2 lexant">
                        <img src="img/lexant.png" alt="instagram" height="101" width="300"></img>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-2 lino-sonego">
                        <img src="img/lino_sonego.png" alt="instagram" height="101" width="300"></img>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-2 proodos">
                        <img src="img/proodos.png" alt="instagram" height="101" width="300"></img>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-2 ask-advisor">
                        <img src="img/askadvisor.png" alt="instagram" height="101" width="300"></img>
                    </div> 
                    <div className="col-xs-12 col-md-6 col-lg-2 oies">
                        <img src="img/oies.png" alt="instagram" height="101" width="300"></img>
                    </div>
            </div>
        </div>
    </section>
    );
}

export default Partner;
