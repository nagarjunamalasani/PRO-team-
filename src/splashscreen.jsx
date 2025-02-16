import { useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <span style={styles.master}>Master</span>
        <span style={styles.code}>Code</span>
      </div>
      <div className="loader"></div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  master: {
    backgroundColor: "#66ff66",
    padding: "8px 16px",
    borderRadius: "35px",
    fontWeight: "bold",
    color: "#fff",
  },
  code: {
    color: "#000",
    marginLeft: "8px",
  },
};

export default SplashScreen;
