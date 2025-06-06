/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React, { useCallback, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";

const withLayout = (Component) => (props) => {
  const Comp = useCallback(() => <Component {...props} />, [props]);
  return (
    <AppLayout>
      <Comp />
    </AppLayout>
  );
};

const App = () => {
  const Dash = useMemo(() => withLayout(Dashboard), []);
  const AdminPage = useMemo(() => withLayout(Admin), []);

  const theme = useMemo(() => getTheme(), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
