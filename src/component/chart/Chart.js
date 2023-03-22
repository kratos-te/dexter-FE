import React from "react";

class Chart extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    document.getElementById("tv").appendChild(script);

    const script2 = document.createElement("script");
    script2.innerHTML =
      "new TradingView.widget(" +
      JSON.stringify({
        autosize: true,
        symbol: "BTCUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_5c72f",
      }) +
      ")";

    document.getElementById("tv").appendChild(script2);
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div
          className="tradingview-widget-container"
          id="tv"
          style={{ width: "100%", height: "600px" }}
        >
          <div
            id="tradingview_5c72f"
            style={{ width: "100%", height: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Chart;
