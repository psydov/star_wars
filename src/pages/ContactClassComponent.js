import React from "react";
import { BASE_URL, month } from "../utils/constants";

class ContactClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      isLoading: true,
    };
  }
  //   const [planets, setPlanets] = useState([]);

  async fetchPlanets() {
    const response = await fetch(`${BASE_URL}/v1/planets`);
    const data = await response.json();
    const planets = data.map((planet) => planet.name);
    this.setState({ planets, isLoading: false });
    const info = {
      payload: planets,
      time: Date.now(),
    };
    localStorage.setItem("planets", JSON.stringify(info));
  }

  componentDidMount() {
    // console.log(this.props);
    const planets = JSON.parse(localStorage.getItem("planets"));
    planets && Date.now() - planets.time < month
      ? this.setState({ ...this.state, planets: planets.payload, isLoading: false })
      : this.fetchPlanets();
    console.log(localStorage.getItem("planets"));
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return this.state.isLoading ? (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    ) : (
      <form className="d-flex flex-column" onSubmit={(e) => e.preventDefault()}>
        <label>
          {" "}
          First Name:
          <input type="text" name="firstName" placeholder="Your name..." />
        </label>
        <label>
          {" "}
          Planet:
          <select name="planet">
            {this.state.planets.map((planetName, index) => (
              <option key={index} value={planetName}>
                {planetName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Subject
          <textarea name="subject" placeholder="Write something..." />
        </label>
        <button className="w-25" type="submit">
          Send Form
        </button>
      </form>
    );
  }
}

export default ContactClassComponent;
