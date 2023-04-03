import jwt from 'jsonwebtoken';

const generateToken = (userId: string) => {
	const token = jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
		expiresIn: '5m',
	});

	return token;
};

const decodeToken = (token: string) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET!);
	return decoded;
};

export { generateToken, decodeToken };
