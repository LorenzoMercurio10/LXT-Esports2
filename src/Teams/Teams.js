import './Teams.css'
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function Teams() {

    const [valorant, setValorant] = useState(false)

    return (
        <>
        <section id="teams">
            <div className="teams-block">
                <div className="teams-nav">
                    <p className="team-header">TEAMS</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className="team-fifa" onClick={() => setValorant(false)}>
                                        <img className="foto-black" src="img/fifa_nero.png"  alt="fotonerafifa" />
                                </Nav.Link>
                                {valorant && <img className="foto-fifa-white" src="img/fifa_white.png" alt="fotobiancafifa" />}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="team-valorant" onClick={() => setValorant(true)}>
                                        <img className="foto-valorant" src="img/valorant.png"  alt="fotovalorantbianca" />
                                </Nav.Link>
                                {valorant && <img className="foto-valorant-nera" src="img/valorant_nero.png" alt="fotovalorantnera" />}
                            </Nav.Item>
                        </Nav>
                </div>
                <article className={!valorant ? 'fifa-players' : 'no-visibility'}>
                    <div className="row justify-content-center fifa-card">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
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
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player2-fifa" src="img/storari.jpg" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Storari30</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/storari30/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/storari30" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/Storari30" target="_blank" className="player-twitch">
                                        <img src="img/twitter.png" alt="twitch" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
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
                <article className={valorant ? 'valorant-players' : 'no-visibility'}>
                    <div className="row justify-content-center valorant-card">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player1-fifa" src="img/giu.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Giu</span>
                                <span className="role-player1-fifa">Duelist</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/giuvlr/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/GiuVLR" target="_blank" className="twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/giuvlr" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="23"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.tiktok.com/@giuvlr" target="_blank" className="tiktok">
                                        <img src="img/tiktok.png" alt="tiktok" height="23" width="23"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player2-fifa" src="img/effy.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Effy</span>
                                <span className="role-player1-fifa">Controller & IGL</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/seffyraa/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/Seffyraa" target="_blank" className="player-twitch">
                                        <img src="img/twitter.png" alt="twitch" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/seffyra" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.tiktok.com/@seffyraa" target="_blank" className="tiktok">
                                        <img src="img/tiktok.png" alt="tiktok" height="23" width="23"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player2-fifa" src="img/regi.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Regi</span>
                                <span className="role-player1-fifa">Flex</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/reginew_/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/hungryregi" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/nevermindRegi" target="_blank" className="tiktok">
                                        <img src="img/twitter.png" alt="tiktok" height="23" width="27"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center valorant-card2">    
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player1-fifa" src="img/aranel.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Aranel</span>
                                <span className="role-player1-fifa">Support</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/saralippoliss/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/Aranel_VAL" target="_blank" className="twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/aranel_s" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="23"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 card-logo">
                            <img className="player1-fifa" src="img/valyyrian.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Valyyrian</span>
                                <span className="role-player1-fifa">Flex</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/valyyrian/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://twitter.com/valyyrian" target="_blank" className="twitter">
                                        <img src="img/twitter.png" alt="twitter" height="23" width="27"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/valyyrian" target="_blank" className="twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="23"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.tiktok.com/@valyyrian" target="_blank" className="tiktok">
                                        <img src="img/tiktok.png" alt="tiktok" height="23" width="23"></img>
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

/*import { useState } from 'react';

function Teams() {

    const [rocketLeague, setRocketLeague] = useState(false);

    return (
        <>
        <section id="teams">
            <div className="teams-block">
                <div className="teams-nav">
                    <p className="team-header">TEAMS</p>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className="team-fifa">
                                    <div onClick={() => setRocketLeague(false)}>
                                        <img className="foto-white-fifa" src="img/fifa_white.png"  alt="fotobiancafifa" />
                                    </div>
                                        {!rocketLeague && <img className="foto-green-fifa" src="img/fifa_verde.png" alt="fotoverdefifa" />}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="team-rocket-league">
                                    <div onClick={() => setRocketLeague(true)}>
                                        <img className="foto-bianca-rocket-league" src="img/rocket_bianco.png" alt="fotobiancarocket" />
                                    </div>
                                        {rocketLeague && <img className="foto-verde-rocket-league" src="img/rocket_verde.png"  alt="fotoverderockdet" />}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                </div>
                <article className={!rocketLeague ? 'fifa-players' : 'no-visibility'}>
                    <div className="row justify-content-center fifa-card">
                        <div className="col-xs-12 col-sm-12 col-md-6 card-logo-fifa">
                            <img className="player1-fifa" src="img/frankie.png" alt="player-1" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">Frankievai</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/frenkievai/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
                                    </Nav.Link>
                                    <Nav.Link href="https://www.twitch.tv/frenkievai/" target="_blank" className="player-twitch">
                                        <img src="img/twitch.png" alt="twitch" height="23" width="25"></img>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 card-logo-fifa">
                            <img className="player2-fifa" src="img/lmatty.png" alt="player-2" width="275" height="275"></img>
                            <div className="nick-player1-fifa">
                                <span className="name-player1-fifa">LMatti10</span>
                                <span className="role-player1-fifa">Player</span>
                                <div className="socials-player1-fifa">
                                    <Nav.Link href="https://www.instagram.com/lmatti10_/" target="_blank" className="player-instagram">
                                        <img src="img/ig.png" alt="instagram" height="23" width="25"></img>
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
 */