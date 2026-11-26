import axios from 'axios'

export const img_300 = 'https://image.tmdb.org/t/p/w300'
export const img_500 = 'https://image.tmdb.org/t/p/w500'

const baseUrl = "https://api.themoviedb.org/3"

const api = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "hu-HU",
    include_adult: false
  }
})

export const getTrendings = async (page=1) => {
  const response = await api.get("/trending/all/week",{params:{page}})
  return response.data.results.filter(
    media => media.media_type === 'movie' || media.media_type === 'tv'
  )
}

//export const getMovies = async () => {
//  const response = await api.get('/discover/movie', {
//    params: { sort_by: 'popularity.desc' }
//  })
//  return response.data.results
//}

export const getTv = async () => {
  const response = await api.get('/discover/tv', {
    params: { sort_by: 'popularity.desc' }
  })
  return response.data.results
}

export const getMedia = async (type, query, page = 1) => {
  const text = query.trim()
  if (!text) return []

  const response = await api.get(`/search/${type}`, {
    params: { query: text, page }
  })

  return response.data.results
}

export const getCategories = async (type) => {
  const url = `${baseUrl}/genre/${type}/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
  const response = await axios.get(url)
  return response.data.genres
}

export const getTrailer = async (type, id) => {
  const response = await api.get(`/${type}/${id}/videos`)
  return response.data.cast
}

//színészek:

export const getCredits = async (type, id) => {
  const response = await api.get(`/${type}/${id}/credits`)

  return response.data.cast
}

const pageTitle = [
  { type: 'trending', title: 'Popular This Week' },
  { type: 'movie', title: 'Movies' },
  { type: 'tv', title: 'TV Series' },
  { type: 'search', title: 'Search Media' }
]

export const getTitle = (type) => {
  const selected = pageTitle.find(obj => obj.type === type)
  return selected?.title || ''
}

export const getSelectedMediaByCateg = async (type, selectedCtg,page=1) => {
  const response = await api.get(`/discover/${type}?with_genres=${selectedCtg}`,{params:{page}}
  )
  return response.data.results
}

export const getPopularActors = async (page = 1) => {
  const response = await api.get(`/person/popular`, {
    params : {page}
  })
  return response.data.results
}

export const SearchActors = async (query,page = 1) => {
  const response = await api.get(`/search/person`, {
    params : {query ,page}
  })
  return response.data.results
}

export const getActorDetails = async (id) => {
  const response = await api.get(`/person/${id}`, {
  })
  return response.data
}

export const getActorCredits = async (id) => {
    const response = await api.get(`/person/${id}/combined_credits`)
    return response.data.cast
}