/*
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

import React, { useCallback } from "react";
import "@awsui/global-styles/index.css"
import Grid from "@mui/material/Grid";
import ConnectCCP from "./ConnectCCP";
import CustomerInfo from "./CustomerInfo";

const Dashboard = () => {
  console.log("Dashboard");
  // Avoid re-rendering ConnectCCP
  const CCP = useCallback(() => <ConnectCCP />, []);

  const modules = JSON.parse(localStorage.getItem('modules') || '{}');
  return (
    <>
      <Grid container spacing={3} style={{ height: "90vh" }}>
        {modules.ccp !== false && (
          <Grid item xs={4}>
            <CCP />
          </Grid>
        )}
        {modules.workspace !== false && (
          <Grid item xs={8}>
            <CustomerInfo />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Dashboard;
