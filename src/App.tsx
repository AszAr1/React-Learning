import { Heading } from "./components/Heading"
import { Section } from "./components/Section"
import { Counter } from "./components/Counter"
import { List } from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState<number>(0)
  
  return <>
    <Heading title={"Hello World!"}/>
    <Section>This is my section.</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={["☕ Coffee", "🌮 Tacos", "💻 Code"]} render={
      (item: string) => 
    <span className="text-yellow-300">{item}</span>}/>
  </>
}

export default App
