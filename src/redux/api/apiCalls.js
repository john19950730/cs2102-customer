import fetch from 'node-fetch';

const endPoint = 'http://localhost:4000/fds';

export const login = ({ username, password }) => (fetch(`${endPoint}/customer/login/${username}/${password}`));

export const fetchCustomer = ({ cid }) => (fetch(`${endPoint}/customer/getCustomer/${cid}`));

export const registerCustomer = ({
	username,
	password,
	registeredCreditCard,
}) => (fetch(`${endPoint}/customer/addNewCustomer`, {
	method: 'POST',
	body: JSON.stringify({ username, password, registeredCreditCard }),
	headers: { 'Content-Type': 'application/json' },
}));

export const updateCustomer = (cid, newInformation) => (fetch(`${endPoint}/customer/updateCustomer/${cid}`, {
	method: 'POST',
	body: JSON.stringify(newInformation),
	headers: { 'Content-Type': 'application/json' },
}));

export const getRestaurantList = () => (fetch(`${endPoint}/restaurant/list`));

export const getRestaurantMenu = ({ rid }) => (fetch(`${endPoint}/restaurant/getMenu/${rid}`));

export const createNewOrder = ({ foodItems, cid, rid, address, promoid, specialRequest }) => (fetch(`${endPoint}/customer/createOrder`, {
	method: 'PUT',
	body: JSON.stringify({ foodItems, cid, rid, address, promoid, specialRequest }),
	headers: { 'Content-Type': 'application/json' },
}));

export const loginAsDeliveryRider = ({ username, password }) => (fetch(`${endPoint}/rider/login/${username}/${password}`))
