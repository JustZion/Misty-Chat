import React from 'react'
import axios from 'axios'

export const fetchFromAPI = async (query,setData) => {
    const options = {
        
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          q : query,
          part: 'snippet,id',
          maxResults: '40',
        },
        headers: {
          'X-RapidAPI-Key': '0d472202damshc85b800e5ec6ce3p1745c8jsnf24715b359fb',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
      };
      
      const result = async () => {
        const {data} = await axios.request(options)
        return data.items
        console.log(data.items, 'daataa')
      }

      return result()
}
   
   