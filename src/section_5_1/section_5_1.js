import React from 'react';
import './section_5_1.css'
function Section_5_1(){
    let img1 ='https://images.healthshots.com/healthshots/en/uploads/2022/05/11184715/Yoga-for-weight-loss.jpg'
    return(
        <div className="section_5_1">
            <div className="img">
            </div>
            <div className="sec_5_1_1">Come join us for our energizing</div>
            <div className="sec_5_1_2">Yoga Classes</div>
            <div className="sec_5_1_3">Amet venenatis urna cursus eget euismod quis viverra nibh cras.</div>
            <div className="sec_5_1_4">
                <div className="sec_5_1_4_1"><img src={img1} alt=""  className='img1'/></div>
                <div className="sec_5_1_4_2">
                    <div className="sec_5_1_4_2_1">Explore new horizons!</div>
                    <div className="sec_5_1_4_2_2">Senectus et netus et malesuada fames ac turpis egestas. Vivamus arcu felis bibendum ut tristique et. Urna porttitor rhoncus dolor purus. Faucibus interdum posuere lorem ipsum. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque.</div>
                </div>
            </div>
        </div>
    );
}
export default Section_5_1;