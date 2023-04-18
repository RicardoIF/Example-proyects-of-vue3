import {ref} from 'vue'

class PostService {

    constructor(){
        this.posts = ref([])
    }

    get Posts(){
        return this.posts
    }
    async fetchAll(){
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json

        }catch(err) {
            console.log(err)
        }
    }

}


export default PostService