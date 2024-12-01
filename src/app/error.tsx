'use client'; // Error components must be Client Components

import WarningIcon from '@mui/icons-material/Warning';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void; }) => {
	console.error(error);

	return (
		<main>
			<section>
				<Box sx={{ textAlign: 'center' }}>
					<WarningIcon />
					<h1>Oops, something went wrong!</h1>
					<Box sx={{ m: 5 }}>
						<Button onClick={reset}>Try again</Button>
					</Box>
					<Link href='/?slug=homepage'>Back to home</Link>
					<div>
						<Box
							component="img"
							src='https://img.freepik.com/free-vector/500-internal-server-error-concept-illustration_114360-1905.jpg'
							alt='500'
						/>
					</div>
				</Box>
			</section>
		</main>
	);
}

export default Error;
