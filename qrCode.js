import React from "react";
import "./styles.css";
import QRCode from "react-qr-code";
import useSWR from "swr";

export default function App() {
  const { data, error } = useSWR("/api/user", fetch);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="App">
      <h2>Hey Barista, Please scan this qr for coffee...</h2>
      <QRCode value="Nikhil pol pol pol" size="250" />
    </div>
  );
}
