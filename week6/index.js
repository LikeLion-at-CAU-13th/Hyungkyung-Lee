const baseURL =  "http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "olH%2BrV63unRnWiwackdJ%2FUUAfkjTwEkOUX5takPxavcdvve9Su3LFvrS7VvJIdv5qWJXWq4qLiMJg9GLeFJaRw%3D%3D",
    numofRows: 6,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
};

class photoData {
    constructor(title, imageUrl, photographer, location, date, keyword){
        this.title = title;
        this.imageUrl = imageUrl;
        this.photographer = photographer;
        this.location = location;
        this.date = date;
        this.keyword = keyword;
    }

    getTitle() {
        return this.title;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getPhotographer() {
        return this.photographer;
    }

    getLocation() {
        return this.location;
    }

    getDate() {
        return this.date;
    }

    getKeyword() {
        return this.keyword;
    }
}

const container = document.getElementById("container");
let count = 150;
let total = 0;

async function getData() {
    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${count}&serviceKey=${option.serviceKey}`;

    const fetchData = await fetch(url);
    console.log(fetchData);

    const toJson = await fetchData.json();
    //console.log(toJson);

    const datas = await toJson.response.body.items.item;
    console.log(datas);

    datas.map((data) => {
        const list = document.createElement('div');
        list.id = 'list';

        const image = document.createElement('img');
        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        <${total+1}번째 사진>
        📷 제목 : ${data.galTitle}
        🚩 장소 : ${data.galPhotographyLocation}`;

        list.appendChild(image);
        list.appendChild(info);

        const button = document.createElement('button');
        button.innerText = "더보기";
        list.appendChild(button);

        const photo = new photoData(
            data.galTitle,
            data.galWebImageUrl,
            data.galPhotographer,
            data.galPhotographyLocation,
            data.galPhotographyMonth,
            data.galSearchKeyword
        );
        
        button.onclick = () => {
            localStorage.setItem('currentPhoto', JSON.stringify(photo));
            window.open('detail.html');
        };
        
        container.appendChild(list);
        count ++;
        total ++;

        console.log(list);
    })
};
