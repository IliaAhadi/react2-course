// import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      <h1 className="text-red-400 text-3xl pb-5 mx-12 pt-10 border font-bold">
        This is Navbar
      </h1>

      {/* Inline css */}
      {/* <h1
        className="container"
        style={{
          color: "red",
          backgroundColor: "gray",
        }}
      >
        This is Navbar
      </h1> */}

      {/* <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus officia
        tenetur, minima vero repellat atque debitis fuga sequi explicabo vitae!
      </p> */}
    </div>
  );
}

export default Navbar;
