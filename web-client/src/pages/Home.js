import React from "react";
import Header from "../components/Header";
import "./home.css";
import { useState, useEffect, useRef } from "react";
import {
  fetchSupportedCurrencies,
  fetchMarketData,
  calculatePrice,
} from "../utils/CurrencyAPI";

const Home = () => {
  // State variables
  const [selectedCurr, setSelectedCurr] = useState("bitcoin"); // Selected cryptocurrency
  const [selectedSupp, setSelectedSupp] = useState("usd"); // Selected fiat currency
  const [tokenS, setTokenS] = useState(false); // Toggle for token selection state
  const [popup, setPopup] = useState(false); // Popup display state
  const [supportedCurrencies, setSupportedCurrencies] = useState([]); // List of supported fiat currencies
  const [supportedOrig, setSupportedOrig] = useState([]);
  const [marketData, setMarketData] = useState([]); // Market data for cryptocurrencies
  const [marketOrig, setMarketOrig] = useState([]);
  const [amount, setAmount] = useState(null); // Amount for conversion
  const [priceDetails, setPriceDetails] = useState([]); // Details of calculated price
  const [searchTerm, setSearchTerm] = useState("");
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  // Effect hook for fetching initial data
  useEffect(() => {
    const fetchData = async () => {
      // Fetch supported currencies if not already fetched
      if (supportedCurrencies.length === 0) {
        const supportedCurrenciesData = await fetchSupportedCurrencies();
        if (supportedCurrenciesData.error) {
          console.log(supportedCurrenciesData.error);
        } else {
          let supp = [];
          supp = [
            ...supportedCurrenciesData.fiat,
            ...supportedCurrenciesData.crypto,
            ...supportedCurrenciesData.others,
          ];
          setSupportedOrig(supp);
          setSupportedCurrencies(supp);
        }
      }

      // Fetch market data if not already fetched
      if (marketData.length === 0) {
        const marketDataResponse = await fetchMarketData();
        if (marketDataResponse.error) {
          console.log(marketDataResponse.error);
          // Handle error scenario (e.g., setError(marketDataResponse.error))
        } else {
          setMarketOrig(marketDataResponse);
          setMarketData(marketDataResponse);
        }
      }
    };
    fetchData();
  }, []);

  //close the popup
  const popupRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popup &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setPopup(false);
      }
    }
    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popup]); // dependency array includes popup to re-run effect when it changes

  // Function to handle currency conversion
  const convert = async () => {
    console.log(amount);

    if (amount === "") {
      //console.log("entered")

      alert("Please fill in the amount first");
      return;
    }
    if (isNaN(parseInt(amount))) {
      alert("Amount must be a number");
      return;
    }

    if (parseFloat(amount) <= 0) {
      alert("Amount must be a positive value");
      return;
    }
    const output = await calculatePrice(selectedCurr, selectedSupp, amount);
    if (output.error) {
      console.log(output.error);
      // Handle error scenario (e.g., setError(output.error))
    } else {
      setPriceDetails(output);
    }
  };

  return (
    <>
      <Header />
      <div className="main">
        {/* Main content */}
        <div className="left">
          <div className="left-inner">
            <div className="top">Find the value!</div>
            {/* Cryptocurrency selection */}
            <div className="currency">
              <div
                className="item head"
                onClick={() => {
                  setDrop1(true)
                }}
              >
                {selectedCurr.toUpperCase()}

              </div>
              {drop1 && (
                <div className="select-list">
                  {marketData.map((curr, index) => (
                    <div key={index} className="Opt" onClick={()=>{
                      setSelectedCurr(curr.id)
                      setDrop1(false)
                    }}>
                      {curr.name.toUpperCase()}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="currency">
              <div className="item head" onClick={() => setDrop2(true)}>
                {selectedSupp.toUpperCase()}
              </div>

              {drop2 && (
                <div className="select-list">
                  {supportedCurrencies.map((curr, index) => (
                    <div key={index} className="Opt" onClick={()=>{
                      setSelectedSupp(curr)
                      setDrop2(false)
                    }}>
                      {curr.toUpperCase()}
                    </div>
                  ))}
                </div>
              )}

            </div>

            <div className="currency">
              <div className="item">
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                  placeholder="Enter amount"
                />
              </div>{" "}
            </div>
            <div className="convert" onClick={convert}>
              Convert
            </div>

            {priceDetails.length !== 0 && (
              <div className="currency">
                <>
                  <div
                    className="item"
                    onClick={() => {
                      setTokenS(true);
                      setPopup(true);
                    }}
                  >
                    {" "}
                    Unit Value : {priceDetails.currentPriceData}
                  </div>

                  <div className="item val">
                    Total Value : {priceDetails.total}
                  </div>
                </>
              </div>
            )}
          </div>
        </div>

        <div className="right">
          <div className="inner">
            <img
              class="img-fluid"
              src="https://landing.zytheme.com/siena/assets/images/hero/hero.svg"
              alt="background"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
