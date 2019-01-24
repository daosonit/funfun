export default function ({ $axios, redirect }) {
    $axios.onRequest((config) => { 
        console.log(config)
    })
    $axios.onError((error) => { 
        console.log(error)
    })
}