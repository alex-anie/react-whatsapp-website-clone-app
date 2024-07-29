import AngleRight from "../assets/svg/AngleRight";
import Download from "../assets/svg/Download";
import LearnMoreBtn from "../components/LearnMoreBtn";

import PropTypes from "prop-types";

const images = {
  cantWaitText: "cant-wait-text",
  emojiTears: "emoji-tears",
  hearts: "hearts",
  mugLove: "mug-love",
  twoGirls: "two-girls",
  voiceRecord: "voice-record",
  womanGirlMobile: "woman-girl-mobile",
  womanGirl: "woman-girl",
  morningMum: "morning-mum",
  peopleBottom: "people-bottom",
  peopleTop: "people-top",
  peopleBottomMobile: "people-bottom-mobile",
  peopleTopMobile: "people-top-mobile",
  familyCalls: "family-calls",
  typing: "typing",
  chats: "chats",
  chatsBg: "chats-bg",
  feelGirl: "feel-girl",
  feelEmoji: "feel-emoji",
  feelEmojiLg: "feel-emoji-lg",
  jio: "jio",
};

function SectionComponents({
  headingText,
  emText,
  paraText,
  imgObj,
  classNameMainTag,
  classNameH1Tag,
  classNamePTag,
  classButtonTag,
  sectionStyle,
}) {
  return (
    <>
      <main className={`speak-section ${classNameMainTag}`}>
        <section className={`speak-container ${sectionStyle}`}>
          <aside className="speak-content">
            <h1 className={`h1-heading-text ${classNameH1Tag}`}>
              {headingText} <br /> <em>{emText}</em>
            </h1>
            <p className={`para-text ${classNamePTag}`}>{paraText}</p>
            <LearnMoreBtn
              buttonText="Learn More"
              Icon={AngleRight}
              className={`${classButtonTag}`}
            />
          </aside>

          <aside className="speak-image">
            <img src={`/src/assets/imgs/${imgObj}.png`} alt="" />
          </aside>
        </section>
      </main>
    </>
  );
}

SectionComponents.propTypes = {
  headingText: PropTypes.string.isRequired,
  emText: PropTypes.string,
  paraText: PropTypes.string.isRequired,
  imgObj: PropTypes.object.isRequired,
  classNameMainTag: PropTypes.string,
  classNameH1Tag: PropTypes.string,
  classNamePTag: PropTypes.string,
  classButtonTag: PropTypes.string,
  sectionStyle: PropTypes.string,
};

export default function Home() {
  return (
    <>
      <main className="home-root">
        {/* Hero Section */}
        <main className="home-hero-section">
          <section className="home-hero-container">
            <aside className="floats-messages">
              <div className="home-images-one">
                <img src={`/src/assets/imgs/${images.morningMum}.png`} alt="" />
                <img src={`/src/assets/imgs/${images.hearts}.png`} alt="" />
                <img src={`/src/assets/imgs/${images.mugLove}.png`} alt="" />
              </div>

              <div className="home-images-two">
                <img
                  src={`/src/assets/imgs/${images.voiceRecord}.png`}
                  alt=""
                />
                <img src={`/src/assets/imgs/${images.twoGirls}.png`} alt="" />
                <img src={`/src/assets/imgs/${images.emojiTears}.png`} alt="" />
                <img
                  src={`/src/assets/imgs/${images.cantWaitText}.png`}
                  alt=""
                />
              </div>
            </aside>

            <aside className="home-hero-content">
              <div className="home-hero-content-wrapper">
                <h1 className="home-hero-heading">Message privately</h1>
                <p className="home-hero-para">
                  Simple, reliable, private messaging and calling for free*,
                  available all over the world
                </p>
              </div>
              <div>
                <div className="home-hero-button">
                  <button className="download-button">
                    <span className="download-text"> Download</span>
                    <Download />
                  </button>
                </div>
              </div>
            </aside>

            <p className="home-hero-para-overflow-text">
              *Data changes may apply Contact your provider for details
            </p>
          </section>
          <div></div>
        </main>

        {/* ::USER SECTION:: */}
        <main className="home-user-section">
          <section className="user-section-container">
            <aside className="user-section-top-img user-section-img"></aside>
            <aside className="user-section-text">
              <p>
                With private messaging and calling, you can be yourself, speak
                freely and feel close to the most important people in your life
                no matter where they are.
              </p>
            </aside>
            <aside className="user-section-bottom-img user-section-img"></aside>
          </section>
        </main>

        {/* ::CALL SECTION:: */}
        <div>
          <SectionComponents
            sectionStyle="call-section-flip"
            headingText="Never miss a moment with voice and video calls"
            paraText="From a group call to classmates to a quick call with mom, feel like you’re in the same room with voice and video calls"
            imgObj={images.familyCalls}
            classNameMainTag="call-main-tag"
            classNameH1Tag="call-heading-text"
          />
        </div>

        {/* ::SPEAK SECTION:: */}
        <div>
          <SectionComponents
            headingText="Speak"
            emText="freely"
            paraText="With end-to-end encryption, your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them, and nobody in between, not even WhatsApp."
            imgObj={images.typing}
            classNameMainTag="speak-main-tag"
            classNamePTag="speak-p-tag"
            classNameH1Tag="speak-h1-tag"
            classButtonTag="cs-speak-btn"
          />
        </div>

        {/* ::CHATS SECTION:: */}
        <div>
          <SectionComponents
            sectionStyle=""
            headingText="Keep in touch with your groups"
            paraText="Whether it's planning an outing with friends or simply staying on top of your family chats, group conversations should feel effortless."
            imgObj={images.chatsBg}
            classNameMainTag=""
            classNameH1Tag=""
          />
        </div>

        {/* ::FEEL SECTION:: */}
        <div>
          <SectionComponents
            sectionStyle=""
            headingText="Say what you feel"
            paraText="Express yourself without words. Use stickers and GIFs or share everyday moments on Status. Record a voice message for a quick hello or a longer story."
            imgObj={images.feelGirl}
            classNameMainTag=""
            classNameH1Tag=""
          />
        </div>

        {/* ::TRANSFORM SECTION:: */}
        <div>
          <SectionComponents
            sectionStyle=""
            headingText="Transform your business"
            paraText="WhatsApp Business helps you reach your customers globally to deliver compelling experiences at scale. Showcase your products and services, increase sales, and build relationships all with WhatsApp."
            imgObj={images.jio}
            classNameMainTag=""
            classNameH1Tag=""
          />
        </div>
      </main>
    </>
  );
}
