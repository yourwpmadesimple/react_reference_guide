import react from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <Navigation />
    </div>
  )
}
export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Navigation />
    </div>
  )
}
export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
      <Navigation />
    </div>
  )
}
export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
      <Navigation />
    </div>
  )
}

export function Whoops404() {
  let location = useLocation()
  console.log(location)
  return (
    <div>
      <h1>Resource not found at { location.pathname }</h1>
      <Navigation />
    </div>
  )
}