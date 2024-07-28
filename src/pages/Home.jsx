import AngleRight from "../assets/svg/AngleRight";
import Download from "../assets/svg/Download";

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
        <main className="home-calls-section">
          <section className="calls-section">
            <aside>
              <h1>Never miss a moment with voice and video calls</h1>
              <p>
                From a group call to classmates to a quick call with mom, feel
                like you’re in the same room with voice and video calls.
              </p>
              <button>
                <span>Learn more</span>
                <span>
                  <AngleRight width={20} height={20} />
                </span>
              </button>
            </aside>
            <aside>
              <img src={`/src/assets/imgs/${images.familyCalls}.png`} alt="" />
            </aside>
          </section>
        </main>
      </main>
    </>
  );
}
