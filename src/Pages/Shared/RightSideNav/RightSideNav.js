import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from './../../../Context/AuthProvider/AuthProvider';

const RightSideNav = () => {
    const {providerLogIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogIn(googleProvider)
        .then (result => {
            const user = result.user;
            console.log(user)
        })
        .catch (error => 
            console.error(error))
        
    }
    return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className="mb-3" variant="outline-primary">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup.Item className="mb-3">
          <FaFacebook></FaFacebook> Facebook
        </ListGroup.Item>
        <ListGroup.Item className="mb-3">
          <FaWhatsapp></FaWhatsapp> WhatsApp
        </ListGroup.Item>
        <ListGroup.Item className="mb-3">
          <FaTwitch></FaTwitch> Twitch
        </ListGroup.Item>
        <ListGroup.Item className="mb-3">
          <FaTwitter></FaTwitter>Twitter
        </ListGroup.Item>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
