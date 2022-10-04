import html from "html-literal";

export default (state) => html`
  <section id="creative">
  <h1 class ="creative" align = center>perfect skin by sharn</h1>
  <h2 align = center> The beauty skin </h2>
  </section>

  <section>
    <img src="./img/homepic.jpg"  id="image" alt="This text will show up, only if the image doesn't (also good for screen readers)"/>
    </section>
    <h3 align = center> about us </h3>
    <section>
    <p id="good">
    we  are focused on providing high quality services  and customer satisfaction. I started my career in the aesthetics industry about eight years ago.
    we are providing facial,threading  and waxing services.we are using herbal products in facials.
    Threading has been used  to  remove unwanted hair  since ancient times.
    The method of hair removal is more effective and less painful then tweezing and waxing.
    It is longer lasting and more sanitary then using a razer blade and wax.
    It can be used on any part of the face and body. the process only takes 3-5 mins.
    <p>
  </section>
  <h3>
  The weather in ${state.weather.city} is ${state.weather.description}.
  Temperature is ${state.weather.temp}F, and it feels like
  ${state.weather.feelsLike}F.
  </h3>
`;
