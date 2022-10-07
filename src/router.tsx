import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
//npm i react-router-dom@5.3.0

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/:coinId`}>
          <Coin isDark={isDark} />
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
