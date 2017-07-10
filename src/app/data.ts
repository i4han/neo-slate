import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'

export let SayQuery = gql`
    query test {
        say
    }
`
export interface SayInterface {
  say
}

export let VoterQuery = gql`
    query voters ($mailseqn: String!) {
        voters(MAILSEQN: $mailseqn) {
            MAILSEQN
            LNAME
            FNAME
        }
    }
` 
export interface VoterInterface {
    MAILSEQN
    LNAME
    FNAME
}

export interface VotersInterface {
    voters: [VoterInterface]
}

// export function voterQuery<Function> (apollo: Apollo, variables: Object) {
//     apollo.watchQuery<VotersInterface>({ 
//         query: VoterQuery,
//         variables: variables,
//     })
// }
