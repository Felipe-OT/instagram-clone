import { useEffect } from "react";
import { useState } from "react";

import GooglePlay from "../../assets/google-play.png";
import AppleStore from '../../assets/apple-store.png'

const DownloadAppButtons = ({store}) => {
  const [storeInfo, setStoreInfo] = useState({url: '', image: ''});

  useEffect(() => {
    if (store === 'google') {
        setStoreInfo({image: GooglePlay, url: 'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D83A16199-5EFC-4F13-A6FA-95C353DACD58%26utm_content%3Dlo%26utm_medium%3Dbadge'});
    } else if (store === 'apple') {
        setStoreInfo({image: AppleStore, url: 'https://apps.apple.com/app/instagram/id389801252?vt=lo'})
    }
    
  },[])
  

  return (
    <a href={storeInfo.url} target="_blank">
      <img className="max-w-[136px]" src={storeInfo.image} alt="" />
    </a>
  );
};

export default DownloadAppButtons;
