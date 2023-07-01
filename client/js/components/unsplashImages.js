function getUnsplashImage(location) {
    const url = `https://api.unsplash.com/photos/random?query=${location}&client_id=Iy-9nBKpFYGdxpRDphCLXT_rdtdPdF1eGkPeTj7UEQA&orientation=landscape&count=1`;
  
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const image = data[0].urls.regular;
        return image;
      })
      .catch((err) => console.log(err));
  }
  
  export { getUnsplashImage };