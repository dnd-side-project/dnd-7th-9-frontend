import axios from 'axios';

const signIn = async (apiUrl: string) => {
	try {
		const { data, status } = await axios.post(apiUrl, {
			headers: {
				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		});
		if (status !== 200) throw new Error('ERROR!!');
		return data;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default signIn;
