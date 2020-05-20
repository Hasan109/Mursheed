import React from "react";

import "../MursheedApp/MursheedApp.css";
const MursheedApp=()=>{
    return(

        <section id="mursheed_app">
        <div className="container">
            <div className="mursheed_app_inside">
                <div className="mursheed_app_left">
                    <h6>Mursheed tətbiqini yükləyin</h6>
                    <p>
                        Öz Mursheed tətbiqetməsini smartfonunuza yükləyin və bir avtomobil sifarişinin 
                        nə qədər asan ola biləcəyini kəşf edin. Bu tətbiqetmə
                        ilə tez bir avtomobil sifariş edə bilərsiniz.
                    </p>
                    <a href="">
                        <img src="http://almursheed.com/ui/img/mursheed_app/google_play.svg" alt=""/>
                    </a>
                    <a href="">
                        <img src="http://almursheed.com/ui/img/mursheed_app/apple_store.svg" alt=""/>
                    </a>
                </div>
                <div className="mursheed_app_right">
                    <img src="http://almursheed.com/ui/img/mursheed_app/as.png" alt=""/>
                </div>
            </div>
        </div>
    </section>

    )
}
export default MursheedApp;