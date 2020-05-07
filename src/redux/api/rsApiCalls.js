import fetch from 'node-fetch';

const endPoint = 'http://localhost:4000/fds';

export const login = ({ username, password }) => (fetch(`${endPoint}/restaurantstaff/login/${username}/${password}`));

export const addFoodItem = (foodItem, rid, rstaffid) => (fetch(`${endPoint}/restaurantstaff/${rid}/${rstaffid}/addFoodItem`, {
	method: 'POST',
	body: JSON.stringify({ foodItem }),
	headers: { 'Content-Type': 'application/json' },
}));

export const fetchRestaurant = ({ rid }) => (fetch(`${endPoint}/restaurant/getRestaurant/${rid}`));
