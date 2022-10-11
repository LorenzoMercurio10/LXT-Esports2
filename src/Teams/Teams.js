import './Teams.css'
import Nav from 'react-bootstrap/Nav';

function Teams() {
    return (
        <>
        <section id="teams">
            <div className="teams-block">
                <div className="teams-nav">
                    <p className="team-header">TEAMS</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className="team-fifa">
                                        <img className="foto-white-fifa" src="img/fifa_white.png"  alt="fotobiancafifa" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
                <article className='fifa-players'>
                    <div className="row justify-content-center fifa-card">
                        <div className="col-xs-12 col-md-4 card-logo">
                            <img className="player1-fifa" src="img/crazy_pic.jpg" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Crazyfatgamer</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/crazy_fat_gamer/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/CRAZYFATGAMER" target="_blank" className="twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/crazyfatgamer" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="23"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.tiktok.com/@crazyfatgamer" target="_blank" className="tiktok">
                                        <img src="img/tiktok.png" alt="tiktok" height="23" width="23"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 card-logo">
                            <img className="player2-fifa" src="img/cipo_picc.jpg" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Vincenzo Cipolla</span>
                                <span className="role-player1-fifa">Coach</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/_vincenzocipolla_/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/VincenzoCFifa" target="_blank" className="player-twitch">
                                        <img src="img/twitter.png" alt="twitch" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 card-logo">
                            <img className="player2-fifa" src="img/ggilbe_picc.jpg" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">GGilbe</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/ggilbe__/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/ggilbe__" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/GGilbe_" target="_blank" className="tiktok">
                                        <img src="img/twitter.png" alt="tiktok" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}

export default Teams;