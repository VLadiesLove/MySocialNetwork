import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import styles from './Profileinfo.module.css';

const Profileinfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
              <img className={styles.Ava}  src={props.profile.photos.large} />
            </div>

            <div >
                Description
            </div>

        </div>

        

    )
}

export default Profileinfo;