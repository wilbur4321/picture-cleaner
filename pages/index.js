import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import ReactDOM from 'react-dom'

export default function Home() {
  return (
    React.createElement("h1", { style: { color: "blue" } }, "Hello, world!")
  );
}
