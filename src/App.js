import React from "react";
import { SortableFilter } from "./components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./App.css";

function App() {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
      <Card className="App">
        <CardContent>
          <SortableFilter />
        </CardContent>
      </Card>
    </React.Suspense>
  );
}

export default App;
