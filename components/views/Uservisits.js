import html from "html-literal";

export default (state) => html`
  <section id="UserVisit">
    <form id="punch" method="POST" action="">
      <h2>Get A Punch</h2>
      <div>
        <label for="stamp">Stamp:</label>
        <select id="stamp" name="stamp">
          <option value="">Select a Services</option>
          <option value="Threading">Eyebrows</option>
          <option value="Facials">facial</option>
          <option value="waxing">waxing</option>
        </select>
      </div>


      <div>
        <label for="stamp">Get A Stamp</label>
        <input
          type="checkbox"
          id="id_of_checkbox1"
          class="items1"
          name="Get A Stamp"
          value="stamp"
        />
        <input type="submit" name="submit" value="Submit punch" />
      </form>
    </section>
`;
