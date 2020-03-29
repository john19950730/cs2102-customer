const endPoint = "https://localhost:4000/";

export const login = ({ username }) => {
	fetch(`${endPoint}fds/customer/login/${username}`);
};