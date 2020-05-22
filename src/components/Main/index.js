import React from 'react';

import {
    FiTwitter,
    FiHome,
    FiHash,
    FiList,
    FiMoreHorizontal,
    FiUser,
    FiArrowLeft,
    FiCalendar,
    FiUpload,
    FiHeart,
    FiSearch,
    FiMoon,
} from 'react-icons/fi';
import { MdNotificationsNone, MdEmail, MdExpandMore } from 'react-icons/md';
import { FaRetweet, FaRegComment } from 'react-icons/fa';
import {
    Container,
    Timeline,
    SideBar,
    SideWidgets,
    Profile,
    Infos,
    NavBar,
    FeedContainer,
    Icons,
    SideContents,
    SideNews,
} from './styles';

const Main = ({ toggleTheme }) => {
    return (
        <Container>
            <SideBar>
                <aside>
                    <span>
                        <FiTwitter size={30} style={{}} />
                    </span>

                    <span>
                        <FiHome size={25} /> Pagina Inicial
                    </span>
                    <span>
                        <FiHash size={25} /> Explorar
                    </span>
                    <span>
                        <MdNotificationsNone size={25} /> Notificacoes
                    </span>
                    <span>
                        <MdEmail size={25} /> Mensagens
                    </span>
                    <span>
                        <FiList size={25} /> Listas
                    </span>
                    <span>
                        <FiUser size={25} /> Perfil
                    </span>
                    <span>
                        <FiMoreHorizontal size={25} /> Mais
                    </span>
                </aside>

                <button type="button">Twettar</button>
                <span onClick={toggleTheme}>
                    <FiMoon size={25} /> ThemeSwitcher
                </span>
                <a href="#">
                    <article>
                        <img
                            src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                            alt=""
                        />
                        <div>
                            <strong>
                                Bojack <span>@bojackhorseman</span>
                            </strong>
                        </div>
                    </article>
                    <MdExpandMore size={30} />
                </a>
            </SideBar>

            <Timeline>
                <header>
                    <FiArrowLeft size={21} color="#3c99dc" />
                    <div>
                        <strong>
                            bojack <span>4.390 Tweets</span>
                        </strong>
                    </div>
                </header>
                <img
                    src="https://globalcomment.com/wp-content/uploads/2016/07/bojack_horseman_s03e04_12m9s1459f-1.jpeg"
                    alt="Banner"
                />
                <Profile>
                    <div>
                        <img
                            src="https://66.media.tumblr.com/fdf344ee3a420369890bfc2776543f0f/tumblr_oxit1meQnf1vlkwtxo3_400.png"
                            alt="Icon"
                        />
                        <button type="button">Editar Perfil</button>
                    </div>
                    <Infos>
                        <header>
                            <strong>
                                bojack <p>@bojackhorseman</p>
                            </strong>
                        </header>
                        <span>
                            Im bojackhorseman, a depressed and sad horse,
                            alcoholic e addicted in cocain.
                        </span>
                        <div>
                            <p>
                                <FiCalendar size={20} color="#666" /> Ingressou
                                em junho de 2009
                            </p>
                        </div>
                        <aside>
                            <strong>
                                <p>seguindo</p>194
                            </strong>
                            <strong>
                                <p>seguidores</p>300
                            </strong>
                        </aside>
                    </Infos>
                    <NavBar>
                        <ul>
                            <li>Tweets</li>
                            <li>Tweets and answers</li>
                            <li>Midias</li>
                            <li>Likes</li>
                        </ul>
                    </NavBar>
                </Profile>
                <FeedContainer>
                    <div>
                        <ul>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                            <li>
                                <img
                                    src="https://i.pinimg.com/236x/03/c9/ed/03c9ed8914ad31a4dc703f57ae46dd24.jpg"
                                    alt=""
                                />
                                <aside>
                                    <strong>
                                        bojack <span>@bojackhorseman </span>
                                        <p>20 de jun</p>
                                    </strong>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Odio dolorum excepturi
                                        asperiores delectus modi accusamus
                                        dolore in illum maiores ducimus
                                    </p>
                                    <Icons>
                                        <span>
                                            <FaRegComment size={17} />5
                                        </span>
                                        <span>
                                            <FaRetweet size={17} /> 2
                                        </span>
                                        <span>
                                            <FiHeart size={17} /> 7
                                        </span>
                                        <span>
                                            <FiUpload size={17} />
                                        </span>
                                    </Icons>
                                </aside>
                            </li>
                        </ul>
                    </div>
                </FeedContainer>
            </Timeline>

            <SideWidgets>
                <header>
                    <FiSearch size={20} />
                    <input type="text" placeholder="Search on twitter" />
                </header>

                <div>
                    <ul>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/72/8e/99/728e992dea58455f4a3289c4ee17d130.jpg"
                                alt="Photo1"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/77/56/ce/7756cead40523e3151b2e3f1dde21ab8.jpg"
                                alt="Photo2"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/ad/87/b9/ad87b929bc7cd9fb1f6352e663bcc6dd.jpg"
                                alt="Photo3"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/9b/47/99/9b47991cac8879b2d6ba8b6af7068726.jpg"
                                alt="Photo4"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/db/82/e3/db82e3f9700bc01cfc34ac5a0c5c93f2.jpg"
                                alt="Photo5"
                            />
                        </li>
                        <li>
                            <img
                                src="https://i.pinimg.com/236x/6f/2d/9d/6f2d9d632674044c2b694bcc26e1dd61.jpg"
                                alt="Photo6"
                            />
                        </li>
                    </ul>
                </div>
                <SideContents>
                    <h3>Talvez voce curta</h3>

                    <div>
                        <article>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlp46bBYy6qPQCINnYX2c7dWcphlAzlC5PB07mA1meQv9vrGBW&usqp=CAU"
                                alt="mrpeanut"
                            />
                            <strong>
                                Mr PeanutButter <span>@dayane22</span>
                            </strong>
                        </article>
                        <button type="button">Seguir</button>
                    </div>

                    <div>
                        <article>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="princess"
                            />
                            <strong>
                                Princes carolayne <span>@dayane22</span>
                            </strong>
                        </article>
                        <button type="button">Seguir</button>
                    </div>

                    <div>
                        <article>
                            <img
                                src="data:image/jpeg;base64,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"
                                alt="dayane"
                            />
                            <strong>
                                Dayane <span>@dayane22</span>
                            </strong>
                        </article>
                        <button type="button">Seguir</button>
                    </div>
                    <a href="/">Mostrar mais</a>
                </SideContents>

                <SideNews>
                    <h3>O Que esta acontecendo?</h3>

                    <div>
                        <strong>
                            <span>Covid-19 . há 37 minutos</span>
                            Covid-19: Ataca novamente, e mata aproximadamente
                            857 pessoas nas ultimas 24h
                        </strong>

                        <img
                            src="https://i.pinimg.com/236x/d3/4d/c7/d34dc714da6052ff089a46d91bae250c.jpg"
                            alt="covid"
                        />
                    </div>

                    <div>
                        <strong>
                            <span>Assunto do Momento</span>
                            Bojack
                            <p>87,2 mil Tweets</p>
                        </strong>
                        <MdExpandMore size={20} />
                    </div>

                    <div>
                        <strong>
                            <span>Politica . Assunto do Momento</span>
                            MrPeanutButter se candidata a presidencia, sua
                            porcentagem de intencao de votos esta em 67%.
                        </strong>

                        <img
                            src="https://i.pinimg.com/236x/c6/f1/9f/c6f19f35ef43c6eeb22bc3ffe539f07a.jpg"
                            alt="mrpeanut"
                        />
                    </div>
                    <div>
                        <strong>
                            <span>#Patrocinado</span>
                            PHILBERT, novo filme estrelado por Bojack esta em
                            cartaz em todos os cinemas.
                        </strong>
                        <img
                            src="https://i.redd.it/r2t2psuibum11.png"
                            alt="philbert"
                        />
                    </div>
                    <a href="/">Mostrar mais</a>
                </SideNews>
            </SideWidgets>
        </Container>
    );
};

export default Main;
