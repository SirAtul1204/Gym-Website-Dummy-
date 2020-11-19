import React, { Component } from "react";
import img1 from "../../Images/1.jpg";
import img2 from "../../Images/2.jpg";
import img3 from "../../Images/3.jpg";
import img4 from "../../Images/4.jpg";
import img5 from "../../Images/5.jpg";

class Table extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="trainers-table">
          <table>
            <tbody>
              <tr id="trainer-row1">
                <td className="table-image">
                  <img src={img1} alt="image1" />
                  <p>Samantha Joe</p>
                </td>
                <td className="trainer-info">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                  eaque possimus tempore quibusdam nesciunt sequi voluptatum
                  totam dicta blanditiis, quas, quae ullam provident dolor!
                  Sequi?
                </td>
              </tr>
              <tr id="trainer-row2">
                <td className="table-image">
                  <img src={img2} alt="image2" />
                  <p>Brad Pitt</p>
                </td>
                <td className="trainer-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Inventore nostrum, voluptates tenetur sed officiis, explicabo
                  dignissimos ut facere excepturi molestias numquam blanditiis
                  impedit sit fuga!
                </td>
              </tr>
              <tr id="trainer-row3">
                <td className="table-image">
                  <img src={img3} alt="image3" />
                  <p>Jennifer Lopez</p>
                </td>
                <td className="trainer-info">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nostrum similique ipsam distinctio, neque modi a facilis, eum
                  quasi praesentium id magnam vero, mollitia deserunt ab?
                </td>
              </tr>
              <tr id="trainer-row4">
                <td className="table-image">
                  <img src={img4} alt="image4" />
                  <p>Katrina Kaif</p>
                </td>
                <td className="trainer-info">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Earum reprehenderit eligendi officia alias aperiam commodi
                  quos unde voluptas est, beatae labore, placeat iste quis?
                  Incidunt.
                </td>
              </tr>
              <tr id="trainer-row5">
                <td className="table-image">
                  <img src={img5} alt="image5" />
                  <p>Brie Larson</p>
                </td>
                <td className="trainer-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  aliquam sint tempore quaerat minus, quis soluta porro eum.
                  Doloribus cupiditate asperiores harum praesentium? Minima,
                  nobis!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Table;
