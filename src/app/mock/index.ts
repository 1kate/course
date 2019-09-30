export interface IPlace {
    img:string,
    address:string,
    phone:  number 
    weather: {
       title:string,
       icon:string,
       water:number,
       temperature: number
    },
    social_info:{ 
       title: string,
       img:string,
       followers:number,
       following:number
    }, 
    type: string
 }

export const places: IPlace[] = [
    {
        img: 'assets/img/california.jpg',
        address: '939 Box Street, Saddlebrooke, California, 1068',
        phone: 841888255190,
        weather: {
          title: 'sun',
          icon: 'assets/img/sun.svg',
          water: 23,
          temperature: 31
        },
        social_info: {
          title: 'Ovolo Assitia',
          img: 'assets/img/shiba2.jpg',
          followers: 999,
          following: 155
        },
        type: 'California'
      },
      {
        img: 'assets/img/russia.jpg',
        address: '125009, г.Москва, Тверская улица, дом 13.',
        phone: 88974238944,
        weather: {
          title: 'rain',
          icon: 'assets/img/rain.svg',
          water: +4,
          temperature: +6
        },
        social_info: {
          title: 'Assitia Assitia',
          img: 'assets/img/cat.jfif',
          followers: 213,
          following: 431
        },
        type: 'Moscow'
      },
      {
        img: 'assets/img/italy.jpg',
        address: '942374, Consorzio Nazionale Imballaggi Via Pompeo Litta',
        phone: 88974238944,
        weather: {
          title: 'sun',
          icon: 'assets/img/sun.svg',
          water: +20,
          temperature: +23
        },
        social_info: {
          title: 'Assitia Itia',
          img: 'assets/img/enot.jpg',
          followers: 156,
          following: 874
        },
        type: 'Italy'
      },

]