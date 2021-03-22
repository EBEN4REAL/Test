import axios from 'axios';
import {types} from '../types';
import {configParams} from '../../../config.js';



export const fetchPosts = () => {
	let req = axios.get("https://jsonplaceholder.typicode.com/posts")
		.then((res) => {
			return res.data
		}).catch(err => {
			console.log(err);
		});

	return {
		type: types.GET_POSTS,
		payload: req
	}
}