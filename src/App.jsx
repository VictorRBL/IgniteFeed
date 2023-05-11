import { useState } from "react";
import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  );
}

export default App;
