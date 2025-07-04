window.onload = function() {
    const data = JSON.parse(localStorage.getItem('currentPhoto'));

    const title = document.getElementById('title')
    title.textContent = data.title;
  
    
    const image = document.getElementById('image')
    const img = new Image(500);
    img.src = data.imageUrl;
    image.appendChild(img);

    const year = data.date.slice(0,4);
    const month = data.date.slice(4,6);

    const info = `
      <p>📷 촬영자: ${data.photographer}</p>
      <p>🚩 장소: ${data.location}</p>
      <p>🗓️ 촬영일: ${year}년 ${month}월</p>
    `;
    document.getElementById('info').innerHTML = info;
  
    const keywords = data.keyword.split(',');
    const keyword = document.getElementById('keywords');
    keywords.forEach(kw => {
      const tag = document.createElement('span');
      tag.className = 'keyword-tag';
      tag.textContent = `#${kw.trim()}  `;
      keyword.appendChild(tag);
    });
  };  