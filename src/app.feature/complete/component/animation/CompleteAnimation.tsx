import React, { useEffect } from 'react';
import { useReward } from 'react-rewards';

export default function CompleteAnimation() {
	const { reward } = useReward('rewardId', 'confetti', { lifetime: 330, spread: 150, colors: ['#24CD88', '#F1C93D'] });

	useEffect(() => {
		reward();
	});

	return (
		<div className="text-center pb-10px">
			<span id="rewardId" />
		</div>
	);
}
