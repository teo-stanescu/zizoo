import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ResultsItem = (props) => (
    <Card>
        <Image src={props.data.imageUrl} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.data.type}</span>
            </Card.Meta>
            <Card.Description>
                <div style={{ justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', display: 'flex'}}>
                    <div>Length: {props.data.length}</div>
                    <div>Guests: {props.data.guests}</div>
                    <div>Year: {props.data.year}</div>
                </div>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <h4>
                <Icon name='money' />
                {props.data.price}
            </h4>
        </Card.Content>
    </Card>
)

export default ResultsItem