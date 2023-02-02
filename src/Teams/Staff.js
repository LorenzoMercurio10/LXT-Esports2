import './Staff.css'
import Nav from 'react-bootstrap/Nav';

function Staff() {
    return (
    <>
        <section id="staff">
            <div className="staff-background">
                <div className="staff-header">
                    <p className="staff-word">STAFF</p>
                <article className='staffer'>                    
                    <div className="row justify-content-center fifa-card">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="staff1" src="img/omino_stilizzato.png" alt="player-1" width="275" height="275" />
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Nome Team Manager</span>
                                <span className="role-player1-fifa">Team Manager</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://ww.instagram.com/crazy_fat_gamer/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://titter.com/CRAZYFATGAMER" target="_blank" className="twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://ww.twitch.tv/crazyfatgamer" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="23"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://ww.tiktok.com/@crazyfatgamer" target="_blank" className="tiktok">
                                        <img src="img/tiktok.png" alt="tiktok" height="23" width="23"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="staff2" src="img/omino_stilizzato.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Nome Esport Manager</span>
                                <span className="role-player1-fifa">Esport Manager</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://wwwinsagram.com/storari30/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twiter.com/Storari30" target="_blank" className="player-twitch">
                                        <img src="img/twitter.png" alt="twitch" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="staff2" src="img/omino_stilizzato.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Vincenzo Cipolla</span>
                                <span className="role-player1-fifa">Coach Fifa</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://ww.instagram.com/ggilbe__/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://ww.twitch.tv/ggilbe__" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twtter.com/GGilbe_" target="_blank" className="tiktok">
                                        <img src="img/twitter.png" alt="tiktok" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                </div>
            </div>
        </section>
    </>
    );
}

export default Staff;
