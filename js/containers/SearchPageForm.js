import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { fetchEbayPosts } from '../actions'

let SearchPageForm = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(fetchPosts(input.value))
                dispatch(fetchEbayPosts(input.value))
                input.value = ''
            }}>
                <button type="submit">
                    Search for Product
                </button>
                <input ref={node => {
                    input = node
                }} />

            </form>
        </div>
    )
}
SearchPageForm = connect()(SearchPageForm)

export default SearchPageForm