import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div>
      {/* Inline css */}
      <h1
        className="container"
        style={{
          color: "red",
          backgroundColor: "gray",
        }}
      >
        This is Navbar
      </h1>

      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus officia
        tenetur, minima vero repellat atque debitis fuga sequi explicabo vitae!
      </p>
    </div>
  );
}

export default Navbar;
