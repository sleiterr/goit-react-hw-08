import"react";
import ReactDOM from "react-dom/client"; // Зміна імпорту для React 18+
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Отримуємо root елемент
const rootElement = document.getElementById("root");

// Створюємо root
const root = ReactDOM.createRoot(rootElement);

// Використовуємо root для рендерингу
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
