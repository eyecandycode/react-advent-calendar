import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from "./component/Modal";
import data from "./data.json";

function App() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(0);
  const [activeDoor, setActiveDoor] = useState(0);
  const [openedArr, setOpenedArr] = useState([]);

  //Set the month for testing / Xmas purposes (0 == January, 11 == December)
  const month = 9;
  const today = new Date();

  useEffect(() => {
    setOpenedArr(openedArr.concat(parseInt(activeDoor)));
    localStorage.setItem("opened", JSON.stringify(openedArr));
  }, [activeDoor]);

  const openDoor = e => {
    let correctedDay = parseInt(e.target.id) - parseInt(1);
    setActiveDoor(e.target.id);
    if (
      today.getDate() >= data[correctedDay].day &&
      today.getMonth() === month
    ) {
      e.target.classList.add("opened");
      e.target.parentElement.classList.add("shine");
    }
  };

  const showModal = e => {
    setText(e.target.id);
    setShow(!show);
  };

  return (
    <div className='App'>
      <Modal
        onClose={showModal}
        show={show}
        data={data}
        activeDoor={activeDoor}
        text={text}
      ></Modal>
      <div className='container'>
        <div className='image-grid'>
          {data.map(item => (
            <img
              key={item.id}
              id={item.day}
              className='back-image'
              style={
                openedArr.includes(item.id) &&
                today.getMonth() === month &&
                today.getDate() >= data[parseInt(item.id) - parseInt(1)].day
                  ? { visibility: "visible", zIndex: "3" }
                  : {
                      visibility: "hidden",
                      zIndex: "-1",
                      pointerEvents: "none"
                    }
              }
              src={item.image}
              onClick={showModal}
              alt='xmas'
            />
          ))}
        </div>
        <div className='doors'>
          {data.map(item => (
            <div
              className='back'
              key={item.id}
              style={
                !openedArr.includes(item.id) &&
                today.getDate() >= data[parseInt(item.id) - parseInt(1)].day
                  ? { zIndex: "4" }
                  : { zIndex: "3", pointerEvents: "none" }
              }
            >
              <div
                className='door'
                onClick={openDoor}
                key={item.id}
                id={item.id}
                day={item.day}
              >
                <span>{item.day}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
