import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="whatWeDoBody">
      <section className="whatWeDoWrap">
        <div className="whatWeDoLeft">
          <h2>What We Do…</h2>
          <section className="textUp">
            <h4>
              Our activities span the entire spectrum of the <br /> downstream
              sector of the oil and gas industry.
            </h4>
            <span>
              We offer one of the largest offshore liquid bulk terminals
              (SPM/CBM) in Africa to <br /> provide efficient discharge of
              products for operators, complemented by world <br /> class storage
              facilities and retail outlets/channels in all six geopolitical
              zones in <br /> Nigeria
            </span>
          </section>
          <p>
            We continually develop strategic infrastructure to facilitate the
            operational efficiency of our integrated bouquet of services.
          </p>
          <section className="hrLine"></section>
          <article className="whatWeDoLeftbtn">
            <section className="whatWeDoLeftbtn1">
              <a href="/contact">
                <span>Contact Us</span>
              </a>
            </section>
            <section className="whatWeDoLeftbtn2">
              <a href="/product">
                <span>Order Products Online</span>
              </a>
            </section>
           
          </article>
        </div>

        <div className="whatWeDoRight">
            
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
