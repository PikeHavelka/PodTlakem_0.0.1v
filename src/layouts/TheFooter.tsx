import "./TheFooter.scss"
import brands from "../data/BrandIcons"
import ContactForm from "../components/ContactForm"

function TheFooter() {
  return <footer>
    <div className="overlay">
      <div className="container">
        <div className="header">
          <h1>Při naší práci používáme jen ověřené a kvalitní produkty od známých značek.</h1>
        </div>

        <div className="brands">
          {brands.map((oneBrand) => {
            return <div className="oneBrand" key={oneBrand.id}>
              <img src={oneBrand.name} alt={oneBrand.alt} />
            </div>
          })}
        </div>

      <div id="kontakt" className="contact-row">
        <div className="contact-info">
          <div className="phone">
            <h4>Telefon</h4>
            <a href="tel: +420 732 531 018">+420 732 531 018</a>
          </div>

          <div className="invoice-info">
            <h4>Fakturační údaje</h4>
              <p>Infernal Trans s.r.o.</p>
              <p>IČO: 08409153</p>
              <p>Bílkova 855/19, Staré Město, 110 00 Praha</p>
          </div>

          <div className="email">
            <h4>Email</h4>
            <a href="mailto:INFO@POD-TLAKEM.CZ">INFO@POD-TLAKEM.CZ</a>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className="footer">
        <p> &copy; 2023 All rights reserved</p>
        <a href="https://www.flaticon.com/">Icons created by Designer Shah - Flaticon</a>
      </div>

      </div>
    </div>
  </footer>
}

export default TheFooter