import { useEffect, useState } from "react";
import React from "react";
import "./cards.css";

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async (req, res) => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json()
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        } catch (error) {
            return res.status(500).json({
                message: "Data get successfully!"
            })
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <>
            <section>
                <h1>Live tracker</h1>
                <h2>covid-19 coronavirus tracker</h2>

                <ul>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Our</span>Country</p>
                                <p className="card_total card_small">INDIA</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total</span>Recovered</p>
                                <p className="card_total card_small">{data.recovered}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total</span>Confirmed</p>
                                <p className="card_total card_small">{data.confirmed}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total</span>Deaths</p>
                                <p className="card_total card_small">{data.deaths}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Total</span>Active</p>
                                <p className="card_total card_small">{data.active}</p>
                            </div>

                        </div>
                    </li>
                    <li className="card">
                        <div className="card_main">
                            <div className="card_inner">
                                <p className="card_name"><span>Last</span>Updated</p>
                                <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>

                        </div>
                    </li>
                </ul>
            </section>

        </>
    )
}

export default Covid;