import html from "html-literal";

export default (state) => html`
  <section id="service">
  <div class= "allTables">
  <div>
  <table id="services1" border="1">
  <caption><b>Threading</b></caption>
    <tr>
      <th>Services</th>
      <th>Prices</th>
    </tr>
    <tr>
      <td> Eyebrow</td>
      <td> $12 </td>
    </tr>
    <tr>
      <td> Eyebrow Tinting </td>
      <td> $12 </td>
    </tr>
    <tr>
      <td> UpperLip</td>
      <td> $6 </td>
    </tr>
    <tr>
      <td>LowerLip </td>
      <td> $3</td>
    </tr>
    <tr>
      <td>chin</td>
      <td> $6 </td>
    </tr>
    <tr>
      <td>Sideburns </td>
      <td> $16 </td>
    </tr>
    <tr>
      <td>Neck</td>
      <td> $6 </td>
    </tr>
    <tr>
      <td>Full Face</td>
      <td> $40 </td>
    </tr>
  </table>
  </div>
  <div>
    <table id="services" border="1">
    <caption><b>Facials</b></caption>
      <tr>
        <th>facial_name </th>
        <th> skin_type  </th>
        <th> price </th>
      </tr>
      <tr>
        <td> De-tan facial</td>
        <td> oily skin  </td>
        <td> $70 </td>
      </tr>
      <tr>
        <td> Diamond facial</td>
        <td>normal skin </td>
        <td> $100 </td>
      </tr>
      <tr>
        <td> Skin lightening facial</td>
        <td> dry skin  </td>
        <td> $90 </td>
      </tr>
      <tr>
        <td> Wine facial</td>
        <td> skin elasticity </td>
        <td> $150</td>
      </tr>
      <tr>
        <td> Ultra hydrating facial</td>
        <td> heat fatigued skin  </td>
        <td> $130</td>
      </tr>
      <tr>
        <td> SensiGlow facial</td>
        <td>  sensitive skin  </td>
        <td> $120 </td>
      </tr>
      <tr>
        <td> Anti-ageing facial</td>
        <td> normal skin  </td>
        <td> $70 </td>
      </tr>
      <tr>
      <td>Gold facial</td>
      <td>normal skin  </td>
      <td> $90 </td>
    </table>
    </div>

    <div>
    <table id="services2" border="1">
    <caption><b> Waxing </b></caption>
      <tr>
        <th>Services</th>
        <th>Prices</th>
      </tr>
      <tr>
        <td>Arms</td>
        <td> $30 </td>
      </tr>
      <tr>
        <td>Full Legs</td>
        <td> $45 </td>
      </tr>
      <tr>
        <td>Half Legs</td>
        <td> $30</td>
      </tr>
      <tr>
        <td>Eyebrows</td>
        <td> $12 </td>
      </tr>
      <tr>
        <td> UnderArms</td>
        <td> $25 </td>
      </tr>
      <tr>
        <td>UpperLip</td>
        <td> $6 </td>
      </tr>
      <tr>
        <td>Full body</td>
        <td> $120 </td>
      </tr>
      <tr>
        <td>FullFace</td>
        <td> $40 </td>
      </tr>
    </table>
    </div>
    </div>
  </section>
`;
