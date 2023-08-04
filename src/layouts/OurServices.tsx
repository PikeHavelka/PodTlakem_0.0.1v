import "./OurServices.scss"

function OurServices() {
  return <section id="naše_služby" className="our-services">
    <div className="container">
      <div className="header">
        <h1>Co poskytujeme?</h1>
        <h3>Klademe maximální důraz na kvalitní a čistou práci.</h3>
      </div>

      <div className="cards-container-row">
        <div className="card">
          <div className="number-card">
            <span>01</span>
          </div>

          <div className="title">
            <h3>Specializujeme se na čištění</h3>
          </div>

          <div className="text">
            <p>Fasád, střech a kamenných povrchů jako jsou zámkové dlažby, ztracené bednění a okrasný kámen. Také v nabídce služeb máme i čištění okapů a solárních panelů.</p>
          </div>

          <div className="price">
            <p>Cena za m<sup>2</sup> od</p>
            <span>40,-kč</span>
          </div>
        </div>

        <div className="card">
          <div className="number-card">
            <span>02</span>
          </div>

          <div className="title">
            <h3>Natírání a impregnování</h3>
          </div>

          <div className="text">
            <p>Natřeme, nebo naimpregnujeme Váš dům, panelák či jinou nemovitost odspodu až po komín dle Vaších požadavků.</p>
          </div>

          <div className="price">
            <p>Cena za m<sup>2</sup> od</p>
            <span>40,-kč</span>
          </div>
        </div>

        <div className="card">
          <div className="number-card">
            <span>03</span>
          </div>

          <div className="title">
            <h3>Výškové práce</h3>
          </div>

          <div className="text">
            <p>Přijímáme různorodé zakázky na vykonání výškových prací - kde je zapotřebí použití lezeckých prostředků.</p>
          </div>

          <div className="price">
            <p>Cena za práci lezce od </p>
            <span>650,-kč/hod</span>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default OurServices