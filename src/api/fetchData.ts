export async function fetchData<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('error');
    }
    const data: T = await res.json();
    return data;
  }