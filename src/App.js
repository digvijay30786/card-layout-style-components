import "./styles.css";
import { useState } from "react";
import styled from "styled-components";
import { Card } from "./components/card";
export default function App() {
  const Wrapper = styled.div`
    width: 100%;
    min-height: 500px;
    margin-top: 80px;
    margin-botom: 100px;
    display: flex;
  `;

  const FormDesign = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    margin-botom: 20px;
    height: 100%;
    justify-content: center;

    input {
      width: 100%;
      margin-top: 10px;
      margin-botoom: 10px;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      border: none;
      outline: none;
      color: hotpink;
      font-weight: 600;
    }

    form > div {
      margin: 10px;
    }
    form > div > div {
      display: flex;
      align-items: center;
      border-bottom: 2px solid hotpink;
    }

    form > div > div > img {
      height: 22px;
      margin-top: 10px;
    }

    form > .secretDetails > div > div {
      display: flex;
      align-items: center;
    }

    form > .secretDetails > div > div > img {
      height: 22px;
      margin-top: 10px;
    }

    form > .secretDetails > div > img {
      height: 22px;
      margin-top: 10px;
    }

    form > .secretDetails {
      display: flex;
      column-gap: 30px;
      margin-top: 30px;
    }
    form > .secretDetails > div {
      display: flex;
      flex-direction: column;
    }

    form > div > label {
      margin-botom: 60px;
    }
  `;

  const ButtonDesign = styled.div`
    text-align: center;
    h4 {
      font-size: 18px;
    }

    button {
      background-color: hotpink;
      padding: 10px 70px;
      color: white;
      font-weight: 600;
      font-size: 23px;
      border: none;
      border-radius: 30px;
    }
  `;

  const Pink = styled.span`
    color: hotpink;
  `;

  const Cardtemp = styled.div`
    width: 100%;
    height: 59%;
    background-image: linear-gradient(to top right, pink, hotpink);
    border-radius: 20px;
    padding: 25px;
    box-sizing: border-box;

    flex-direction: column;
    justify-content: flex-start;
    row-gap: 2px;
    .first:nth-child(1) {
      display: flex;
      justify-content: flex-end;
    }
    .last {
      display: flex;
      column-gap: 20px;
      font-weight: 600;
      color: white;
    }
  `;

  const CardNumber = styled.p`
    font-family: fangsong;
    font-size: 25px;
    font-weight: 600;
    color: white;
  `;

  return (
    <div className="App">
      <Wrapper>
        <Card>
          <FormDesign>
            <Cardtemp>
              <div className="first">
                <img src="https://i.imgur.com/bfRkDIV.png" height="45px" />
              </div>
              <div>
                <img
                  src="https://i.imgur.com/55JYWPh.png"
                  height="50px"
                  width="50px"
                />
              </div>
              <div>
                <CardNumber>4256 1234 1234 1234</CardNumber>
              </div>
              <div className="last">
                <div>
                  <p>Card Holders</p>
                  <p>Digvijay Singh</p>
                </div>
                <div>
                  <p>Expiry</p>
                  <p>09/24</p>
                </div>
                <div>
                  <p>CVV</p>
                  <p>123</p>
                </div>
              </div>
            </Cardtemp>
          </FormDesign>
        </Card>
        <Card>
          <FormDesign>
            <p>Payments Details</p>
            <form>
              <div>
                <label Htmlfor="cardholder">Card Holders Name</label>
                <div>
                  <img src="https://i.imgur.com/TidoEPH.png" />
                  <input
                    type="text"
                    placeholder="John Smith"
                    name="cardholderName"
                  />
                </div>
              </div>
              <div>
                <label Htmlfor="cardNumber">Card Number</label>
                <div>
                  <img src="https://i.imgur.com/OhHX1EQ.png" />
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    name="cardNumber"
                    maxlength="19"
                  />
                </div>
              </div>
              <div className="secretDetails">
                <div>
                  <label Htmlfor="expiryMonth">Expiry Month</label>
                  <div>
                    <img src="https://i.imgur.com/a81dol6.png" />
                    <input
                      type="text"
                      placeholder="12"
                      maxlength="2"
                      name="expiryMonth"
                    />
                  </div>
                </div>
                <div>
                  <label Htmlfor="expiryYear">Expiry Year</label>
                  <div>
                    <img src="https://i.imgur.com/iLeQAnW.png" />
                    <input
                      type="text"
                      placeholder="2035"
                      maxlength="4"
                      name="expiryYear"
                    />
                  </div>
                </div>
                <div>
                  <label Htmlfor="cvv">CVV</label>
                  <div>
                    <img src="https://i.imgur.com/PKR8dTq.png" />
                    <input
                      type="text"
                      maxlength="3"
                      placeholder="123"
                      name="cvv"
                    />
                  </div>
                </div>
              </div>
              <ButtonDesign>
                <h4>
                  Payment Amount : <Pink>2500</Pink>
                </h4>
                <button>Pay</button>
              </ButtonDesign>
            </form>
          </FormDesign>
        </Card>
      </Wrapper>
    </div>
  );
}
