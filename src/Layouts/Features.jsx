import ArrowRight from "../assets/svg/ArrowRight";
import Cafe from "../assets/svg/Cafe";
import Community from "../assets/svg/Community";
import Globe from "../assets/svg/Globe";
import Padlock from "../assets/svg/Padlock";
import SmileyFace from "../assets/svg/SmileyFace";

export default function Features() {
  return (
    <>
      <main className="features-link-root">
        <section className="features-link-container">
          <a href="" className="features-link-card message-privately">
            <aside>
              <div className="icon">
                <Padlock width={16} height={21} />
              </div>

              <h1>Message privately</h1>
              <p>
                End-to-end encryption <br />
                and privacy controls.
              </p>

              <div>
                <ArrowRight width={20} height={20} />
              </div>
            </aside>
          </a>

          <a href="" className="features-link-card message-privately">
            <aside>
              <div className="icon">
                <Globe width={20} height={20} />
              </div>
              <h1>Stay Connected</h1>
              <p>
                Message and call for <br />
                free around the world
              </p>
              <div>
                <ArrowRight width={20} height={20} />
              </div>
            </aside>
          </a>

          <a href="" className="features-link-card message-privately">
            <aside>
              <div className="icon">
                <Community width={24} height={13} />
              </div>

              <h1>Build Community</h1>
              <p>
                Group conversation <br />
                made simple
              </p>

              <div>
                <ArrowRight width={20} height={20} />
              </div>
            </aside>
          </a>

          <a href="" className="features-link-card message-privately">
            <aside>
              <div className="icon">
                <SmileyFace width={18} height={18} />
              </div>
              <h1>Express Yourself</h1>
              <p>
                Say it with stickers, voice
                <br />
                GIFs and more
              </p>
              <div>
                <ArrowRight width={20} height={20} />
              </div>
            </aside>
          </a>

          <a href="" className="features-link-card message-privately">
            <aside>
              <div className="icon">
                <Cafe width={20} height={18} />
              </div>
              <h1>WhatsApp business</h1>
              <p>
                Reach your customers <br />
                from anywhere
              </p>
              <div>
                <ArrowRight width={20} height={20} />
              </div>
            </aside>
          </a>
        </section>
      </main>
    </>
  );
}
