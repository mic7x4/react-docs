import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

export default class FilterableProductTable extends Component {
    render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
        return (
            <div className="filtable">
                <h1>Filterable table</h1>
                <SearchBar/>
                <ProductTable  products={this.props.products} />
            </div>
        )
    }
}
