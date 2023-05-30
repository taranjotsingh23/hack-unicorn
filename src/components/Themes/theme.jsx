import React from 'react';
import ReactDOM from 'react-dom';
import './theme.css';


function ThemeType(props) {
    return (
        <div className="HackathonTheme">

            <div class="wrapper">

                <div class="cards_wrap">
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/health_care1.jpg" /><br/><br/>
                            <div class="role_name">Health Care</div>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/edu.png" /><br/><br/>
                            <div class="role_name">Education</div>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/env1.jpg" /><br/><br/>
                            <div class="role_name">Environment</div>
                        </div>
                    </div>
            
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/web31.jpg" /><br/><br/>
                            <div class="role_name">Web3</div>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src= "./images/fintech.jpg"/><br/><br/>
                            <div class="role_name">Fintech</div>
                        </div>
                    </div>
                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/ai1.jpg" /><br/><br/>
                            <div class="role_name">AI/ML</div>
                        </div>
                    </div>

                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/iot.jpg" /><br/><br/>
                            <div class="role_name">IOT</div>
                        </div>
                    </div>

                    <div class="card_item">
                        <div class="card_inner">
                            <img src="./images/open_inno1.png" /><br/><br/>
                            <div class="role_name">Open Innovation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThemeType;