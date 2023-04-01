import "../assets/css/Homepage.css";

const Homepage = () => {

    return (
        <div className="wrapper-homepage">
            <div className="left">
                <h1>NAVBAR</h1>
            </div>
            <div className="right">
                <div className="one">
                    <div className="top">
                        <h1>INBOX</h1>
                        <select className="filter" id="">
                            <option value="">Latest First</option>
                        </select>
                    </div>
                    <div className="bottom">
                        <h1>WHAT'S NEXT?</h1>
                    </div>
                </div>
                <div className="two">
                    <div className="main">
                        <div className="top">
                            <div className="lefts">
                                <h1>PROFILE</h1>
                            </div>
                            <div className="rights">
                                <h1>Name: </h1>
                                <h1>School: </h1>
                                <h1>Grade: </h1>
                                <h1>Status: </h1>
                            </div>
                        </div>
                        <div className="bottom">
                            <h1>PROGRESS</h1>
                            <div className="card">
                                <h2>Your Progress</h2>
                                <h2>{}/{}</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Homepage;