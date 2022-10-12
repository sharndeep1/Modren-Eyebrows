
import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";



const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });
  if (state.view === "Uservisits") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      //const punch = [];
      // Interate over the punch input group elements
      // for (let input of inputList) {
      //   // If the value of the checked attribute is true then add the value to the punch array
      //   if (input.checked) {
      //     punch.push(input.value);
      //   }
      // }

      const requestData = {

        userName: inputList.username.value,
        phoneNo: inputList.phoneNo.value,
        punch: inputList.stamp.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.PUNCH_API_URL}`, requestData)
        .then(response => {

        })
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  }



router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
// Add a switch case statement to handle multiple routes
switch (view) {
  case "Home":
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`

       )
      .then(response => {
        const kelvinToFahrenheit = kelvinTemp =>
          Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

        store.Home.weather = {};
        store.Home.weather.city = response.data.name;
        store.Home.weather.temp = kelvinToFahrenheit(
          response.data.main.temp
        );
        store.Home.weather.feelsLike = kelvinToFahrenheit(
          response.data.main.feels_like
        );
        store.Home.weather.description = response.data.weather[0].main;

        console.log(response.data);
        done();
      })
      .catch(err => console.log(err));
    break;
    default:
      done();
  }
}
});

router.on({
  "/": () => render(),
  ":view": (params) => {
    let view = capitalize(params.data.view);
    render(store[view]);
  }
}).resolve();
