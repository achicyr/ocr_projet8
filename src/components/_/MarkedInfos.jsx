// import React from 'react'

export default function MarkedInfos() {
    const volonteers = Math.ceil(Math.random()*5)-1

    return <article id="mapMark_details">
        <section className="volonteers">
            <span className="status">Unfullfilled</span>
            <span className="countdown" title="Subscribed volonteers number (max 5)">{volonteers}/5</span>
            <button>GET VOLONTEER</button>
        </section>
        <p class="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae voluptas fugit necessitatibus. Fugiat optio omnis corporis est, rem deserunt maiores distinctio blanditiis nihil. Sapiente amet numquam autem deleniti ipsam.
            Accusamus quidem nulla ipsa itaque eos libero voluptates, corporis soluta id aperiam consequuntur illum quae reprehenderit ducimus rerum totam, provident adipisci dolorem quas, beatae distinctio? Possimus asperiores recusandae excepturi odit?
            Ipsa accusamus asperiores quibusdam, laudantium adipisci, atque qui totam repudiandae eos, debitis soluta nam minima. Ex cumque sint consequuntur, labore cupiditate sunt quam facilis, provident quasi quis culpa exercitationem iusto.
        </p>
    </article>
}
