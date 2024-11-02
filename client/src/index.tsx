import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "./app/store";
import { Provider } from "react-redux";

const rootNodeId = "root";

const container = document.getElementById(rootNodeId);

if (!container) {
  throw new Error(`Не найден Dom элемент с ${rootNodeId} `);
}

const root = createRoot(container);

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
