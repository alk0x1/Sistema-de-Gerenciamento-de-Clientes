import React from 'react';
import Stack from 'react-bootstrap/Stack';
import { AppRoutes } from "./routes";

export function App() {
  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#eee', paddingTop: '5%'}}>
      <Stack gap={3} className="col-md-5 mx-auto">
        <AppRoutes />
      </Stack>
    </div>
  )
}
