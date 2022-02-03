import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import ModalLayer from './components/organisms/Modal/ModalLayer'

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})
const uploadLink = createUploadLink({
    uri: 'http://localhost:8000/graphql'
    // fetchOptions: { credentials: 'include' }
})

const client = new ApolloClient({
    link: ApolloLink.from([authLink, uploadLink]),
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache()
})
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
                <ModalLayer />
            </ApolloProvider>
        </BrowserRouter>
        W
    </React.StrictMode>,
    document.getElementById('root')
)
