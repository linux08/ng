//https://nextjs.org/docs/basic-features/data-fetching/get-static-props

export const getQuestData = async (id) => {
	try {
		const questRes = await fetch(`https://dummyjson.com/products/${String(id)}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());

		return {
			id: questRes.id,
			skillTree: questRes.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
			skill: questRes.brand,
			title: questRes.title,
			difficulty: Math.floor(questRes.rating),
			experience: questRes.stock * 100,
			gold: questRes.price,
			type: '-',
			cover: questRes.thumbnail,
			description: questRes.description,
			rewards: {
				experience: questRes.stock * 100,
				gold: questRes.price
			}
		};
	} catch (err) {
		console.log(err.message);
		return [];
	}
};

export const getAllQuests = async () => {
	try {
		const questRes = await fetch(`https://dummyjson.com/products?offset=0&limit=10`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => data.products);

		const formattedToQuests = questRes.map((quest: any) => {
			return {
				id: quest.id,
				skillTree: quest.category.replace('-', ' '), // 'home-decoration' => 'home decoration'
				skill: quest.brand,
				title: quest.title,
				difficulty: Math.floor(quest.rating),
				experience: quest.stock * 100,
				gold: quest.price,
				type: '-',
				cover: quest.thumbnail
			};
		});

		return formattedToQuests;
	} catch (err) {
		console.log(err.message);
		return [];
	}
};
