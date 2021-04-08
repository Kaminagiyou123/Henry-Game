import React from "react";
import { useProductsContext } from "../Context";
import "../ css/Record.css";
const Record = () => {
  const { record } = useProductsContext();
  return (
    <main>
      <div className='container'>
        <h3>Record</h3>
        <section class='record-container'>
          {record?.map((item, index) => {
            const { you, henry, msg } = item;
            return (
              <div>
                <div className='record-info'>
                  <span>Round{index + 1}: </span>
                  Your Score: <span class='score2'>{you} </span>
                  Henry Score:<span class='score2'>{henry}</span>
                  <div className='result-box'>
                    Result: <span class='score2'>{msg}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Record;
