import { useState } from 'react';
import PostItem from '../PostItem';
import classes from './PostContainer.module.css';

const PostContainer = ({posts, remove}) => {

    return (
        <div className={classes.posts}>
            {posts.map((m, index) => <PostItem remove={remove} number={index + 1} item={m} key={m.id}/>)}
        </div>
    )
}

export default PostContainer;