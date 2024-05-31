"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Footer from "./components/Footer";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/client";

export default function Home() {
  return (
    <>
      <ApolloProvider client={client}>
      
        <Product />

      </ApolloProvider>
    </>
  );
}
