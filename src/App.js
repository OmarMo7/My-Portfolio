import React from 'react'
import { Container, Grid } from '@mui/material'
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Timeline from './components/Timeline/Timeline'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          Hoba
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Routes>
              <Route path='/portfolio' element={<Portfolio />}>
              </Route>
              <Route path='/' element={<Resume />}>
              </Route>
            </Routes>
          </Router>
          <Profile />
          <Button />
          <Timeline />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App