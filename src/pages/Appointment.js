import React, { useState } from "react";

const SHEET_ID = "YOUR_SHEET_ID"; // ה-ID של גיליון Google
const API_KEY = "YOUR_API_KEY"; // ה-API Key שיצרת ב-Google Cloud

const App = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [appointments, setAppointments] = useState([]);

  // שמירת תור בגיליון Google
  const saveAppointment = async (e) => {
    e.preventDefault();
    if (!date || !time || !name) {
      alert("אנא מלא את כל השדות.");
      return;
    }

    const newAppointment = [date, time, name];

    try {
      await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ values: [newAppointment] }),
        }
      );

      alert("התור נשמר בהצלחה!");
      setDate("");
      setTime("");
      setName("");
      loadAppointments();
    } catch (error) {
      console.error("Error saving appointment:", error);
      alert("שגיאה בשמירת התור.");
    }
  };

  // טעינת תורים מגיליון Google
  const loadAppointments = async () => {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:C?key=${API_KEY}`
      );
      const data = await response.json();
      setAppointments(data.values || []);
    } catch (error) {
      console.error("Error loading appointments:", error);
      alert("שגיאה בטעינת התורים.");
    }
  };

  return (
    <div className="container">
      <h2>זימון תור</h2>
      <form onSubmit={saveAppointment}>
        <label>תאריך:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label>שעה:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label>שם:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">שמור תור</button>
      </form>

      <div className="appointments-list">
        <h3>תורים שמורים:</h3>
        {appointments.length > 0 ? (
          <ul>
            {appointments.map((appt, index) => (
              <li key={index}>
                {appt[2]} - {appt[0]} בשעה {appt[1]}
              </li>
            ))}
          </ul>
        ) : (
          <p>אין תורים שמורים.</p>
        )}
      </div>
    </div>
  );
};

export default App;
