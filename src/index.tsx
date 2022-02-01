import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { BrowserRouter } from 'react-router-dom'
const client = new ApolloClient({
    link: createUploadLink({
        uri: 'http://localhost:8000/graphql',
        fetch,
        headers: {
            authorization: localStorage.getItem('token') || null
        }
        // fetchOptions: { credentials: 'include' }
    }),
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
        W
    </React.StrictMode>,
    document.getElementById('root')
)
