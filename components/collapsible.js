import React, { Children, useState } from "react";

export default function Collapsible({ label, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="wrap-collapsible">
                <button
                    color="primary"
                    type="button"
                    className="toggleBtn" onClick={() => setIsOpen(!isOpen)}>{label}</button>

                {isOpen && <div className="collapsible-content">{<div class="content-inner">
                    {children}
                </div>}</div>}
            </div>
            <style jsx>{`
              .toggleBtn:hover,
        .toggleBtn:focus,
        .toggleBtn:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .toggleBtn h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .collapsible-content content-inner {
          margin: inherit;
          font-size: 1.25rem;
          line-height: 1.5;
        }
              
        .wrap-collapsible toggleBtn {
            margin: 0;
        }
              .toggleBtn {
                margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
              }
              
              .collapsible-content .content-inner {
                background: rgba(250, 224, 66, .2);
                border-bottom: 1px solid rgba(250, 224, 66, .45);
                border-bottom-left-radius: 7px;
                border-bottom-right-radius: 7px;
                padding: .5rem 1rem;
              }
        `}</style>
        </div>
    )
}

