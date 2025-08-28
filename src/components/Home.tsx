import salonImg from '../pexels-fotios-photos-851219.jpg';

function Home() {
    return (
        <div className="main-content">
            <div>
                <img src={salonImg} alt="Salon" className="full-screen-img" />
            </div>
        </div>
    )
}

export default Home;