export const load = async ({ fetch }) => {
	const values: string[] = [];

	for (let i = 0; i < 5; i++) {
		const res = await fetch('https://api.chucknorris.io/jokes/random');
		const { value } = await res.json();
		values.push(value);
	}

	return { values };
};
