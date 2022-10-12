import html from "html-literal";
import facialImage from "/assets/img/facials.jpg";


export default (state) => html`
  <section id="Whyfacial">
    <h2>Why Facials</h2>
    <img class="facial-img" src="${facialImage}"
  alt="This text will show up, only if the image doesn't (also good for screen readers)"/>

    <p id ="facial">
    Facials help to renew skin cells by circulating the blood flow under the skin, which then can decrease
    puffiness and fluid build up that comes from our lymphatic system. Good circulation is important in that it
     brings oxygen, proteins and nutrition to the skin, while ridding our skin of toxins.
     It helps your skin stay in good condition: You're shedding skin cells throughout the day, so it's
      important to keep your skin glowing and in good condition. An effective routine can help prevent acne,
      treat wrinkles, and help
    keep your skin looking its best
    </p>
  </section>
`;
