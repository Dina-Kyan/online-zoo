import { Pet } from '../types/pet';
import { Feedback } from '../types/feedback';
import { User } from '../types/user';
import { fetchData } from './fetchData.js';

const BASE_URL = "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod";

export async function getPets() {
    const response = await fetch(`${BASE_URL}/pets`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch pets");
    }
  
    const data = await response.json();
    
    return data.data;
  }

export async function getFeedback() {
    const response = await fetch(`${BASE_URL}/feedback`);
  
    if (!response.ok) {
      throw new Error("Failed to fetch feedback");
    }
  
    const data = await response.json();
    
    return data.data;
  }

