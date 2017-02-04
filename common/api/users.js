import fetch from 'isomorphic-fetch';

export default {
	register(params) {
		return fetch('/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(params)
			})
			.then(res => res.json());
	}
}
