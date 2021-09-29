import React from "react";
import { AiFillFire } from "react-icons/ai";
import { FaFirefox, FaGripfire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button";
import './Pricing.css'
function Pricing() {
  return (
    <React.Fragment>
      {" "}
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__header">Pricing </h1>
          <div className="pricing__container">
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <AiFillFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>Cash-back</li>
                  <li>Money back guarantee</li>
                  {/*      <FaFirefox /> */}
                  {/* <FaGripfire /> */}

                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <FaFirefox />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>Cash-back</li>
                  <li>Money back guarantee</li>
                  {/*      <FaFirefox /> */}
                  {/* <FaGripfire /> */}

                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  {" "}
                  <FaGripfire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>Cash-back</li>
                  <li>Money back guarantee</li>
                  {/*      <FaFirefox /> */}
                  {/* <FaGripfire /> */}

                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>
          </div>
          

        </div>
      </div>
    </React.Fragment>
  );
}
export default Pricing;
