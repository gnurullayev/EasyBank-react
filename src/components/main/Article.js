/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import articleImg1 from "../../images/articles-photo1.png"
import articleImgMd1 from "../../images/articles-mb-photo1.png"
import articleImg2 from "../../images/articles-photo2.png"
import articleImgMd2 from "../../images/article-mb-photo2.png"
import articleImg3 from "../../images/articles-photo3.png"
import articleImgMd3 from "../../images/article-mb-photo3.png"
import articleImg4 from "../../images/articles-photo4.png"
import articleImgMd4 from "../../images/article-mb-photo4.png"

import "./articles.scss"

function Article() {
    return (
        <section className="articles">
            <div className="articles__container container">
                <div className="articles__inner">
                    <h2 className="articles__title">Latest Articles</h2>

                    <ul className="articles__lists">
                        <li className="articles__item">
                            <img className="articles__photo" src= {articleImg1} alt="Articles Photo 1" width="255px" height="200" />
                            <img className="article__photo-mb" src= {articleImgMd1} alt="Articles Photo mb 1" width="327px" height="200" />
                            <div className="articles__content">
                                <p className="aricles__author">By Claire Robinson</p>
                                <a className="articles__offer" href="#">
                                    Receive money in any currency with no fees
                                </a>
                                <p className="article__description">
                                    The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …
                                </p>
                            </div>
                        </li>

                        <li className="articles__item">
                            <img className="articles__photo" src= {articleImg2} alt="Articles Photo 2" width="255px" height="200" />
                            <img className="article__photo-mb" src= {articleImgMd2} alt="Articles Photo mb 2" width="327px" height="200" />
                            <div className="articles__content">
                                <p className="aricles__author">By Wilson Hutton</p>
                                <a className="articles__offer" href="#">
                                    Treat yourself without worrying about money
                                </a>
                                <p className="article__description">
                                    Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …
                                </p>
                            </div>
                        </li>

                        <li className="articles__item">
                            <img className="articles__photo" src= {articleImg3} alt="Articles Photo 3" width="255px" height="200" />
                            <img className="article__photo-mb" src= {articleImgMd3}alt="Articles Photo mb 3" width="316px" height="200" />
                            <div className="articles__content">
                                <p className="aricles__author">By Wilson Hutton</p>
                                <a className="articles__offer" href="#">
                                    Take your Easybank card wherever you go
                                </a>
                                <p className="article__description">
                                    We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …
                                </p>
                            </div>
                        </li>

                        <li className="articles__item">
                            <img className="articles__photo" src= {articleImg4} alt="Articles Photo 4" width="255px" height="200" />
                            <img className="article__photo-mb" src= {articleImgMd4} alt="Articles Photo mb 4" width="316px" height="200" />
                            <div className="articles__content">
                                <p className="aricles__author">By Claire Robinson</p>
                                <a className="articles__offer" href="#">
                                    Our invite-only Beta accounts are now live!
                                </a>
                                <p className="article__description">
                                    After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...
                                </p>
                            </div>
                        </li>                    
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Article;