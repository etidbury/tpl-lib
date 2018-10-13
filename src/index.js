// const {
//     NODE_ENV
// } = process.env

// const isProd = NODE_ENV === 'production'

import Client from 'lib/Client'

export const getRandom = async ()=>{
    return Client.get('http://example.com')
}