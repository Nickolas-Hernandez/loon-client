const fetchCurrentMoonData = async () => {
    const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL
    try {
        const response = await fetch(`${process.env.EXPO_PUBLIC_API_BASE_URL}/moon-phase`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) { 
        console.error("Error fetching moon data:", error);
        throw error;
    }
};

export { fetchCurrentMoonData };