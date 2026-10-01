import './Contact.css';

export default function Contact() {
    return (
        <main className="contact-page">
            <div className="wrap">
                <div className="contact-box">
                <h1>N'hésitez pas à me contacter !</h1>
                <div className="contact-list">
                    <a href="mailto:priam.antoine57@gmail.com">priam.antoine57@gmail.com</a>
                    <a href="tel:+33611500609">+33 6 11 50 06 09</a>
                    <span className="contact-location">Moulins-lès-Metz</span>
                </div>
                </div>
            </div>
        </main>
    );
}