import React from "react"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import ReviewCard from "./ReviewCard"
import TrustBox from "./TrustBox"

import styles from "../css/review-slider.module.css"

const ReviewSlider = () => {
  const width = window.innerWidth
  let sliderHeight
  console.log(window.innerWidth)

  if (width > 1025) {
    // desktop height
    sliderHeight = 30
  } else if (width < 1025 && width > 768) {
    // large tablet
    sliderHeight = 50
  } else if (width <= 768 && width > 414) {
    // regular tablet
    sliderHeight = 100
  } else {
    // mobile
    sliderHeight = 220
  }
  console.log(sliderHeight)
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={sliderHeight}
      totalSlides={7}
    >
      <Slider>
        <Slide index={0}>
          <div className="row">
            <ReviewCard
              name="Sean Haggerty"
              company="President Protector Brewery LLC"
              review="American Profit Consulting has done an awesome job with the services provided to our brewery! Products are outstanding and they will beat competitor pricing on everything they provide, highly recommend doing business with American Profit Consulting!"
            />
            <ReviewCard
              name="Mike Woodall"
              review="Humberto is knowledgeable professional. Without his expert advice, one of my clients would never have received the growth capital they needed."
            />
          </div>
        </Slide>
        <Slide index={1}>
          <div className="row">
            <ReviewCard
              name="Chad Bell"
              company="Achilles Coffee Roasters"
              review="Humberto is a real pro. He managed our loan application process from beginning to end and helped us get the financing we needed to expand. In addition, he saved us a lot of money with our worker's comp and liability insurance policies. Recently he found us financing for a company van which was less than what the dealer offered us - Thanks Humberto!"
            />
            <ReviewCard
              name="Francesco Bucci"
              review="Humberto is responsive, competent, personable and... he's always on the lookout for problems: because his favorite job is to find solutions."
            />
          </div>
        </Slide>
        <Slide index={2}>
          <div className="row">
            <ReviewCard
              name="Chris Schweihs"
              review="THE BEST - Humberto is extremely efficient and very helpful. Highly recommend him for any type of SBA loan. He has a ton of resources can get the job done!!"
            />
            <ReviewCard
              name="Jose"
              review="Humberto is an excellent consultant. I couldn’t think of anyone more knowledgeable and competent as him. He listens to understand your needs and delivers. Next time I need funding or guidance he’ll be the first I call without a doubt."
            />
          </div>
        </Slide>
        <Slide index={3}>
          <div className="row">
            <ReviewCard
              name="Farah A"
              review="American Profit Consulting is one of my top partner. Humberto Hernandez is a very experienced broker. He is going to find the best lender that meets your commercial financing need."
            />
            <ReviewCard
              name="Jessie Reyes"
              review="APC was able to get my loan request approved after it had been declined by my own bank. I highly recommend using APC!"
            />
          </div>
        </Slide>
        <Slide index={4}>
          <div className="row">
            <ReviewCard
              name="Patrick Sanders"
              review="Humberto was very professional and helped me purchase my commercial office with favorable terms. Would definitely recommend."
            />
            <ReviewCard
              name="Jessie Reyes"
              review="APC was able to get my loan request approved after it had been declined by my own bank. I highly recommend using APC!"
            />
          </div>
        </Slide>
        <Slide index={5}>
          <div className="row">
            <ReviewCard
              name="Kurt Bach"
              company="Attitude Brewing Company"
              review="Humberto really understands the needs of his clients. He is very capable of wadding through the complicated application processes and he will find you the right fit. We always felt we were his top priority. A complete pleasure to work with."
            />
            <ReviewCard
              name="Carlos Hernandez"
              review="I’m very grateful for American Profit Consulting. They helped me secure financing to help grow my business that i didn’t think was possible. I would recommend these guys to anyone and everyone."
            />
          </div>
        </Slide>
        <Slide index={6}>
          <div className="row">
            <ReviewCard
              name="Dillon McCormick"
              review="I’ve had the pleasure of working with Humberto from American Profit Consulting and I would no doubt recommend his service to any business owner. His knowledge, guidance, and unbiased professional opinion are invaluable to the growth of a business. Do yourself a favor and give him a call."
            />
            <ReviewCard
              name="Ali Horuz"
              company="VIP Pedicabs"
              review="Great experience working with Humberto. I higly recommend him."
            />
          </div>
        </Slide>
      </Slider>
      <div className={styles.buttons}>
        <ButtonBack className="btn-primary">Back</ButtonBack>
        &nbsp;
        <ButtonNext className="btn-primary">Next</ButtonNext>
      </div>
      <div className={styles.trustBox}>
        <TrustBox />
      </div>
    </CarouselProvider>
  )
}

export default ReviewSlider
