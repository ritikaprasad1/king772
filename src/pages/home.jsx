import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard";

function Home() {

    return (
        <>
            <section className="hero">
                <section className="Heading">
                    <h1> WELCOME TO KING772</h1>
                </section>

                <div className="options">
                    < Link to='/dashboard' className='dashboard-btn'>
                        Dashboard
                    </Link>
                    <a to='/Player' className='Player-btn'>
                        All Players
                    </a>
                </div>
            </section>



        </>
    )


}

export default Home