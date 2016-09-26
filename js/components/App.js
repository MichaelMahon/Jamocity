import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ProductPage from './ProductPage'
import ProductPageForm from '../containers/ProductPageForm'
import SearchPageForm from '../containers/SearchPageForm'
import ProductPageContainer from '../containers/ProductPageContainer'
import SearchPageContainer from '../containers/SearchPageContainer'

const App = () => (
    <div>
        <AddTodo />
        <ProductPageForm />
        <SearchPageForm />
        <VisibleTodoList />
        <Footer />
        <ProductPageContainer/>
        <SearchPageContainer/>
    </div>
)

export default App