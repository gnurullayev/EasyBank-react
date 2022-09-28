import "./choose.scss"

import chooseImg1 from "../../images/choose-img1.svg"
import chooseImg2 from "../../images/choose-img2.svg"
import chooseImg3 from "../../images/choose-img3.svg"
import chooseImg4 from "../../images/choose-img4.svg"

function Choose() {
    return (
        <section class="choose">
            <div class="choose__container container">
                <div class="choose__inner">
                    <h2 class="choose__titel">Why choose Easybank?</h2>

                    <p class="choose__description">
                        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                    </p>

                    <ul class="choose__lists">
                        <li class="choose__item">
                            <img class="choose-img" src= {chooseImg1} alt="Choose img1" width="72" height="72" />
                            <h3 class="choose__item-titel">Online Banking</h3>
                            <p class="choose__item-desc">
                                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                            </p>
                        </li>

                        <li class="choose__item">
                            <img class="choose-img" src= {chooseImg2} alt="Choose img2" width="72" height="72" />
                            <h3 class="choose__item-titel">Fast Onboarding</h3>
                            <p class="choose__item-desc">
                                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                            </p>
                        </li>

                        <li class="choose__item">
                            <img class="choose-img" src= {chooseImg3} alt="Choose img3" width="72" height="72" />
                            <h3 class="choose__item-titel">Simple Budgeting</h3>
                            <p class="choose__item-desc">
                                See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                            </p>
                        </li>

                        <li class="choose__item">
                            <img class="choose-img" src= {chooseImg4} alt="Choose img4" width="72" height="72" />
                            <h3 class="choose__item-titel">Fast Onboarding</h3>
                            <p class="choose__item-desc">
                                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Choose;