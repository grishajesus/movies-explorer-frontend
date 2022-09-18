import "./aboutme.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__bio-container">
          <div className="about-me__bio">
            <h3 className="about-me__name">Григорий</h3>
            <p className="about-me__age">Фронтенд-разработчик, 25 лет</p>
            <p className="about-me__text">useless kid.</p>
            <ul className="about-me__socials">
              <li>
                <a
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  ВКонтакте
                </a>
              </li>
              <li>
                <a
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__avatar"
            src={" "}
            alt="фотография разработчика приложения"
          />
        </div>
      </div>
    </section>
  );
}
