const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

// Special response handler for delete operations (no JSON parsing needed)
function checkDeleteResponse(res) {
  return res.ok ? Promise.resolve() : Promise.reject(`Error: ${res.status}`);
}

// Helper function to get authorization headers
function getAuthHeaders(token) {
  return {
    "Content-Type": "application/json",
    ...(token && { authorization: `Bearer ${token}` }),
  };
}

// Unprotected - no token required
function getItems() {
  return fetch(`${baseUrl}/items`).then(checkResponse);
}

// Protected - token required
function addItem({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: getAuthHeaders(token),
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkResponse);
}

// Protected - token required
function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  }).then(checkDeleteResponse);
}

// Update user profile - token required
function updateProfile({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: getAuthHeaders(token),
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
}

// Add like to item - token required
function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: getAuthHeaders(token),
  }).then(checkResponse);
}

// Remove like from item - token required
function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: getAuthHeaders(token),
  }).then(checkResponse);
}

export {
  getItems,
  addItem,
  deleteItem,
  updateProfile,
  addCardLike,
  removeCardLike,
};
