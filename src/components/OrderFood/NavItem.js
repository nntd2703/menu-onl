import React from "react";

export const NavigationItem = (props) => {
    const { item } = props;
    const { Code, key, isSelected } = item;
    return (
        <li className="nav-item">
            <a className={`nav-link ${isSelected ? "active" : ''}`} data-toggle="tab" href={`#${key}`} role="tab"
               aria-controls={key} aria-selected={isSelected} onClick={() => props.navOnClicked(Code)}>
                <i className="flaticon-018-lobster"/>
                <div className="mpm-text">
                    <h5>{item.Name}</h5>
                    <p>Weekdays 8:30a.m. — 11:30a.m.</p>
                </div>
            </a>
        </li>
    );
}