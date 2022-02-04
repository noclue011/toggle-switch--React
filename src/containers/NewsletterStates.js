import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

export default function NewsletterStates() {
    //Sets initial states for the marketing email switches
    let [newsletter, setNewsletter] = useState(false);
    let [daily, setDaily] = useState(false);
    let [weekly, setWeekly] = useState(false);
    let [monthly, setMonthly] = useState(false);

    //runs if the first marketing emails switch is changed
    const onNewsletterChange = (checked) => {
        setNewsletter(checked);
        //unchecks other switches if the first switch is set to "no"
        if (!checked) {
            setDaily(false);
            setWeekly(false);
            setMonthly(false);
        }
    };

    return (
        <div>
            <h1>Opt-in for Newsletter</h1>
            <div>
                <ToggleSwitch
                    id = "newsletter"
                    checked = {newsletter}
                    onChange = {onNewsletterChange}
                />
                <label htmlFor = "newsletter">Send me Marketing Emails!</label>
            </div>
            <div>
                <ToggleSwitch
                    id = "daily"
                    //Set to be a smaller switch
                    small
                    //will be disabled if first switch is set to "no"
                    disabled = {!newsletter}
                    checked = {daily}
                    onChange = {setDaily}
                />
                <label htmlFor = "daily">Daily Briefs</label>
            </div>
            <div>
                <ToggleSwitch
                    id = "weekly"
                    small
                    disabled = {!newsletter}
                    checked = {weekly}
                    onChange = {setWeekly}
                />
                <label htmlFor = "weekly">Weekly Summary</label>
            </div>
            <div>
                <ToggleSwitch
                    id = "monthly"
                    small
                    disabled = {!newsletter}
                    checked = {monthly}
                    onChange = {setMonthly}
                />
                <label htmlFor = "monthly">Monthly Digest</label>
            </div>
            <div>
                <h2>States</h2>
                {/*shows 'true' or 'false' based on the state of the switches*/}
                <p>Newsletter: {String(newsletter)}</p>
                <p>Daily: {String(daily)}</p>
                <p>Weekly: {String(weekly)}</p>
                <p>Monthly: {String(monthly)}</p>
            </div>
        </div>
    );
}