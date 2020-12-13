function ListItem(props) {
    return <li>{props.item}</li>;
}

function MontaList(props) {
    const item = props.itens;
    const listItems = item.map((item) =>
        <ListItem key={item.toString()} item={item} />
    );

    return (
        <ul>
            {listItems}
        </ul>
    );
}


export default MontaList;