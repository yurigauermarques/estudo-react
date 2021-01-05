import React from 'react';

class SearchBar extends React.Component {
    
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsStockChange = this.handleIsStockChange.bind(this);
    }

    handleFilterTextChange(e){
       this.props.onFilterTextChange(e.target.value);
    }
    handleIsStockChange(e){
        this.props.onInStockChange(e.target.checked);
    }
    
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return(
            <div className={'FancyBorder FancyBorder-blue'}>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={filterText} 
                        onChange={this.handleFilterTextChange} 
                    />
                    <p>
                        <input 
                            type="checkbox" 
                            checked={inStockOnly} 
                            onChange={this.handleIsStockChange}
                        />
                        {' '}
                        Only show products in stock
                    </p>
                </form>
            </div>
        );
    }
}

class ProductTable extends React.Component {
 
    render(){
        const filterText = this.props.filterText;            
        const inStockOnly = this.props.inStockOnly;        
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach(product => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }

            if(inStockOnly && !product.stocked){
                return;
            }

            if(product.category !== lastCategory){
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });
        return(
            <div className={'FancyBorder FancyBorder-green'}>
                <table>
                    <thead>
                        <tr>
                            <td>Name </td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category;
        return(
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render(){
        const product = this.props.product;
        const name = product.stocked ? 
            product.name : 
            <span style={{color: 'red'}}>
                {product.name}
            </span>
            ;
        const price = product.price;
        return(
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}

class FilterableProductTable extends React.Component {  
    constructor(props){
        super(props);
        this.state= {
            filterText: '',
            inStockOnly: false,
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleIsStockChange = this.handleIsStockChange.bind(this);
    }

    handleFilterTextChange(filterText){
        this.setState({
            filterText: filterText
        });
    }
    handleIsStockChange(isStockOnly){
        this.setState({
            inStockOnly: isStockOnly
        });
    }

    render(){
        return(
            <div className={'FancyBorder FancyBorder-orange'}>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStockChange={this.handleIsStockChange}
                />
                <ProductTable 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}    
                    products={this.props.products} 
                />
            </div>
        );
    }    
}


const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
 
class ProdutcSearchApp extends React.Component{
    render(){  
        return(
            <FilterableProductTable products={PRODUCTS} />
        );
    }
}

export default ProdutcSearchApp;