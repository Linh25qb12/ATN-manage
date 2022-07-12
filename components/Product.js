import React from 'react';
import {Button, Card} from 'semantic-ui-react';
import Link from 'next/link';
import {useUser} from '@auth0/nextjs-auth0';

const Product = ({product: {_id, name, description}}) => {
    const {user} = useUser();
    return (
        <div>
            <Card>
                <Card.Content>
                <Card.Header>
                    <Link href={`/${_id}`}>
                    <a>{name}</a>
                    </Link>
                </Card.Header>
                </Card.Content>
                <Card.Content extra>
                <p>Description: {description}</p>
                <Link href={`/${_id}`}>
                    <Button primary>View</Button>
                </Link>
                {!(user.nickname === "boss") && 
                <Link href={`/${_id}/edit`}>
                    <Button primary>Edit</Button>
                </Link>
                }
                </Card.Content>
            </Card>
        </div>
    )
  }
  

export default Product;