import React, { useState } from "react";
import "./newform.css";
import { useDispatch, useSelector } from "react-redux";
import { getBotInformation } from "../../redux/Actions/BotAction";

export default function NewForm() {
  const dispatch = useDispatch();
  const [entryValue, setEntryValue] = useState(0);
  const [margin, setMargin] = useState(0);
  const [stopLoss, setStopLoss] = useState(0);
  const [tp, setTP] = useState(0);
  const [interval, setInterval] = useState("");

  const submit = () => {
    const data = {
      entryValue: entryValue,
      margin: margin,
      stopLoss: stopLoss,
      tp: tp,
      interval: interval,
    };

    dispatch(getBotInformation(data));
  };

  return (
    <div className="newform">
      <div className="first_col_new-form">
        <div className="first-drop-down">
          <span className="type_select">Exchange Select</span>
          <div className="price-row-bottom">
            <span className="price-balance">USD</span>
            <img
              src="https://i.imgur.com/SRLRWBW.png"
              alt=""
              className="dropdownList"
            />
          </div>
        </div>
        <div className="first-drop-down">
          <span className="type_select">API Secret</span>
          <div className="price-row-bottom">
            <span className="price-balance">DEXtre</span>
            <img
              src="https://i.imgur.com/SRLRWBW.png"
              alt=""
              className="dropdownList"
            />
          </div>
        </div>
      </div>
      <div className="body_new_form">
        <div className="first_col_second_col">
          <span className="form-span-name">Entry Value</span>
          <input
            type="text"
            className="first_col_second_col_input"
            value={entryValue}
            onChange={(e) => setEntryValue(e.target.value)}
          />
          <span className="form-span-name">Margin</span>
          <input
            type="text"
            className="first_col_second_col_input"
            value={margin}
            onChange={(e) => setMargin(e.target.value)}
          />
          <span className="form-span-name">SL</span>
          <input
            type="text"
            className="first_col_second_col_input"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
          />
          <span className="form-span-name">TP</span>
          <input
            type="text"
            className="first_col_second_col_input"
            value={tp}
            onChange={(e) => setTP(e.target.value)}
          />
          <span className="form-span-name">Candle Time</span>
          <input
            type="text"
            className="first_col_second_col_input"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
          />
          <button onClick={() => submit()}>Submit</button>
        </div>

        <div className="first_col_second_col">
          <span className="first_col_second_col_title">Describe the page</span>
          <span className="first_col_second_col_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </span>
        </div>
      </div>
    </div>
  );
}
