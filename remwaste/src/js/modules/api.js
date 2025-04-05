const gettingApi = async () => {
    try {
        const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        return data

    } catch (error) {
        console.error(error)
    }
}

export { gettingApi }