import React from 'react'

export default function AccountView() {
  return <>
    <article>
        <img src="" alt="User profil photo" />
        <p></p>
        <ul></ul>
    </article>
    <form>
        <button className="all_respondedRequests">ALL</button>
        <button className="posted">POSTED</button>
        <button className="pending_respondedRequests">RESPONDED</button>
    </form>
    <ul>
        <li onClick={e=>{document.getElementById('modal').classList.toggle('active')}}>okodsodsqk</li>
    </ul>
    <article>

    </article>
    </>
}
