import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import ModalLayer from './components/organisms/Modal/ModalLayer'
import LayerContainer from './components/organisms/Layer/LayerContainer'

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

export const client = new ApolloClient({
    link: ApolloLink.from([authLink, uploadLink]),
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true
})
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
                <ModalLayer />
                <LayerContainer />
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
