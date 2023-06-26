import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme } = useTheme();
  const { toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
