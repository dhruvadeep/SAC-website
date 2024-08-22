import React from "react";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="homeCal d-flex flex-column mt-5 mb-5">
      <div className="calTitdiv d-flex justify-content-end">
        <h1 className="homeCalHead position-relative d-inline-block pb-4">
          Calendar
        </h1>
      </div>
      <div className="homeCalCont">
        <div id="calender-left">
          <div className="Month d-flex bd-highlight">
            <button
              className="arrow-left p-2 flex-fill text-start btn"
              type="button"
            >
              &lt;
            </button>
            <div className="month-name p-2 flex-fill text-center fw-normal fs-4">
              MARCH
            </div>
            <button
              className="arrow-right p-2 flex-fill text-end btn"
              type="button"
            >
              &gt;
            </button>
          </div>

          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight ">Sun</div>
            <div className="p-2 flex-fill bd-highlight">Mon</div>
            <div className="p-2 flex-fill bd-highlight">Tue</div>
            <div className="p-2 flex-fill bd-highlight">Wed</div>
            <div className="p-2 flex-fill bd-highlight">Thu</div>
            <div className="p-2 flex-fill bd-highlight">Fri</div>
            <div className="p-2 flex-fill bd-highlight">Sat</div>
          </div>
          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight ">1</div>
            <div className="p-2 flex-fill bd-highlight">2</div>
            <div className="p-2 flex-fill bd-highlight">3</div>
            <div className="p-2 flex-fill bd-highlight">4</div>
            <div className="p-2 flex-fill bd-highlight">5</div>
            <div className="p-2 flex-fill bd-highlight">6</div>
            <div className="p-2 flex-fill bd-highlight">7</div>
          </div>
          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight">8</div>
            <div className="p-2 flex-fill bd-highlight">9</div>
            <div className="p-2 flex-fill bd-highlight">10</div>
            <div className="p-2 flex-fill bd-highlight">11</div>
            <div className="p-2 flex-fill bd-highlight">12</div>
            <div className="p-2 flex-fill bd-highlight">13</div>
            <div className="p-2 flex-fill bd-highlight">14</div>
          </div>
          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight">15</div>
            <div className="p-2 flex-fill bd-highlight">16</div>
            <div className="p-2 flex-fill bd-highlight">17</div>
            <div className="p-2 flex-fill bd-highlight border border-warning bg-light">
              18
            </div>
            <div className="p-2 flex-fill bd-highlight">19</div>
            <div className="p-2 flex-fill bd-highlight">20</div>
            <div className="p-2 flex-fill bd-highlight">21</div>
          </div>
          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight">22</div>
            <div className="p-2 flex-fill bd-highlight">23</div>
            <div className="p-2 flex-fill bd-highlight">24</div>
            <div className="p-2 flex-fill bd-highlight">25</div>
            <div className="p-2 flex-fill bd-highlight">26</div>
            <div className="p-2 flex-fill bd-highlight">27</div>
            <div className="p-2 flex-fill bd-highlight">28</div>
          </div>
          <div className="date d-flex bd-highlight text-center">
            <div className="p-2 flex-fill bd-highlight">29</div>
            <div className="p-2 flex-fill bd-highlight">30</div>
            <div className="p-2 flex-fill bd-highlight">31</div>
            <div className="p-2 flex-fill bd-highlight"></div>
            <div className="p-2 flex-fill bd-highlight"></div>
            <div className="p-2 flex-fill bd-highlight"></div>
            <div className="p-2 flex-fill bd-highlight"></div>
          </div>
        </div>
        {/* Do not remove this for future reference */}
        {/* <div id="calender-right">
          <div className="Month d-flex bd-highlight">
            <button
              className="arrow-left p-2 flex-fill text-start btn"
              type="button"
            >
              &lt;
            </button>
            <div className="month-name p-2 flex-fill text-center">March</div>
            <button
              className="arrow-right p-2 flex-fill text-end btn"
              type="button"
            >
              &gt;
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Calendar;
