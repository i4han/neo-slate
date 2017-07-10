import { ApolloClient, createNetworkInterface } from 'apollo-client'
import { ApolloModule } from 'apollo-angular'

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3000/graphql'
    })
})

export function provideClient(): ApolloClient {
    return client
}

export let AppApollo = ApolloModule.forRoot(provideClient)