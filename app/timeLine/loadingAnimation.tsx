import React from 'react';

export default function LoadingAnimation() {
	const items: React.ReactElement[] = [];
	const article = () => {
		return (
			<div className='flex animate-pulse space-x-4 w-160 m-auto'>
				<div className='flex-1 space-y-6 py-1'>
					<div className='h-4 rounded bg-gray-200'></div>
					<div className='space-y-3'>
						<div className='grid grid-cols-3 gap-4'>
							<div className='col-span-2 h-2 rounded bg-gray-200'></div>
							<div className='col-span-1 h-2 rounded bg-gray-200'></div>
							<div className='col-span-1 h-2 rounded bg-gray-200'></div>
							<div className='col-span-1 h-2 rounded bg-gray-200'></div>
						</div>
						<div className='h-2 rounded bg-gray-200'></div>
						<div className='h-2 rounded bg-gray-200'></div>
						<div className='h-2 rounded bg-gray-200'></div>
						<div className='h-2 rounded bg-gray-200'></div>
					</div>
				</div>
			</div>
		);
	};

	for (let a = 0; a < 6; a++) {
		items.push(article());
	}

	return <div className='mx-auto w-full p-4'>{items}</div>;
}
