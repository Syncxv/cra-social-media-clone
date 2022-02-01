import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
    link: createUploadLink({
        uri: 'http://localhost:8000/graphql',
        fetch
        // fetchOptions: { credentials: 'include' }
    }),
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})
ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
