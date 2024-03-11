import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Post from './components/Post';
import Submit from './components/Submit';
import Subpost from './components/Subpost';





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cname: '',
      cphone: '',
      cemail: '',
      cmessage: '',
      isSubmit: false,
    };
  }
  contactHandler = (event) => {
    event.preventDefault();
    let cn = event.target.cname.value;
    let cp = event.target.cphone.value;
    let em = event.target.cemail.value;
    let cm = event.target.cmessage.value;


    this.setState(
      { cname: cn, cemail: em, cphone: cp, cmessage: cm, isSubmit: true },
      () => { (alert(this.state.cname)); });
    alert(cn + " ")
  };

  render() {

    const router = createBrowserRouter([
      {
        path: '/',
        element: <><Navigation />
          <Header /><Main /><Footer /></>,
      },
      {
        path: '/Main',
        element: <><Navigation />
          <Header /><Main /><Footer /></>,
      },
      {
        path: '/about',
        element: <><Navigation />
          <Header /><About /><Footer /></>,
      },
      {
        path: '/post',
        element: <><Navigation />
          <Header /><Post /><Footer /></>,
        children: [
          {
            path: "posts/:postId",
            element: <Subpost />,
          }],
      },
      {
        path: '/contact',
        element: <><Navigation />
          <Header />{this.state.isSubmit ? <Submit cn={this.state.cname} ce={this.state.cmail} cp={this.state.cphone} cm={this.state.cmessage} /> : <Contact submit={this.contactHandler} />}<Footer /></>,
      }
    ]);

    return (
      // <Router>
      //   <Navigation />
      //     <Header />

      //     <Routes>
      //       <Route path="/" element={<Main />} />
      //       <Route path="/about" element={<About />} />
      //       <Route path="/post" element={<Post />} />
      //       <Route path="/contact" element={
      //           this.state.isSubmit ? <Submit cname={this.state.cname} cemail={this.state.cemail}cphone={this.state.cphone} cmessage={this.state.cmessage} />:<Contact submit={this.contactHandler} />
      //           }/>

      //       <Route path="*" element={<Error />} />
      //     </Routes>
      //     <Footer />
      // </Router>
      <React.Fragment>

        <RouterProvider router={router} />

      </React.Fragment>


    );
  }
}

export default App;
