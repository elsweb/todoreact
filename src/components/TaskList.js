import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://elsweb.servehttp.com:3001'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTAzN2VmLTZhNDctNDQwYi1iZTA4LTIxMmEzYzM0ZDhkMCIsIm5hbWUiOm51bGwsImVtYWlsIjoiZWxzd2ViLmNvbnRhdG9AZ21haWwuY29tIiwiaWF0IjoxNjcwMTIxMjM2LCJleHAiOjE2NzAxNDI4MzZ9.MJo3Z7tVr_jPisyXzb5AYVlGEbk2gRMUJE9f5L4c1vA';

export default class TaskList extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        let id = '5ba037ef-6a47-440b-be08-212a3c34d8d0'
        axios.get(`/users/${id}/todos`, { headers: { "Authorization": `Bearer ${token}` } }).then(res => {
            const todos = res.data;
            this.setState({ todos });
        })
    }

    render() {
        return (
            <ul>
                {
                    this.state.todos
                        .map(todos =>
                            <li class=" mt-4" id={todos.id}>
                                <div class="flex gap-2">
                                    <div class="w-12/12 h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                                    <span id={`check-${todos.id}`} class=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" onclick="checked(1)"><i class="text-white fa fa-check"></i></span>
                                        <strike id={`strike1-${todos.id}`} class="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold">{todos.title}</strike>
                                    </div>
                                </div>
                            </li>
                        )
                }
            </ul>
        )

    }
}