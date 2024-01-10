import React from 'react'
import { Button,Card } from 'semantic-ui-react';
import PostCard from './src/components/PostCard/PostCard.jsx';


function PostCard(props) {
    console.log(props);
    return (

        <Card>
            <Card.Content>
                <Card.Header>{props.post.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>user ID:{props.post.userId}</span>
                </Card.Meta>
                <Card.Description>
                    {props.post.body}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button 
                onClick={() => {
                    props.onDelete(props.post.id);
                }} basic color="red">
                    kaldır
                </Button>
            </Card.Content>
        </Card>

    );
}

export default PostCard;