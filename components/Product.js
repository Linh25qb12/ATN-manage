import React from 'react';
import {Button, Card} from 'semantic-ui-react';
import Link from 'next/link';

const Product = ({product: {_id, name}}) => {
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
                <Link href={`/${_id}`}>
                    <Button primary>View</Button>
                </Link>
                <Link href={`/${_id}/edit`}>
                    <Button primary>Edit</Button>
                </Link>
                </Card.Content>
            </Card>
        </div>
    )
  }
  

export default Product;