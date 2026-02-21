import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Navbar from "../components/Navbar";
import RegistrationHero from "../components/RegistrationHero";
import RegistrationForm from "../components/RegistrationForm"

function Register() {

  

  return (
    <>

    <Navbar></Navbar>
    <RegistrationHero></RegistrationHero>
    <RegistrationForm></RegistrationForm>

   
    
    </>
  );
}

export default Register;