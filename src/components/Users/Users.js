import React from 'react';
import styles from './Users.module.css';
import defaultUserPhoto from '../../assets/images/angryUser.jpg'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i<=pagesCount;++i){ pages.push(i)}

    return <div>
        <div>
            {pages.map((p) => {
                return <span className={props.currentPage == p && styles.selectedPage}
                              onClick={() => (props.onPageChanged(p))} >{p}</span>
            })}
        </div>

        {props.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id }>
                      <img src={u.photos.small != null ? u.photos.small : defaultUserPhoto} className={styles.userImg} />
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFollowingInProgress(true);
                        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                            withCredentials: true,
                            headers: {"api-key" : "87e46be9-6d6d-4cc0-8aa5-1b31f4e91da3"}
                            })
                             .then((response) => {
                                 if(response.data.resultCode === 0){
                                    props.unfollow(u.id)    
                                 }
                                 props.toggleFollowingInProgress(false);
                             })
                             
                             }}>UNFOLLOW</button>
                        : <button disabled={props.followingInProgress} onClick={() => { 
                            props.toggleFollowingInProgress(true);
                            Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                            withCredentials: true,
                            headers: {"api-key" : "87e46be9-6d6d-4cc0-8aa5-1b31f4e91da3"}
                            
                            })
                             .then((response) => {
                                 if(response.data.resultCode === 0){
                                    props.follow(u.id)   
                                 }
                                 props.toggleFollowingInProgress(false);
                             })
                            
                            }}>FOLLOW</button>}
                </div>
            </span>
            <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </span>

            <span>
                <div>
                    {"u.location.city"}
                </div>
                <div>
                    {"u.location.country"}
                </div>
            </span>

        </div>)}
    </div>

}

export default Users;