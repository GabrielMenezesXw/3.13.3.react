import "./styles.css";
import { Video } from "./Video.js";

export default function App() {
  const videos = new Array(10).fill("");

  return (
    <nav className="template">
      {videos.map(() => (
        <Video />
      ))}
    </nav>
  );
}
