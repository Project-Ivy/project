import { useState } from "react";
import "../assets/css/Homepage.css";
import Calendar from "react-calendar";
import side_1 from "../assets/img/side_1.svg";
import side_2 from "../assets/img/side_2.svg";
import side_3 from "../assets/img/side_3.svg";
import side_4 from "../assets/img/side_4.svg";
import side_5 from "../assets/img/side_5.svg";
import side_6 from "../assets/img/side_6.svg";
import side_7 from "../assets/img/side_7.svg";
import side_8 from "../assets/img/side_8.svg";
// import "react-calendar/dist/Calendar.css";

const Homepage = () => {
  const [side, setSide] = useState(true);
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({
    name: "Your Name",
    school: "Your School",
    grade: "Your grade",
    progress_now: "1500",
    progress_max: "xxxx",
    progress_percent: "70%",
    target: "Harvard - Medical School",
  });
  const [inbox, setInbox] = useState([
    {
      name: "Salva",
      message: "hey (name)!, i just wondering if you could do something for me",
      created_at: "",
      send: "Send 2h Ago",
      time: "09.00",
      color: "#a1ff85",
    },
    {
      name: "Sukrit",
      message: "hey (name)!, How was your",
      created_at: "",
      send: "Send 4h Ago",
      time: "07.00",
      color: "#008efe",
    },
    {
      name: "Daus",
      message: "hey (name)!, i want to borrow your pen please",
      created_at: "",
      send: "Send 2h Ago",
      time: "09.00",
    },
  ]);
  const [next, setNext] = useState([
    {
      task: "Meet With Supervisor",
      date: "28/03/2023",
    },
    {
      task: "Meet With Student Council",
      date: "30/03/2023",
    },
    {
      task: "Proposal Deadline",
      date: "01/04/2023",
    },
    {
      task: "tes",
      date: "03/04/2023",
    },
  ]);

  const setSidebar = () => {
    if (side) {
      document.getElementById("sidebar").style.width = "320px";
      document.getElementById("top_side").setAttribute("class", "t-side2");
      document.getElementById("bottom_side").setAttribute("class", "b-side2");
      document.getElementById("super_bar").setAttribute("class", "s-bar2");
      document.getElementById("super_name").style.display = "block";
      setSide(false);
    } else {
      document.getElementById("sidebar").style.width = "90%";
      document.getElementById("top_side").setAttribute("class", "t-side");
      document.getElementById("bottom_side").setAttribute("class", "b-side");
      document.getElementById("super_bar").setAttribute("class", "s-bar");
      document.getElementById("super_name").style.display = "none";
      setSide(true);
    }
  };
  return (
    <div className="wrapper-homepage">
      <div className="left">
        <div className="sidebar" id="sidebar">
          <div className="t-side" id="top_side">
            <div className="s-bar" id="super_bar">
              <div className="photo"></div>
              <div className="name" id="super_name">
                UniPath
              </div>
              <div className="logo">
                <img src={side_1} alt="" onClick={setSidebar} />
              </div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_2} alt="" />
              </div>
              <div className="name">Dashboard</div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_3} alt="" />
              </div>
              <div className="name">Site Home</div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_4} alt="" />
              </div>
              <div className="name">User</div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_5} alt="" />
              </div>
              <div className="name">Mission</div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_6} alt="" />
              </div>
              <div className="name">Community</div>
            </div>
            <div className="bar">
              <div className="logo">
                <img src={side_7} alt="" />
              </div>
              <div className="name">Setting</div>
            </div>
          </div>
          <div className="b-side" id="bottom_side">
            <div className="bar">
              <div className="logo">
                <img src={side_8} alt="" />
              </div>
              <div className="name">Accessibilty Setting</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="one">
          <div className="top">
            <h1>INBOX</h1>
            <select className="filter" id="">
              <option value="">Latest First</option>
            </select>
            <div className="inbox">
              {inbox.map((value, index) => {
                return (
                  <div className="data" key={index}>
                    <div className="img">
                      <div
                        className="sample"
                        style={{ backgroundColor: value.color }}
                      ></div>
                    </div>
                    <div className="content">
                      <div className="up">
                        <b>{value.name}</b>
                        <div className="time">
                          <p>{value.send}</p> {value.time}
                        </div>
                      </div>
                      <div className="down">{value.message}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button>See all</button>
          </div>
          <div className="bottom">
            <h1>WHAT'S NEXT?</h1>
            <h5>Today : </h5>
            <div className="wrap-bottom">
              <div className="wrap-b-data">
                <div className="wrap-data">
                  {next.map((value, index) => {
                    return (
                      <div key={index} className="data">
                        <div className="checkbox-container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </div>
                        <div className="r-data">
                          <p>{value.task}</p>
                          {value.date}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="view_more">
                  <button>View more</button>
                </div>
              </div>
              <div className="date">
                <Calendar onChange={setDate} value={date} />
              </div>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="main">
            <div className="top">
              <div className="lefts">
                <h1>PROFILE</h1>
                <div className="photo-back">
                  <div className="photo-example"></div>
                </div>
              </div>
              <div className="rights">
                <h1>Name: {data.name}</h1>
                <h1>School: {data.school}</h1>
                <h1>Grade: {data.grade}</h1>
                <h1>Status: </h1>
              </div>
            </div>
            <div className="bottom">
              <h1>PROGRESS</h1>
              <div className="card">
                <h2>Your Progress :</h2>
                <h2>
                  {data.progress_now}/{data.progress_max}
                </h2>
                <div className="progress_bar">
                  <div
                    className="progress"
                    style={{ width: data.progress_percent }}
                  >
                    {data.progress_percent}
                  </div>
                </div>
                <div className="b-card">
                  <div className="l-card">
                    <h2>Target :</h2>
                    <h2>{data.target}</h2>
                  </div>
                  <div className="r-card"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
