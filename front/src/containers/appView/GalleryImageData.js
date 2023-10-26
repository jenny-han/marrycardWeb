function importAll(r) {
    return r.keys().map(r)
    }
    
  const images = importAll(require.context('../../lib/img/gallery/', false, /\.(png|jpe?g|svg)$/));
  
    export let GallaryImage = []
  
    images.map((img) => {
      return GallaryImage.push({image: img})
    })
  
    GallaryImage = GallaryImage.filter((v, i) => 
    GallaryImage.findIndex(x => x.image === v.image) === i);
  
  
  
  
  