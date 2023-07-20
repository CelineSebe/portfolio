import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        En tant que développeuse, je suis passionnée par la création de sites sobres, accessibles et efficaces à partir de projets ou d'idées complexes.
                        J'ai reçu une solide formation de développement FullStack sur les bases de programmation, tel que HTML, CSS, Javascript et Python, et je me concentre en ce moment, sur les technologies ReactJs et NodeJs.
                        J'aime travailler à la fois sur les aspects front-end et back-end, et je recherche des solutions pour améliorer l'expérience utilisateur tout en maintenant un code de qualité.

                    </p>
                    <p>J'ai été initié durant ma formation à utiliser différents outils, par exemple React, Angular, Vue.js, Node.js, and Django. Je suis en train de chercher des opportunités pour continuer à améliorer mes compétences.</p>
                </div>
                <div className="about-img">
                    <Image src='images/about.jpeg' className="profile-img" width={300} height={500} alt="Celine and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;