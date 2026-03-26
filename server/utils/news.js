const news = async () => {
    const res = await fetch('https://hn.algolia.com/api/v1/search?query=react&tags=story&hitsPerPage=3')
    const { hits } = await res.json()
    return hits
}

export default news
