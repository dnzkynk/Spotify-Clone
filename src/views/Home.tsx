import BoxSection from "../components/BoxSection";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Daily Mix 1",
      singer: "Sagopa Kajmer",
      image:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6eb76d24f4d5055fbf2642c3/1/tr/default",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      id: 2,
      title: "Beğenilen Şarkılar",
      singer: "Spotify",
      image: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      id: 3,
      title: "ZOR",
      singer: "UZI",
      image: "https://i.scdn.co/image/ab67616d00001e0249fbfede365b32ce524eec19",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      id: 4,
      title: "Oysa herkes öldürür sevdiğini",
      singer: "Ebrar Beyza Uçar",
      image: "https://i.scdn.co/image/315653c471d0cb82107b597624c21ac855e952a1",
      type: "podcast",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      id: 5,
      title: "Aynen",
      singer: "Heijan, Muti",
      image: "https://i.scdn.co/image/ab67616d00001e02965a9c2c41ab5c84477f3606",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];
  const items2 = [
    {
      id: 6,
      title: "KafKef",
      singer: "Sagopa Kajmer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sagopa_Kajmer.jpg/200px-Sagopa_Kajmer.jpg",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      id: 7,
      title: "Brand Oynarken Dinlenecek Şarkılar",
      singer: "cznkrbn",
      image:
        "https://media.licdn.com/dms/image/C4D03AQG8yPfphj4E0Q/profile-displayphoto-shrink_800_800/0/1652775889670?e=2147483647&v=beta&t=GBY3vQO855yaNNUef_x802oi01htCCmbWsEZ-GoFAe8",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: 8,
      title: "Holocoust",
      singer: "Ceza",
      image:
        "https://paradiseproduction.com.tr/wp-content/uploads/2021/08/ceza.png",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      id: 9,
      title: "Sad Songs",
      singer: "doeda",
      image:
        "https://pbs.twimg.com/profile_images/1553140820634656768/WKcn4lCF_400x400.jpg",
      type: "podcast",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      id: 10,
      title: "Evde Ben",
      singer: "Okaner",
      image:
        "https://yeniadimgazetesicom.teimg.com/yeniadimgazetesi-com/uploads/2023/07/ekran-goruntusu-2023-07-25-154047.png",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
  ];
  const items3 = [
    {
      id: 11,
      title: "I Drive",
      singer: "Ben",
      image: "https://tr.web.img4.acsta.net/pictures/16/05/17/17/28/208580.jpg",
      type: "artist",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      id: 12,
      title: "Top-Türkiye",
      singer: "Spotify",
      image:
        "https://charts-images.scdn.co/assets/locale_en/regional/daily/region_tr_default.jpg",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      id: 13,
      title: "NKVT",
      singer: "Spotify",
      image: "https://i.scdn.co/image/ab67706f0000000236bb9260c31bb10cf66f5ecb",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      id: 14,
      title: "2000'ler Mix",
      singer: "Ahmet Aslan, Barış Akarsu, Duman ve daha fazlası",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/7nx9ts8pRmbvMQvnPwqDSS/tr/default",
      type: "podcast",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
    {
      id: 15,
      title: "HOT HITS TÜRKİYE",
      singer: "Spotify",
      image: "https://i.scdn.co/image/ab67706f000000025f398a6d40886cb8db0df73a",
      type: "album",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
  ];
  return (
    <div className="grid gap-y-8">
      <BoxSection title="Recently played" more={true} items={items} />
      <BoxSection title="Show The Try" more={true} items={items2} />
      <BoxSection title="Made For Deniz Kaynak" more={true} items={items3} />
    </div>
  );
}
