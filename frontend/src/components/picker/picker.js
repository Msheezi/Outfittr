import React from 'react';
import GarmentBox from '../garments/garment_box';

class AddTop extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          color: "white",
          hot: true,
          formal: false,
          wet: false,
          athleisure: false  
      }
      document.title = 'pickr @ outfittr'
      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentDidMount(){
    this.props.fetchUserTops(this.props.currentUser.id);
    this.props.fetchUserPants(this.props.currentUser.id);
  }
  handleSubmit(e) {
    e.preventDefault();
    let fit = {
      name: this.state.name,
      color: this.state.color,
      hot: this.state.hot,
      formal: this.state.formal,
      wet: this.state.wet,
      athleisure: this.state.athleisure
    };

    // this.props.composeFit(fit); 
    // this.setState({name: ''});
    // window.location.reload();
  }

  updateName() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }
  updateColor() {
    return e => this.setState({
      color: e.currentTarget.value
    });
  }
  updateCold() {
    return e => this.setState({
      hot: !e.currentTarget.checked
    });
  }
  updateFormal() {
    return e => this.setState({
      formal: e.currentTarget.checked
    });
  }
  updateWet() {
    return e => this.setState({
      wet: e.currentTarget.checked
    });
  }
  updateAthleisure() {
    return e => this.setState({
      athleisure: e.currentTarget.checked
    });
  }

  render() {
    return (
      <div className="picker-page">
        {/* <div className="create-form"> */}
          {/* <form onSubmit={this.handleSubmit}>
            <input type="text"
              className="clothing-input"
              value={this.state.name}
              onChange={this.updateName()}
              placeholder="Name your outfit"
            />
            <select className="garment-checkbox" className="color-btn" value={this.state.color} onChange={this.updateColor()}>
              <option value="white">white</option>
              <option value="red">red</option>
              <option value="orange">orange</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
              <option value="indigo">indigo</option>
              <option value="violet">violet</option>
              <option value="black">black</option>
            </select>
            <div className="radios">
              <div className="form-left">
                <label>
                  Hot?
                    <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateCold()}
                    checked={!this.state.hot}
                  />
                </label>
                <label>
                  Formal?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateFormal()}
                    checked={this.state.formal}
                  />
                </label>
              </div>
              <div className="form-right">
                <label>
                  Athleisure?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateAthleisure()}
                    checked={this.state.athleisure}
                  />
                </label>
                <label>
                  Rain?
                  <input type="checkbox"
                    className="garment-checkbox"
                    onChange={this.updateWet()}
                    checked={this.state.wet}
                  />
                </label>
              </div>
            </div>
            <input className="submit-btn" type="submit" value="Submit" />
          </form> */}
        {/* </div> */}
        <br />
        <select className="garment-checkbox" className="color-btn" value={this.state.color} onChange={this.updateColor()}>
          <option value="white">white</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
          <option value="indigo">indigo</option>
          <option value="violet">violet</option>
          <option value="black">black</option>
        </select>
        <div className="garment-container">
          <div className="demo-item">
            <GarmentBox
              name={this.state.name}
              color={this.state.color}
              type="top"
            />
          </div>
          <br/>
          {/* {this.props.tops.map(top => (
            <div className="garment-item">
              <GarmentBox
                key={top._id}
                name={top.name}
                color={top.color}
                type="top"
              />
            </div>
          ))} */}
        </div>
      </div>
    )
  }
}

export default AddTop;
