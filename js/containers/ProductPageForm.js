import React from 'react'
import { connect } from 'react-redux'
import { loadProducts } from '../actions'


let ProductPageForm = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(loadProducts(input.value))
                input.value = ''
            }}>
                <button type="submit">
                    Login:
                </button>
                <input ref={node => {
                    input = node
                }} />

            </form>
        </div>
    )
}
ProductPageForm = connect()(ProductPageForm)

export default ProductPageForm