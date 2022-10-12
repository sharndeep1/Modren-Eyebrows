import html from "html-literal";

export default (state) => html`
  <section id="Uservisits">
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
      <label for="UserName">UserName:</label>
        <input
          type="text"
          name="username"
          id="name"
          placeholder="Enter UserName"
          required
        />
      </div>
      <div>
        <label for="PhoneNo">PhoneNo:</label>
        <input
          type="tel"
          name="phoneNo"
          id="phoneno"
          placeholder="Enter User Phone No"
          required
        />
        </div>
        <input type="submit" name="submit" value="Submit punch" />
      </form>
    </section>
`;
// import html from "html-literal";

// export default () => html`
//   <form id="order" method="POST" action="">
//     <h2>Order a pizza</h2>
//     <div>
//       <label for="crust">Crust:</label>
//       <select id="crust" name="crust">
//         <option value="">Select a Crust</option>
//         <option value="thin">Thin</option>
//         <option value="chicago">Chicago</option>
//         <option value="deep-dish">Deep Dish</option>
//         <option value="thick">Thick</option>
//         <option value="hella-thick">Hella Thick</option>
//       </select>
//     </div>
//     <div>
//       <label for="cheese">Cheese:</label>
//       <input
//         type="text"
//         name="cheese"
//         id="cheese"
//         placeholder="Enter Cheese"
//         required
//       />
//     </div>
//     <div>
//       <label for="sauce">Sauce:</label>
//       <input
//         type="text"
//         name="sauce"
//         id="sauce"
//         placeholder="Enter Sauce"
//         required
//       />
//     </div>
//     <input type="submit" name="submit" value="Submit Pizza" />
//   </form>
// `;
