import React from "react";
import ikbal from "../../image/ikbal.png";
import "./index.css";

function Main() {
  return (
    <div>
      <main className="main-page">
        <section className="glass">
          <div className="glass-content">
            <div className="header">
              <h6 className="caption">What are you looking for?</h6>
              <div className="card">
                <div className="contents">
                  <div className="icons">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="features">
                    <h1>Help me create a Marketing Plan!</h1>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="contents">
                  <div className="icons">
                    <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                  </div>
                  <div className="features">
                    <h1>I know what I am looking for</h1>
                    <p>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src={ikbal} alt="character" className="character" />
            <div className="image">
              <div className="comment">
                <div className="commentcard1">
                  <p>
                    Hi there! Need help in creating Marketing plan for your
                    bussiness? I can help you to create one using{" "}
                    <span>Retink Al engine</span>
                  </p>
                </div>
                <div className="commentcard2">
                  <p>Click on the options to get started</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="ellipse4"></div>
      <div className="ellipse5"></div>
      <div className="ellipse6"></div>
      <div className="ellipse7"></div>
      <div className="ellipse8"></div>
    </div>
  );
}

export default Main;
