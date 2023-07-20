import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='images/profile.jpeg' className="profile-img" width={300} height={300} alt="Celine's personal headshot" />
            <div className="hero-text">
                <h1>Hey, je suis Céline 👋</h1>
                <p>
                    Je suis développeuse FullStack basée à Toulouse. Je conçois des sites vitrines & applications.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/celinesebe"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/celinesebe"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/celinesebe/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;