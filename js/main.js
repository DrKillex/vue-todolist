'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: 'testo 1',
                    done: false
                },
                {
                    text: 'testo 2',
                    done: true
                }
            ],
            newTodo: {
                text: '',
                done: false
            },
        }
    }
}).mount('#app')