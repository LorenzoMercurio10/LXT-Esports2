import './Video.css'

function Video() {
    return ( 
        <>
        <section id="home">
            <div className="video ratio ratio-16x9">
            <video autoPlay={true} muted loop controls={false}>
                <source src="img/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>    
            </div>
        </section> 
        </>
    )
}

export default Video;

/*                <div className="video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/ABSy6fjkV6M?&autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop" allowfullscreen></iframe>
                </div> */