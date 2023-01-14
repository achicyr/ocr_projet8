import React from 'react'

export default function ChatboxModal() {
    const id = Math.ceil(Math.random()*1000)
    
    return (
        <section id="modal">
            <span className="close" onClick={e=>{e.target.parentElement.classList.toggle('active')}}>X</span>
            <header>CHATBOX FOR REQUEST #{id}</header>
            <main></main>
            <footer>
                <form>
                    <input placeholder="Enter your messages here" />
                    <button>✈️</button>
                </form>
            </footer>
        </section>
    )
}
