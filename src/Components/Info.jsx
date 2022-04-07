import React, { useState } from "react";
import { Button } from "./UI/Button/Button";

export const Info = ({ info }) => {
  const id = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [isInfo, setIsInfo] = useState(false);
  return (
    <div style={{ position: "fixed", zIndex: "10", marginLeft: "10px" }}>
      {isInfo ? (
        <div
          onClick={() => setIsInfo(!isInfo)}
          style={{
            zIndex: "100",
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            backgroundColor: "white",
            border: "1px solid gray",
            borderRadius: "5px",
            marginLeft: "10px",
            padding: "0",
            whiteSpace: "pre",
          }}
        >
          <ul style={{ width: "25%" }}>
            {Object.keys(info).map((key, i) => {
              return (
                <li
                  key={i}
                  style={{
                    textAlign: "end",
                    listStyleType: "none",
                  }}
                >
                  <hr />
                  <b>{key.toString() + ": "}</b>
                </li>
              );
            })}
          </ul>
          <ul
            style={{
              width: "75%",
              textAlign: "start",
              listStyleType: "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {Object.values(info).map((value, i) => {
              // if (i === 8) return;
              return (
                <li
                  key={i}
                  style={{
                    backgroundColor:
                      typeof value === "boolean"
                        ? !value
                          ? "tomato"
                          : "cornflowerblue"
                        : "transparent",
                  }}
                >
                  <hr />
                  <em>{value.toString()} ;</em>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <Button
          className="infoButton"
          onClick={() => setIsInfo(!isInfo)}
          style={{ padding: "0px 10px" }}
        >
          <h2>info</h2>
        </Button>
      )}
    </div>
  );
};
