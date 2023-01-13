
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
import './assets/scss/index.scss';
import LogSignIn from './pages/LogSignIn';
import UserAccount from './pages/UserAccount';
import Home from './pages/Home';
import Gmapp from './pages/Home/Gmapp';
import NewRequest from './pages/NewRequest';
import Header from './components/Header'
import Nav from './components/Nav'
// import Aside from './components/Aside'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './utils/auth'
//import reportWebVitals from './reportWebVitals';

const MainStyled = styled.main`

`

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<Header />
				<Nav />
				<MainStyled>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/g" element={<Gmapp />}></Route>
						<Route path="/login" element={<LogSignIn path="login" />}></Route>
						<Route path="/signup" element={<LogSignIn path="signup" />}></Route>
						<Route path="/logout" element={<LogSignIn path="logout" />}></Route>
						<Route path="/newRequest" element={<NewRequest method={"POST"} />}></Route>
						<Route path="/account/:id" element={<UserAccount method={"POST"} />}></Route>
						<Route path="*" element={<Navigate replace to="/login" />}></Route>
					</Routes>
				</MainStyled>
				{/* <Aside /> */}
				<Footer />
			</AuthProvider>
		</BrowserRouter>
	// </React.StrictMode>
);


