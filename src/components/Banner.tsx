import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();

    return (
        <section className="banner">
            <span className="dropdown-name">About</span>
            <span className="dropdown-name">Services</span>
            <span className="dropdown-name">Nail Image Inc.</span>
            <span className="dropdown-name">Booking</span>
            <span className="dropdown-name">Contacts</span>
        </section>
    )
}

export default Banner;