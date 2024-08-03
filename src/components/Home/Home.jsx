import { useState, useEffect } from 'react';

const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://random.dog/woof.json');
      const data = await response.json();
      setImageUrl(data.url);
    } catch (error) {
      console.error('Error fetching the dog image:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
        <h1 className='text-2xl text-center text-violet-600 font-SuperUse'>...The Random Dog pics...</h1>
      {loading ? (
       <img src="/images/480.gif" alt="" />
      ) : (
        <div>
          <img src={imageUrl} alt="Random Dog" className='object-cover w-96 h-96' />
          <br />
          <button className='p-2 text-white bg-blue-500 rounded-xl' onClick={fetchDogImage}>Another Dog</button>
        </div>
      )}
    </div>
  );
};

export default Home;
