import React from "react";
import Joke from "./components/Joke"

function App()
{
    return(
    <div>
        <Joke question="Why do programmers confuse halloween and christmas?" punchLine="Because Oct 31 = Dec 25" />
        <Joke punchLine="Algorithm: A word used by programmers when they don't want to explain how their code works." />
        <Joke question="Why did the Python programmer not respond to the foreign mails he got?" punchLine="Because his interpreter was busy collecting garbage." />
        <Joke punchLine="Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science." />
        <Joke question="hy are modern programing languages so materialistic?" punchLine="Because they are object oriented." />
    </div>
    );
    
}
export default App; 