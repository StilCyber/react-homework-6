import Button from './UI/Button';
import classes from './styles/PostItem.module.css'

const PostItem = ({item, number, remove}) => {
    return (
        <div className={classes.post}>
            <div className={classes.content}>
                <p>{number}</p>
                <p>{item.title}</p>
            </div>
            <Button onClick={() => remove(item)}>Удалить пост</Button>
        </div>
    )
}

export default PostItem;