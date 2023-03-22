import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CandleStickCharts from "./CandleStickChart";
import "./signals.css";
import { useDispatch, useSelector } from "react-redux";
import { getBotDetails } from "../../redux/Actions/BotAction";
import axios from "axios";
import Chart from "../chart/Chart";
import moment from "moment";

// API key: RRJ2Q6I992MMMY1AGZ677TGN34JWI8ME64
//

const options_candles = [
  "5m",
  "15m",
  "30m",
  "1h",
  "2h",
  "4h",
  "6h",
  "8h",
  "12h",
  "1d",
];

const strategy_options = [
  "StochRSIMACD",
  "tripleEMA",
  "goldenCross",
  "MACD",
  "stochBB",
];

const TP_SL_options = [
  "%",
  "x (ATR)",
  "x (Swing High/Low) level 1",
  "x (Swing Close) level 1",
  "x (Swing High/Low) level 2",
  "x (Swing Close) level 2",
  "x (Swing High/Low) level 3",
  "x (Swing Close) level 3",
];

export default function Signls() {
  const botDetails = useSelector((state) => state.botReducer);
  const [runResult, setRunResult] = useState(false);
  const [tradeDetails, setTradeDetails] = useState([]);
  const [buffer, setBuffer] = useState("2 days ago");
  const [trialStop, setTrialStop] = useState(false);
  const [marketOrders, setMarketOrders] = useState(false);
  const [tradeCoins, setTradeCoins] = useState(false);
  const [stopLoss, setStopLoss] = useState(1);
  const [tp, setTP] = useState(1.5);
  const [pricePair, setPricePair] = useState("");
  // const [tradeCount, setTradeCount] = useState(0);
  const navigate = useHistory();

  // const [time_interval, setTimeInterval] = useState("");
  const token = window.sessionStorage.getItem("token");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [checkSubcription, setCheckSubscription] = useState(false);
  const [user, setUser] = useState(null);

  const [tradeCount, setTradeCount] = useState(6);
  const [apiKey, setAPIKEY] = useState();
  const [tradingThreshold, setTradingThreshold] = useState(0.1);
  const [trailingRate, setTrailingRate] = useState(0.0);
  const [apiSecret, setAPISecret] = useState();
  const [leverage, setLeverage] = useState(10);
  const [strategy, setStrategy] = useState(strategy_options[0]);
  const [time_interval, setTimeInterval] = useState(options_candles[0]);
  const [tpsl, setTPSL] = useState(TP_SL_options[0]);
  const [orderSize, setOrderSize] = useState(2.5);
  const [tradedata, setTradeData] = useState([]);

  useEffect(() => {
    if (token == null) {
      navigate.push("/login");
    } else {
      const id = window.sessionStorage.getItem("userId");
      const current = new Date();

      axios
        .get(`${process.env.REACT_APP_AXIOS_URL}/api/v1/user/${id}`)
        .then((response) => {
          setUser(response.data.data);
          if (response.data.data?.subscribe) {
            setCheckSubscription(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const run_bot = async () => {
    const id = window.sessionStorage.getItem("userId");

    const data = {
      privateKey: apiKey,
      secrete: apiSecret,
    };

    await axios
      .patch(
        `${process.env.REACT_APP_AXIOS_URL}/api/v1/user/traupt/${id}`,
        data
      )
      .then((res) => {
        console.log("update private key and secret");
      });

    if (strategy == "StochRSIMACD") {
      const data = {
        userID: window.sessionStorage.getItem("userId"),
        APIKEY: apiKey,
        APISECRET: apiSecret,
        leverage: leverage,
        orderSize: orderSize,
        buffer: buffer,
        interval: time_interval,
        tradeCount: tradeCount,
        use_trail_stop: trialStop,
        trailingRate: trailingRate,
        symbol: pricePair,
        strategy: strategy,
        tpsl: tpsl,
        sl: stopLoss,
        tp: tp,
        tradeAll: tradeCoins,
        marketOrder: marketOrders,
        tradingThreshold: tradingThreshold,
      };

      setRunResult(true);
      window.sessionStorage.setItem("isBotRun", true);

      let bot_results = [];

      await axios
        .post(
          `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/macdnrsi`,
          data
        )
        .then((res) => {
          if (res.data.entry === true) {
            bot_results.push(res.data.data);
            setTradeDetails((tradeDetails) => [res.data.data, ...tradeDetails]);
          } else {
            console.log("not trade");
          }
        });

      const basicInterval = setInterval(() => {
        const data = {
          userID: window.sessionStorage.getItem("userId"),
          APIKEY: apiKey,
          APISECRET: apiSecret,
          leverage: leverage,
          orderSize: orderSize,
          buffer: buffer,
          interval: time_interval,
          tradeCount: tradeCount,
          use_trail_stop: trialStop,
          trailingRate: trailingRate,
          symbol: pricePair,
          strategy: strategy,
          tpsl: tpsl,
          sl: stopLoss,
          tp: tp,
          tradeAll: tradeCoins,
          marketOrder: marketOrders,
          tradingThreshold: tradingThreshold,
        };

        window.sessionStorage.setItem("interval", basicInterval);

        axios
          .post(
            `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/macdnrsi`,
            data
          )
          .then((res) => {
            if (res.data.entry === true) {
              bot_results.push(res.data.data);
              setTradeDetails((tradeDetails) => [
                res.data.data,
                ...tradeDetails,
              ]);
            } else {
              console.log("not trade");
            }
          });
      }, 60000);
    } else if (strategy == "tripleEMA") {
      const data = {
        userID: window.sessionStorage.getItem("userId"),
        APIKEY: apiKey,
        APISECRET: apiSecret,
        leverage: leverage,
        orderSize: orderSize,
        buffer: buffer,
        interval: time_interval,
        tradeCount: tradeCount,
        use_trail_stop: trialStop,
        trailingRate: trailingRate,
        symbol: pricePair,
        strategy: strategy,
        tpsl: tpsl,
        sl: stopLoss,
        tp: tp,
        tradeAll: tradeCoins,
        marketOrder: marketOrders,
        tradingThreshold: tradingThreshold,
      };

      setRunResult(true);
      window.sessionStorage.setItem("isBotRun", true);

      let bot_results = [];

      await axios
        .post(
          `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/tripleema`,
          data
        )
        .then((res) => {
          if (res.data.entry === true) {
            bot_results.push(res.data.data);
            setTradeDetails((tradeDetails) => [res.data.data, ...tradeDetails]);
          } else {
            console.log("not trade");
          }
        });

      const basicInterval = setInterval(() => {
        const data = {
          userID: window.sessionStorage.getItem("userId"),
          APIKEY: apiKey,
          APISECRET: apiSecret,
          leverage: leverage,
          orderSize: orderSize,
          buffer: buffer,
          interval: time_interval,
          tradeCount: tradeCount,
          use_trail_stop: trialStop,
          trailingRate: trailingRate,
          symbol: pricePair,
          strategy: strategy,
          tpsl: tpsl,
          sl: stopLoss,
          tp: tp,
          tradeAll: tradeCoins,
          marketOrder: marketOrders,
          tradingThreshold: tradingThreshold,
        };

        window.sessionStorage.setItem("interval", basicInterval);

        axios
          .post(
            `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/tripleema`,
            data
          )
          .then((res) => {
            if (res.data.entry === true) {
              console.log(res.data.data);
              bot_results.push(res.data.data);
              setTradeDetails((tradeDetails) => [
                res.data.data,
                ...tradeDetails,
              ]);
            } else {
              console.log("not trade");
            }
          });
      }, 60000);
    } else if (strategy == "goldenCross") {
      const data = {
        userID: window.sessionStorage.getItem("userId"),
        APIKEY: apiKey,
        APISECRET: apiSecret,
        leverage: leverage,
        orderSize: orderSize,
        buffer: buffer,
        interval: time_interval,
        tradeCount: tradeCount,
        use_trail_stop: trialStop,
        trailingRate: trailingRate,
        symbol: pricePair,
        strategy: strategy,
        tpsl: tpsl,
        sl: stopLoss,
        tp: tp,
        tradeAll: tradeCoins,
        marketOrder: marketOrders,
        tradingThreshold: tradingThreshold,
      };

      setRunResult(true);
      window.sessionStorage.setItem("isBotRun", true);

      let bot_results = [];

      await axios
        .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/trade`, data)
        .then((res) => {
          if (res.data.entry === true) {
            console.log(res.data.data);
            bot_results.push(res.data.data);
            setTradeDetails((tradeDetails) => [res.data.data, ...tradeDetails]);
          } else {
            console.log("not trade");
          }
        });

      const basicInterval = setInterval(() => {
        const data = {
          userID: window.sessionStorage.getItem("userId"),
          APIKEY: apiKey,
          APISECRET: apiSecret,
          leverage: leverage,
          orderSize: orderSize,
          buffer: buffer,
          interval: time_interval,
          tradeCount: tradeCount,
          use_trail_stop: trialStop,
          trailingRate: trailingRate,
          symbol: pricePair,
          strategy: strategy,
          tpsl: tpsl,
          sl: stopLoss,
          tp: tp,
          tradeAll: tradeCoins,
          marketOrder: marketOrders,
          tradingThreshold: tradingThreshold,
        };

        window.sessionStorage.setItem("interval", basicInterval);

        axios
          .post(
            `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/trade`,
            data
          )
          .then((res) => {
            if (res.data.entry === true) {
              bot_results.push(res.data.data);
              setTradeDetails((tradeDetails) => [
                res.data.data,
                ...tradeDetails,
              ]);
            } else {
              console.log("not trade");
            }
          });
      }, 60000);
    } else if (strategy == "MACD") {
      const data = {
        userID: window.sessionStorage.getItem("userId"),
        APIKEY: apiKey,
        APISECRET: apiSecret,
        leverage: leverage,
        orderSize: orderSize,
        buffer: buffer,
        interval: time_interval,
        tradeCount: tradeCount,
        use_trail_stop: trialStop,
        trailingRate: trailingRate,
        symbol: pricePair,
        strategy: strategy,
        tpsl: tpsl,
        sl: stopLoss,
        tp: tp,
        tradeAll: tradeCoins,
        marketOrder: marketOrders,
        tradingThreshold: tradingThreshold,
      };

      setRunResult(true);
      window.sessionStorage.setItem("isBotRun", true);

      let bot_results = [];

      await axios
        .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/macd`, data)
        .then((res) => {
          if (res.data.entry === true) {
            bot_results.push(res.data.data);
            setTradeDetails((tradeDetails) => [res.data.data, ...tradeDetails]);
          } else {
            console.log("not trade");
          }
        });

      const basicInterval = setInterval(() => {
        const data = {
          userID: window.sessionStorage.getItem("userId"),
          APIKEY: apiKey,
          APISECRET: apiSecret,
          leverage: leverage,
          orderSize: orderSize,
          buffer: buffer,
          interval: time_interval,
          tradeCount: tradeCount,
          use_trail_stop: trialStop,
          trailingRate: trailingRate,
          symbol: pricePair,
          strategy: strategy,
          tpsl: tpsl,
          sl: stopLoss,
          tp: tp,
          tradeAll: tradeCoins,
          marketOrder: marketOrders,
          tradingThreshold: tradingThreshold,
        };

        window.sessionStorage.setItem("interval", basicInterval);

        axios
          .post(`${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/macd`, data)
          .then((res) => {
            if (res.data.entry === true) {
              bot_results.push(res.data.data);
              setTradeDetails((tradeDetails) => [
                res.data.data,
                ...tradeDetails,
              ]);
            } else {
              console.log("not trade");
            }
          });
      }, 60000);
    } else if (strategy == "stochBB") {
      const data = {
        userID: window.sessionStorage.getItem("userId"),
        APIKEY: apiKey,
        APISECRET: apiSecret,
        leverage: leverage,
        orderSize: orderSize,
        buffer: buffer,
        interval: time_interval,
        tradeCount: tradeCount,
        use_trail_stop: trialStop,
        trailingRate: trailingRate,
        symbol: pricePair,
        strategy: strategy,
        tpsl: tpsl,
        sl: stopLoss,
        tp: tp,
        tradeAll: tradeCoins,
        marketOrder: marketOrders,
        tradingThreshold: tradingThreshold,
      };

      setRunResult(true);
      window.sessionStorage.setItem("isBotRun", true);

      let bot_results = [];

      await axios
        .post(
          `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/stochbb`,
          data
        )
        .then((res) => {
          if (res.data.entry === true) {
            bot_results.push(res.data.data);
            setTradeDetails((tradeDetails) => [res.data.data, ...tradeDetails]);
          } else {
            console.log("not trade");
          }
        });

      const basicInterval = setInterval(() => {
        const data = {
          userID: window.sessionStorage.getItem("userId"),
          APIKEY: apiKey,
          APISECRET: apiSecret,
          leverage: leverage,
          orderSize: orderSize,
          buffer: buffer,
          interval: time_interval,
          tradeCount: tradeCount,
          use_trail_stop: trialStop,
          trailingRate: trailingRate,
          symbol: pricePair,
          strategy: strategy,
          tpsl: tpsl,
          sl: stopLoss,
          tp: tp,
          tradeAll: tradeCoins,
          marketOrder: marketOrders,
          tradingThreshold: tradingThreshold,
        };

        window.sessionStorage.setItem("interval", basicInterval);

        axios
          .post(
            `${process.env.REACT_APP_AXIOS_URL}/api/v1/strategy/stochbb`,
            data
          )
          .then((res) => {
            if (res.data.entry === true) {
              bot_results.push(res.data.data);
              setTradeDetails((tradeDetails) => [
                res.data.data,
                ...tradeDetails,
              ]);
            } else {
              console.log("not trade");
            }
          });
      }, 60000);
    }
  };

  const stop_bot = () => {
    setRunResult(false);
    let interval = window.sessionStorage.getItem("interval");

    clearInterval(interval);
    interval = undefined;
    window.sessionStorage.removeItem("interval");
    window.sessionStorage.setItem("isBotRun", false);
  };

  return (
    <div className="animate__animated animate__fadeInLeft signlas_componet">
      <div className="column-two">
        <Chart />
        <div className="control-bar">
          <div className="first_col_second_cols">
            <div className="form_info">
              <div className="div_lable_go_top">
                <span className="form-span-name">API Key</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={apiKey}
                  onChange={(e) => setAPIKEY(e.target.value)}
                />
              </div>
              <div className="div_lable_go_top">
                <span className="form-span-name">API Secret</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={apiSecret}
                  onChange={(e) => setAPISecret(e.target.value)}
                />
              </div>
            </div>
            <div className="form_info">
              <div className="div_lable_go_top">
                <span className="form-span-name">Price Pair</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={pricePair}
                  onChange={(e) => setPricePair(e.target.value)}
                />
              </div>
              <div className="div_lable_go_top">
                <span className="form-span-name">Trade Count</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={tradeCount}
                  onChange={(e) => setTradeCount(e.target.value)}
                />
              </div>
            </div>
            <div className="form_info">
              <div className="div_lable_go_top">
                <span className="form-span-name">Buffer</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={buffer}
                  onChange={(e) => setBuffer(e.target.value)}
                />
              </div>
              <div className="div_lable_go_top">
                <span className="form-span-name">Leverage</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={leverage}
                  onChange={(e) => setLeverage(e.target.value)}
                />
              </div>
            </div>
            <div className="form_info">
              <div className="div_lable_go_top">
                <span className="form-span-name">Order Size(% of account)</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={orderSize}
                  onChange={(e) => setOrderSize(e.target.value)}
                />
              </div>
              <div className="div_lable_go_top">
                <span className="form-span-name">Trading Threshold(%)</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={tradingThreshold}
                  onChange={(e) => setTradingThreshold(e.target.value)}
                />
              </div>
            </div>
            <div className="div_lable_go_top_new">
              <span className="form-span-name">
                Trailing Stop Callback Rate(%)
              </span>
              <input
                type="text"
                className="first_col_second_cols_input"
                defaultValue={trailingRate}
                onChange={(e) => setTrailingRate(e.target.value)}
              />
            </div>
            <div className="form_info">
              <div className="div_lable_go_top">
                <span className="form-span-name">Stop Loss</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                />
              </div>
              <div className="div_lable_go_top">
                <span className="form-span-name">Take Profit</span>
                <input
                  type="text"
                  className="first_col_second_cols_input"
                  defaultValue={tp}
                  onChange={(e) => setTP(e.target.value)}
                />
              </div>
            </div>
            <select
              className="select_input"
              value={tpsl}
              onChange={(e) => setTPSL(e.target.value)}
            >
              {TP_SL_options.map((value) => (
                <option style={{}} value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
            <div className="form_info">
              <div className="select_box">
                <span
                  className="form-span-name"
                  style={{ marginBottom: "5px" }}
                >
                  Candle Time
                </span>
                <select
                  value={time_interval}
                  onChange={(e) => setTimeInterval(e.target.value)}
                >
                  {options_candles.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select_box">
                <span className="form-span-name">Strategy</span>
                <select
                  value={strategy}
                  onChange={(e) => setStrategy(e.target.value)}
                >
                  {strategy_options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="checkbox-area">
              <input 
                  type="checkbox"
                  defaultValue={tradeCoins}
                  onChange={(e) => setTradeCoins(e.target.value)}
                /><span className="form-span-name">Trade All Price Pairs</span>
                </div> */}
            <div className="checkbox-area" style={{}}>
              <input
                type="checkbox"
                defaultValue={trialStop}
                onChange={(e) => setTrialStop(e.target.value)}
              />
              <span className="form-span-name" style={{ marginLeft: "5px" }}>
                Use Trailing Stop
              </span>
            </div>
            <div className="checkbox-area">
              <input
                type="checkbox"
                defaultValue={marketOrders}
                onChange={(e) => setMarketOrders(e.target.value)}
              />
              <span className="form-span-name" style={{ marginLeft: "5px" }}>
                Use Market Orders
              </span>
            </div>
            {/* <input
              type="text"
              className="first_col_second_cols_input"
              defaultValue={time_interval}
              onChange={(e) => setTimeInterval(e.target.value)}
              />*/}
            {checkSubcription ? (
              <div className="button_row_control">
                <button
                  style={{ backgroundColor: "#6E5A2F" }}
                  className="run-button"
                  onClick={() => run_bot()}
                  disabled={runResult ? true : false}
                >
                  RUN
                </button>
                <button
                  className="stop-button"
                  onClick={() => stop_bot()}
                  disabled={runResult ? false : true}
                >
                  STOP
                </button>
              </div>
            ) : (
              <div>
                <h2
                  style={{
                    color: "#fff",
                    fontWeight: "400",
                    fontsize: "20px",
                    margin: "5px 5px",
                  }}
                >
                  Subcription is Expired..
                </h2>
                <button
                  className="run-button"
                  onClick={() => navigate.push("/price")}
                >
                  Back to Subcription
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="column-one">
        <div className="title-row">
          <span className="title-row-span">
            <span className="">All contracts</span>
            <img src="https://i.imgur.com/p0Uttfb.png" alt="" />
          </span>
          <span className="title-row-span">
            <span className="">Roll up</span>
            <img src="https://i.imgur.com/aOStF7z.png" alt="" />
          </span>
        </div>
        <div className="title-row-two">
          <div className="title-one">
            <img src="https://i.imgur.com/59N69Ls.png" alt="" />
            <span>Currency</span>
          </div>
          <div className="title-two">
            <span>Price</span>
          </div>
          <div className="title-three">
            <span>Position</span>
          </div>
          <div className="title-four">
            <span>Time</span>
            <img src="https://i.imgur.com/p0Uttfb.png" alt="" />
          </div>
        </div>

        <div className="card-wrapper">
          {tradeDetails.length > 0 &&
            tradeDetails.map((e, index) => (
              <div className="card-contracts" key={index}>
                <div className="card-contracts-title-one">
                  <span className="card-contracts-title-one-currency">
                    {e.symbol}
                  </span>
                  {/* <span className="card-contracts-title-one-currency-value">
                    $ 00:00 ^
                  </span> */}
                </div>
                <div className="card-contracts-title-one">
                  <span className="card-contracts-title-one-currency">
                    $ {e.price}
                  </span>
                  {/* <span className="card-contracts-title-one-currency-value">
                    Profit: $ 4.000,00
                  </span> */}
                </div>
                <div className="card-contracts-title-one">
                  {/* <span className="card-contracts-title-one-currency">
                    Terms extension
                  </span> */}
                  <span className="card-contracts-title-one-currency-value">
                    {e.result}
                  </span>
                </div>
                <div className="time-and-mode">
                  {/* <img src="https://i.imgur.com/cO92IEv.png" alt="" /> */}
                  <span>{e.time}</span>
                </div>
                {/* <div className="mode-and-option">
                  <button className="transparent-button-row">
                    <img src="https://i.imgur.com/EErlk40.png" alt="" />
                  </button>
                  <button className="transparent-button-row">
                    <img src="https://i.imgur.com/qnrOZw4.png" alt="" />
                  </button>
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
