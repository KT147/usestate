import { useState } from "react"


function Ilmumine() {
    const [n2itaLisainfot, uuendaN2itaLisainfot] = useState (false);

  return (
    <div>
        <div onClick={() => uuendaN2itaLisainfot (!n2itaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutuskäik
            {n2itaLisainfot === true && <span>A</span>}
            {n2itaLisainfot === false && <span>V</span>}
        </div>
        <div>
            {n2itaLisainfot === true && <div>Tellitavad tooted ja teenused
                Family pakett

                109 kanalit
                5 vaatajakohta
                Hind: 39.65 €/kuu

                Soovin paketti
                Pakett sisaldab lisateenuseid:

                Lastele
                Salvestamine
                Go3 Film / Paramount+
                HBO
                Inspira+
                FX NOW
                Videolaenutus
                National Geographic keskkond
                </div>}
        </div>
    </div>
  )
}

export default Ilmumine