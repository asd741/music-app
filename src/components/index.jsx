import React, { Component } from 'react';
import '../script/index.js';
class Index extends Component {
    render() {
        return (
            <div>
                <canvas id='canvas'></canvas>
                <section id="time">
                </section>
                <section id="songList">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
                <audio src={require("../static/virgin code.mp3")} id="audio" autoplay crossorigin="anonymous" controls></audio>
            </div>
        );
    }
}

export default Index;
