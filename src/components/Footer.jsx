import { Link } from 'react-router-dom'


export default function Footer() {
  const handleClick = e => { 
    alert('conditions')
  }
  
  return (
    <footer className='footer'>
      <h6>@copyright blablabla .Inc</h6>
      <span onClick={handleClick}>Condition d'utilisation</span>
      {/* section*3>h5{titre footer $}+ul>li*3>{lorem} */}
      {/*
        <section>
          <h5>titre footer 1</h5>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </section>
        <section>
          <h5>titre footer 2</h5>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </section>
        <section>
          <h5>titre footer 3</h5>
          <ul>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </section>
      */}
    </footer>
  )
}
