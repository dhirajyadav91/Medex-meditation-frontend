// 📁 src/api/session.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8080";

// ====================== Public Sessions ======================

// GET all published sessions (no token needed)
export const getPublicSessions = () => {
  return axios.get(`${BASE_URL}/api/sessions`);
};

// ====================== My Sessions (Protected) ======================

// GET my sessions (requires token)
export const getMySessions = (token) => {
  return axios.get(`${BASE_URL}/api/my-sessions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// GET single session by ID (requires token)
export const getSingleSession = (id, token) => {
  return axios.get(`${BASE_URL}/api/my-sessions/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// ====================== Create / Update ======================

// Save draft session (requires token)
export const saveDraft = (data, token) => {
  return axios.post(`${BASE_URL}/api/my-sessions/save-draft`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Publish session (requires token)
export const publishSession = (data, token) => {
  return axios.post(`${BASE_URL}/api/my-sessions/publish`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
