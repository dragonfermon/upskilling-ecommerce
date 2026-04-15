export async function httpGet<t>(url: string): Promise<t> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network Error');
    }

    return response.json();
}