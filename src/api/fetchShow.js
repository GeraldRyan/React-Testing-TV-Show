import axios from 'axios'    
    
    // Async call being in component makes hard to test async nature of component ...
    export const fetchShow = () => { 
      return axios.get(
          "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        ).then(res => { return res} )

    };