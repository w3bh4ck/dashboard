import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
