import React from "react";

export const NavigationItem = (props) => {
    const { item } = props;
    const { key, defaultTab } = item;
    return (
        <li className="nav-item">
            <a className={`nav-link ${defaultTab ? "active show" : null}`} data-toggle="tab" href={key} role="tab"
               aria-controls="tab-4" aria-selected="true">
                <i className="flaticon-018-lobster"></i>
                <div className="mpm-text">
                    <h5>Dinner</h5>
                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                </div>
            </a>
        </li>
    );
}