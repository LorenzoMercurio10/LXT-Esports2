import './Video.css'

function Video() {
    return ( 
        <section id="home">
            <div>
                <div className="video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/ABSy6fjkV6M?autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
} 

export default Video;